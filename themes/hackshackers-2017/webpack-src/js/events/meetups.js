import ical from 'ical/ical'; // Imports only the browser-compatible portions
import assign from 'lodash/assign';
import { defaultOpts, calendarFeed } from './config';
import 'whatwg-fetch';

/**
 * Parse feed of future events from HH groups on Meetup.com
 * @param obj opts
 *    int|null compareTime Timestamp to cutoff future vs past events
 *    string order 'ASC' or 'DESC', defaults to 'ASC'
 *    string orderBy Compare by event 'start' or 'end' times; defaults to 'start'
 *    int future Number of future events to include, defaults to 0
 *    int past Number of past events to include, defaults to 0
 */
export default function meetups(calledOpts) {
  const opts = assign(defaultOpts, calledOpts);
  console.log(opts);

  fetch(calendarFeed)
    .then((res) => res.text(), (err) => console.log(err))
    .then((text) => ical.parseICS(text))
    .then((map) => _filterEvents(map, opts))
    .then((filtered) => {
      console.log(filtered.future.map((item) => item.start.toString()));
      console.log(filtered.past.map((item) => item.start.toString()));
    });
}

/**
 * Filter key:value pairs of UID:eventDetails into ordered array
 *
 * @param object map Unordered key-value pairs
 * @param object opts Filter/sort options
 * @return array Ordered list of event details objects
 */
function _filterEvents(map, opts) {
  const futureEvents = [];
  const pastEvents = [];

  // Assume unordered key-value pairs
  // Break into future/past lists
  Object.keys(map).forEach((key) => {
    const item = map[key];
    const compareTime = item[opts.orderBy].getTime();

    // Add to future or past queue
    if (compareTime > opts.compareTime) {
      futureEvents.push(item);
    } else {
      pastEvents.push(item);
    }
  });

  // Sort the future/past queues in ASC order
  futureEvents.sort((first, second) =>
    _compareFunc(first, second, opts.orderBy));
  pastEvents.sort((first, second) =>
    _compareFunc(first, second, opts.orderBy, false));

  if ('ASC' === opts.order) {
    return {
      future: futureEvents.slice(0, opts.future),
      past: pastEvents.slice(0, opts.past).reverse(),
    };
  }

  return {
    future: futureEvents.slice(0, opts.future).reverse(),
    past: pastEvents.slice(0, opts.past),
  };
}

/**
 * Sort by event start or end time
 *
 * @param object first First event
 * @param object second Second event
 * @param string orderBy 'start' or 'end'
 * @param bool ascOrder Defaults to true, use false to sort in descending order.
 */
function _compareFunc(first, second, orderBy, ascOrder = true) {
  const delta = first[orderBy].getTime() - second[orderBy].getTime();
  if (! ascOrder) {
    return -1 * delta;
  }
  return delta;
}
