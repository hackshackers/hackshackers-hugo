/**
 * Use Lunr.js to query and render in the List layout
 */

import 'whatwg-fetch';
import lunr from 'lunr';
import { indexUri, emptyQueryMsg } from './config';

/**
 * Execute search using window hash, setup listener to search again if hash changes
 *
 * @return none
 */
export default function initSearch() {
  // Must be on Search page
  if (0 !== window.location.pathname.indexOf('/search/')) {
    return;
  }

  // Get query from hash and render in page
  const query = _getQuery();
  _displayQuery(query);

  fetch(indexUri)
    .then((res) => res.text(), (err) => console.log(err)) // eslint-disable-line no-console
    .then((text) => JSON.parse(text))
    .catch((err) => console.log(err)) // eslint-disable-line no-console
    .then((docs) => {
      // setup Lunr and show initial results
      const indexer = _initLunr(docs);
      _displayResults(indexer, query);

      // reuse Lunr instance if hash changes
      window.addEventListener('hashchange', () => {
        const newQuery = _getQuery();
        _displayQuery(newQuery);
        _displayResults(indexer, newQuery);
      });
    });
}

/**
 * Setup Lunr instance
 *
 * @param array docs Array of page objects from search index file
 * @return obj Lunr index
 */
function _initLunr(docs) {
  const _indexer = lunr(function () {
    // Arrow function would not have the correct context here
    this.field('content');
    this.ref('uri');
  });

  /**
   * @todo translate doc.date from YYYY-MM-DD to timestamp
   */
  docs.forEach((doc) => _indexer.add(doc));
  return _indexer;
}

/**
 * Display search results
 *
 * @param obj indexer Lunr instance
 * @param string query Search query
 * @return none
 */
function _displayResults(indexer, query) {
  if (! query) {
    return;
  }
  console.log(indexer.search(query)[0]);
}

/**
 * Parse search query from hash
 *
 * @return string|null Parsed hash or null if empty
 */
function _getQuery() {
  if (1 >= window.location.hash.length) {
    return null;
  }

  return decodeURIComponent(
    window.location.hash.substr(1) // strip leading '#'
  ).replace(/\+/g, ' '); // convert '+' to ' '
}

/**
 * Show search query in page
 *
 * @param string query Search query after parsing from hash
 * @return none
 */
function _displayQuery(query) {
  document.getElementById('search-query').innerText = query || emptyQueryMsg;
}
