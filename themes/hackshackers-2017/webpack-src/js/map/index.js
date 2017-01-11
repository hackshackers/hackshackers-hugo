import * as LeafletStyles from 'style!raw!leaflet/dist/leaflet.css'; // eslint-disable-line no-unused-vars
import Leaflet from 'leaflet';
import config from './config';

export default function (mapId) {
  const mapEl = document.querySelector(`#${mapId}`);
  const groups = window.__hh_groups__ || null;

  function addTileLayer(map) {
    Leaflet.tileLayer(config.tileLayer.url, config.tileLayer.opts).addTo(map);
  }

  /**
   * @todo Use custom marker
   */
  function addMarkers(map) {
    Object.keys(groups).forEach((group) => {
      const latLng = Leaflet.latLng(groups[group].coordinates);
      Leaflet.marker(latLng, {
        title: groups[group].label,
      }).addTo(map);
    });
  }

  function init() {
    if (!mapEl || !groups) {
      return;
    }

    // Set these manually in case Webpack hasn't applied styles yet
    mapEl.style.height = config.mapStyle.height;
    mapEl.style.width = config.mapStyle.width;

    const map = Leaflet.map(mapId).setView(config.map.center, config.map.zoom);
    addTileLayer(map);
    addMarkers(map);
  }

  init();
}
