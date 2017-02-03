import ical from 'ical/ical'; // Imports only the browser-compatible portions
import assign from 'lodash/assign';
import template from 'lodash/template';
import { defaultOpts, calendarFeed } from './config';
import 'whatwg-fetch';
import basicTemplate from 'raw!./event-basic.html';
import expandedTemplate from 'raw!./event-expanded.html';
import fecha from 'fecha';

/**
 * Parse feed of future events from HH groups on Meetup.com
 * @param obj opts
 *    int|null compareTime Timestamp to cutoff future vs past events
 *    string order 'ASC' or 'DESC', defaults to 'ASC'
 *    string orderBy Compare by event 'start' or 'end' times; defaults to 'start'
 *    int future Number of future events to include, defaults to 0
 *    int past Number of past events to include, defaults to 0
 *    string renderStyle Which template to use, 'basic' (default) or 'expanded'
 * @param HTMLElement el Container to render the events
 * @param string renderStyle Which template to use 'basic' (default) or 'expanded'
 */
export default function meetups(calledOpts, el) {
  const opts = assign(defaultOpts, calledOpts);

  return fetch(calendarFeed)
    .then((res) => res.text(), (err) => console.log(err)) // eslint-disable-line no-console
    .then((text) => ical.parseICS(text))
    .then((map) => _filterEvents(map, opts))
    .then((filtered) => _renderAll(filtered, el, opts));
}

/**
 * Render events in container
 *
 * @param array events Array of event objects
 * @param HTMLElement el Container to render the events
 * @param object options Options
 */
function _renderAll(events, el, opts) {
  const evtTemplate = 'basic' === opts.renderStyle ?
    basicTemplate : expandedTemplate;

  events.forEach((evt) => {
    const eventEl = document.createElement('div');
    eventEl.innerHTML = _renderSingle(evt, evtTemplate, opts);
    el.appendChild(eventEl.children[0]);
  });
}

/**
 * Render single event as HTML string
 *
 * @param object evt Event metadata
 * @param string evtTemplate Event HTML template
 * @param object options Options
 * @return string HTML markup for event
 */
function _renderSingle(evt, evtTemplate, opts) {
  const title = evt.summary;
  const link = evt.url;
  const date = `${fecha.format(evt[opts.orderBy], 'MMM D')}`;

  // Uses <%- var %> in the template to escape strings
  const compiled = template(evtTemplate);
  return compiled({ title, link, date });
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

  // ASC - Append future events to past events
  if ('ASC' === opts.order) {
    return pastEvents.slice(0, parseInt(opts.past, 10))
      .reverse()
      .concat(futureEvents.slice(0, parseInt(opts.future, 10)));
  }

  // DESC - Append past events to future events
  return futureEvents.slice(0, opts.future)
    .reverse()
    .concat(pastEvents.slice(0, opts.past));
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
  if (!ascOrder) {
    return -1 * delta;
  }
  return delta;
}
