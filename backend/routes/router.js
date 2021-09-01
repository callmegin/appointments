const express = require('express');

const BookingCtrl = require('../controllers/booking');
const CalendarCtrl = require('../controllers/calendar');

const router = express.Router();

router.get('/calendar-data', CalendarCtrl.getInitialCalendarData);
router.post('/book', BookingCtrl.createBooking);
router.post('/taken-slots', BookingCtrl.getBookedSlots);

router.all('*', function (req, res) {
  throw new Error('Bad request');
});

module.exports = router;
