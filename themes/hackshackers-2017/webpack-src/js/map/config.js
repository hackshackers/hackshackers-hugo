/**
 * Map config vars
 */
export default {
  map: {
    center: [20, 0],
    zoom: 2,
  },
  tileLayer: {
    url: 'https://stamen-tiles-{s}.a.ssl.fastly.net/toner-background/{z}/{x}/{y}.{ext}',
    opts: {
      subdomains: 'abcd',
      ext: 'png',
      attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      detectRetina: true,
      reuseTiles: true,
      scrollWheelZoom: false, // also need to call map.scrollWheelZoom.disable() after setting up map
      touchZoom: false,
      minZoom: 2,
      maxZoom: 6,
    },
  },
  mapStyle: {
    height: '400px',
    width: '100%',
  },
  popup: {
    closeButton: false,
    className: 'group-popup',
  },
};
