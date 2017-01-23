export default function () {
  const searchBtn = document.querySelector('.main-nav-search');
  const searchOverlay = document.querySelector('.search-overlay');
  const searchInput = document.querySelector('.input-search');
  if (searchBtn) {
    searchBtn.addEventListener('click', (evt) => {
      evt.preventDefault();
      searchOverlay.classList.toggle('show');
      searchInput.focus();
    });
  }
}
