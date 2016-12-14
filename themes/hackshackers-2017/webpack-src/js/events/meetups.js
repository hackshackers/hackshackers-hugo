import ical from 'ical/ical'; // Imports only the browser-compatible portions
import assign from 'lodash/assign';
import { defaultOpts, calendarFeed } from './config';
import 'whatwg-fetch';

/**
 * Parse feed of future events from HH groups on Meetup.com
 * @param obj opts
 *    int|null after Earliest timestamp to include, compared to orderBY value, defaults to Date.now()
 *    int|null before Last timestamp to include, compared to orderBY value, defaults to null
 *    string order 'ASC' or 'DESC', defaults to 'ASC'
 *    string orderBy 'start' or 'end', defaults to 'start'
 *    int future Number of future events to include, defaults to 0
 *    int past Number of past events to include, defaults to 0. 'after' must be set to a time in the past to use this option.
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
    // Reject events that aren't in the after/before time range
    const item = map[key];
    const compareTime = item[opts.orderBy].getTime();
    if (compareTime < opts.after ||
      (opts.before && compareTime > opts.before)
    ) {
      return;
    }

    // Add to future or past queue
    if (compareTime > Date.now()) {
      futureEvents.push(item);
    } else {
      pastEvents.push(item);
    }
  });

  /**
   * Sort by start or end, in ASC or DESC order
   */
  function _compareFunc(first, second) {
    let delta = first[opts.orderBy].getTime() - second[opts.orderBy].getTime();
    if ('DESC' === opts.orderBy) {
      delta *= -1;
    }
    return delta;
  }
  futureEvents.sort(_compareFunc);
  pastEvents.sort(_compareFunc);

  /**
   * Retur sliced lists according to orderBy value
   */
  if ('ASC' === opts.orderBy) {
    return {
      future: futureEvents.slice((-1 * opts.future)),
      past: pastEvents.slice(0, opts.past),
    };
  }
  return {
    future: futureEvents.slice(0, opts.future),
    past: pastEvents.slice((-1 * opts.past)),
  };
}
