const moment = require('moment'); // require

getStartOfToday = () => moment().startOf('day').toString();

getStartOfTomorrow = () => moment().startOf('day').add(1, 'd').toString();

parseDate = (date) => new Date(Date.parse(date)).toString();

getIsoDateString = (date) => {
  //offset in milliseconds
  const offset = new Date().getTimezoneOffset() * 60000;
  const isoDate = new Date(new Date(date) - offset).toISOString().slice(0, -1);
  return isoDate;
};
getIsoDate = (date) => {
  //offset in milliseconds
  const offset = new Date().getTimezoneOffset() * 60000;
  const isoDate = new Date(new Date(date) - offset);
  return isoDate;
};

addDays = (date, increment) => moment(date).add(1, 'd');

isWeekend = (date) => {
  const day = moment(date).isoWeekday();
  if (day === 6 || day === 7) return true;
  return false;
};

module.exports = {
  getStartOfToday,
  getStartOfTomorrow,
  parseDate,
  getIsoDate,
  getIsoDateString,
  isWeekend,
};
