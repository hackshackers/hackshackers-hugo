import * as LeafletStyles from 'style!raw!leaflet/dist/leaflet.css'; // eslint-disable-line no-unused-vars
import Leaflet from 'leaflet';

export default function (selector) {
  const mapEl = document.querySelector(`#${selector}`);

  function tileLayer() {
    return Leaflet.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoiam9zaGthZGlzIiwiYSI6ImNpaDBsbG1rZzB3bjJ2a201eXY4YzlhMnIifQ.YA0hpf_w8bJgwrLNmZDE-Q',
      {
        maxZoom: 9,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        detectRetina: true,
        reuseTiles: false,
      }
    );
  }

  function init() {
    if (! mapEl) {
      return;
    }

    mapEl.style.height = '400px';
    mapEl.style.width = '100%';

    const map = Leaflet.map(selector).setView([51.505, -0.09], 2);
    tileLayer().addTo(map).redraw();
  }

  init();
}
