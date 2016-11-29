// import Leaflet from 'leaflet';

export default function (selector) {
  let mapContainer = null;

  function init() {
    mapContainer = document.querySelector(selector);
    if (! mapContainer) {
      return;
    }
    mapContainer.innerText = 'hello world';
  }

  init();
}
