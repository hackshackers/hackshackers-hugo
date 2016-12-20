import map from './map';
import meetups from './events/meetups';
import mobileMenu from './app/mobile-menu';

map('hero-map');

meetups({
  future: 5,
  past: 3,
  order: 'DESC',
});

mobileMenu();
