import map from './map';
import meetups from './events/meetups';
import mobileMenu from './app/mobile-menu';
import initSearch from './search';

map('hero-map');
mobileMenu();

// Init meetups list
document.querySelectorAll('.fetch-events').forEach((el) => {
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
