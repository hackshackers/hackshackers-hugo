export default function () {
  const searchBtn = document.querySelector('.main-nav-search');
  const searchOverlay = document.querySelector('.search-overlay');
  const searchInput = document.getElementById('input-search-desktop');
  const fullBleed = document.querySelector('.full-bleed');
  if (searchBtn) {
    searchBtn.addEventListener('click', (evt) => {
      evt.preventDefault();
      searchOverlay.classList.toggle('show');
      searchInput.focus();
    });

    document.addEventListener('keydown', ({ key }) => {
      if (('Escape' === key || 'Enter' === key) && searchOverlay.classList.contains('show')) {
        // DESKTOP If a user presses the enter or the escape key,
        // and the search toggle is open, close it.
        searchOverlay.classList.toggle('show');
      }
    });

    document.querySelector('.mobile-nav-search button').onclick = function () {
      // MOBILE: Close side bar if either enter pressed, or sidebar clicked.
      fullBleed.classList.toggle('active');
    };

    document.addEventListener('click', () => {
      if (searchOverlay.contains(event.target) &&
      !searchInput.contains(event.target)) {
        // Close the search toggle if clicking anywhere besides the
        // text box
        searchOverlay.classList.toggle('show');
      }
    });
  }
}
