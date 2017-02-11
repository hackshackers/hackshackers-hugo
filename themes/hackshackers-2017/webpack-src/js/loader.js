import map from './map';
import meetups from './events/meetups';
import mobileMenu from './app/mobile-menu';
import initSearch from './search';
import searchInput from './app/search-input.js';

map('hero-map');
mobileMenu();
searchInput();

// Init meetups list
const eventsEls = document.querySelectorAll('.fetch-events');
[].forEach.call(eventsEls, (el) => {
  const opts = {};
  for (let i = 0; i < el.attributes.length; i++) {
    const attr = el.attributes.item(i);
    if (0 === attr.name.indexOf('data-')) {
      const key = attr.name.replace('data-', '');
      opts[key] = attr.value;
    }
  }
  meetups(opts, el);
});

initSearch();
