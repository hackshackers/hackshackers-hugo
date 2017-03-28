/**
 * Events-related constants
 */

export const calendarFeed = ('localhost' === window.location.hostname) ?
  '/mock/calendar/test.ics' :
  '/lib/hackshackers.ical';

export const defaultOpts = {
  future: 0,
  past: 0,
  compareTime: Date.now(),
  order: 'ASC',
  orderBy: 'start',
  renderStyle: 'basic',
};
