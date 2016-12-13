export default function () {
  const menuBtn = document.querySelector('.hamburger-menu');
  const mainNav = document.querySelector('.main-nav');
  if (menuBtn) {
    menuBtn.addEventListener('click', (evt) => {
      evt.preventDefault();
      console.log('hello');
      mainNav.classList.add('active');
    });
  }
}
