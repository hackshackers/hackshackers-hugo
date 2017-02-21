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
      minZoom: 2,
      maxZoom: 6,
    },
  },
  postSetup: {
    disable: ['scrollWheelZoom', 'touchZoom'],
  },
  mapStyle: {
    height: '400px',
    width: '100%',
  },
  popup: {
    closeButton: false,
    className: 'group-popup',
  },
  markerOpts: {
    iconUrl: '/images/marker-icon-2x.png', // L.Browser.retina not totally reliable, so just use retina icon all the time
    iconRetinaUrl: '/images/marker-icon-2x.png',
    shadowUrl: '/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
    shadowSize: [41, 41],
  },
  mobileBreakpoint: 767,
};
