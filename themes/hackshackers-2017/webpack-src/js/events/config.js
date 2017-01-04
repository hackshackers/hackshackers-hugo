/**
 * Events-related constants
 */

export const calendarFeed = ('localhost' === window.location.hostname) ?
  '/mock/calendar/global.ics' :
  'https://matchmaker.hhldn.co.uk/calendars/global';

export const defaultOpts = {
  future: 0,
  past: 0,
  compareTime: Date.now(),
  order: 'ASC',
  orderBy: 'start',
  renderStyle: 'basic',
};
