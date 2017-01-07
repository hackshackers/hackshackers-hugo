/**
 * Use Lunr.js to query and render in the List layout
 */

export default function initSearch() {
  _initSearch();
  window.addEventListener('hashchange', _initSearch);
}

function _initSearch() {
  if (0 !== window.location.pathname.indexOf('/search/')) {
    return;
  }

  // Get query from hash and render in page
  const query = 1 < window.location.hash.length ? _getQuery(window.location.hash) : 'No search term';
  document.getElementById('search-query').innerText = query;
}

function _getQuery(hash) {
  return decodeURIComponent(
    hash.substr(1) // strip leading '#'
  ).replace(/\+/g, ' '); // convert '+' to ' '
}
