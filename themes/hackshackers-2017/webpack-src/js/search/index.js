/**
 * Use Lunr.js to query and render in the List layout
 */

import 'whatwg-fetch';
import lunr from 'lunr';
import * as config from './config';
import template from 'lodash/template';
import resultTemplate from 'raw!./search-partial.html';
import fecha from 'fecha';
import slug from 'slug';

/**
 * Execute search using window hash, setup listener to search again if hash changes
 *
 * @return none
 */
export default function initSearch() {
  // Setup search form submit listeners
  const searchForms = document.querySelectorAll('form.search');
  [].forEach.call(searchForms, (form) => {
    form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      const inputEl = evt.target.querySelector('.input-search');
      if (!inputEl || !inputEl.value.length) {
        return;
      }

      if (_isSearchPage()) {
        _searchPageSubmitHandler(inputEl.value);
      } else {
        _genericSubmitHandler(inputEl.value);
      }
    });
  });

  // If not on Search page, we're done
  if (!_isSearchPage()) {
    return;
  }

  // Get query from hash and render in page
  const query = _getQuery();
  _displayQuery(query);

  fetch(config.indexUri)
    .then((res) => res.text(), (err) => console.log(err)) // eslint-disable-line no-console
    .then((text) => JSON.parse(text))
    .catch((err) => console.log(err)) // eslint-disable-line no-console
    .then((docs) => {
      // setup Lunr and show initial results
      const indexer = _initLunr(docs);
      _displayResults(indexer, query, docs);

      // reuse Lunr instance if hash changes
      window.addEventListener('hashchange', () => {
        const newQuery = _getQuery();
        _displayQuery(newQuery);
        _displayResults(indexer, newQuery, docs);
      });
    });
}

/**
 * Is current page the search page?
 *
 * @param string pathname Optional pathname, defaults to window.location.pathname
 * @return bool
 */
function _isSearchPage(pathname = null) {
  return config.searchPageUriRegex.test(pathname || window.location.pathname);
}

/**
 * Setup search forms *not* on the Search page, e.g. 404, header, etc
 * When submitted, these forms will redirect to the Search page with the
 * search query as the page hash
 *
 * @param string query Search query
 * @return none
 */
function _genericSubmitHandler(query) {
  window.location = `${config.searchPageUri}#${encodeURIComponent(query)}`;
}

/**
 * Form submit listener for use on Search page only
 *
 * @param string query Search query
 * @return none
 */
function _searchPageSubmitHandler(query) {
  window.location.hash = `#${encodeURIComponent(query)}`;
}

/**
 * Setup Lunr instance
 *
 * @param array docs Array of page objects from search index file
 * @return obj Lunr index
 */
function _initLunr(docs) {
  const _indexer = lunr(function () { // eslint-disable-line func-names
    // Arrow function would not have the correct context here
    this.field('title', { boost: 10 });
    this.field('authors', { boost: 8 });
    this.field('categories', { boost: 6 });
    this.field('tags', { boost: 4 });
    this.field('content');
    this.ref('idx');
  });

  /**
   * @todo translate doc.date from YYYY-MM-DD to timestamp
   */
  docs.forEach((doc, idx) => {
    doc.idx = idx; // eslint-disable-line no-param-reassign
    _indexer.add(doc);
  });
  return _indexer;
}

/**
 * Display search results
 *
 * @param obj indexer Lunr instance
 * @param string query Search query
 * @param array docs List of docs
 * @return none
 */
function _displayResults(indexer, query, docs) {
  const resultsEl = document.getElementById('search-results');
  if (!query || !resultsEl) {
    return;
  }

  // clear resultsEl
  resultsEl.innerHTML = '';

  const compiler = template(resultTemplate);

  const results = indexer.search(query);
  if (!results || !results.length) {
    _displayNoResults(resultsEl);
    return;
  }

  results.slice(0, config.maxResults)
    .forEach((result, idx) => {
      if (!docs[result.ref]) {
        return;
      }
      const doc = docs[result.ref];
      const _html = _singleResultHtml(doc, idx, compiler);
      if (!_html) {
        return;
      }
      const placeholder = document.createElement('div');
      // _html is escaped using <%- var %> template tags
      placeholder.innerHTML = _html;
      resultsEl.appendChild(placeholder.firstElementChild);
    });
}

/**
 * Show message if no results were found
 *
 * @param HTMLElement resultsEl
 * @return none
 */
function _displayNoResults(resultsEl) {
  resultsEl.innerHTML = `<article class="archive"><h3>${config.noResultsMsg}</h3></article>`; // eslint-disable-line no-param-reassign
}

/**
 * Get HTML string for single search result
 *
 * @param obj doc Lunr search result
 * @param int idx Index in results
 * @param func compiler Lodash template compiler
 * @return string|null HTML for search result or null if missing required elements
 */
function _singleResultHtml(doc, idx, compiler) {
  // Requires index, title permalink
  if (('number' !== typeof idx) || !doc.title || !doc.uri) {
    return null;
  }

  const templateOpts = {
    idx,
    title: doc.title,
    permalink: doc.uri,
    isBlog: 0 === doc.uri.indexOf('/blog/'),
    excerpt: doc.content ? _getExcerpt(doc.content) : '',
    date: doc.date ? _parseDate(doc.date) : '',
    // _mapTerms() handles invalid doc.taxonomy
    authors: _mapTerms(doc, 'authors'),
    tags: _mapTerms(doc, 'tags'),
    categories: _mapTerms(doc, 'categories'),
  };

  return compiler(templateOpts);
}

/**
 * Get permalinks from human readable terms
 *
 * @param object doc
 * @param string taxonomy
 * @return array
 */
function _mapTerms(doc, taxonomy) {
  if (!doc[taxonomy] || !doc[taxonomy].length) {
    return [];
  }
  return doc[taxonomy].map((name) => ({
    name,
    url: `/${taxonomy}/${slug(name)}`,
  }));
}

/**
 * Rough excerpt from main content
 *
 * @param string content Input content
 * @return string Excerpted content
 */
function _getExcerpt(content) {
  if (content.length <= (config.excerptChars + config.excerptFuzz)) {
    return content;
  }
  return content.substr(0, config.excerptChars) // trim to max length
    .split(/\s/) // split by whitespace
    .slice(0, -1) // remove last element in case it's a partial word
    .concat(['...']) // append ...
    .join(' '); // add the whitespace back in as spaces
}

/**
 * Translate YYYY-MM-DD to nicely readable date
 *
 * @param string input
 * @param string output
 */
function _parseDate(input) {
  return fecha.format(
    fecha.parse(input, 'YYYY-MM-DD'),
    'MMM D, YYYY'
  );
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
  const queryEl = document.getElementById('search-query');
  if (queryEl) {
    queryEl.innerText = query || config.emptyQueryMsg;
  }
}
