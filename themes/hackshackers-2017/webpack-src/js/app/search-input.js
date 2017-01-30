export default function () {
  const searchBtn = document.querySelector('.main-nav-search');
  const searchOverlay = document.querySelector('.search-overlay');
  const searchInput = document.querySelector('.input-search-desktop');
  if (searchBtn) {
    searchBtn.addEventListener('click', (evt) => {
      evt.preventDefault();
      searchInput.focus();
      searchOverlay.classList.toggle('show');
    });
  }
}
