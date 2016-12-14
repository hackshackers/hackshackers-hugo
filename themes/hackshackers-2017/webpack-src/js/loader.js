import map from './map';
import meetups from './events/meetups';

map('hero-map');

meetups({
  future: 5,
  past: 3,
  order: 'DESC',
});
