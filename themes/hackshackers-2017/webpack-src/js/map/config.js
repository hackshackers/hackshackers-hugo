/**
 * Map config vars
 */
export default {
  map: {
    center: [20, 0],
    zoom: 2,
  },
  tileLayer: {
    url: 'https://api.mapbox.com/styles/v1/mapbox/dark-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoiam9zaGthZGlzIiwiYSI6ImNpaDBsbG1rZzB3bjJ2a201eXY4YzlhMnIifQ.YA0hpf_w8bJgwrLNmZDE-Q',
    opts: {
      maxZoom: 9,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      detectRetina: true,
      reuseTiles: true,
    },
  },
  mapStyle: {
    height: '400px',
    width: '100%',
  },
};
