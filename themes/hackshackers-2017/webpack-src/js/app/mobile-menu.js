export default function () {
  const menuBtn = document.querySelector('.hamburger-menu');
  if (menuBtn) {
    menuBtn.addEventListener('click', (evt) => {
      evt.preventDefault();
      console.log('hello');
    });
  }
}
