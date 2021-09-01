const moment = require('moment');
const { getIsoDateString } = require('./date');

fakeSlots = (date) => {
  const start = 10;
  const end = 16;
  const availableSlots = [];

  for (i = start; i <= end; i++) {
    const isoDate = getIsoDateString(moment(date).add(i, 'h'));
    availableSlots.push(isoDate);
  }
  return availableSlots;
};

module.exports = {
  fakeSlots,
};
