const mongoose = require('mongoose');
const { Booking, User } = require('../models');
const moment = require('moment'); //
const { isObjEmpty } = require('../lib/object');
const { fakeSlots } = require('../lib/fakeSlots');
const { getIsoDate, getIsoDateString } = require('../lib/date');

const isBadDate = (bodyDate) => {
  const date = getIsoDate(bodyDate);
  const dateString = getIsoDateString(bodyDate);

  return (
    !fakeSlots(getIsoDateString(moment(date).set('hour', 0))).includes(
      dateString
    ) || isWeekend(date)
  );
};

const findUserAndUpdate = async (bodyDate, name, surname) => {
  const date = getIsoDate(bodyDate);
  const startOfWeek = moment(date).startOf('isoWeek');
  const endOfWeek = moment(date).endOf('isoWeek');
  return await User.findOneAndUpdate(
    { name: name, surname: surname },
    {
      $setOnInsert: { name: name, surname: surname },
    },
    { new: true, upsert: true }
  )
    .populate({
      path: 'bookings',
      match: { slotStart: { $gte: startOfWeek, $lte: endOfWeek } },
    })
    .exec();
};

//Actual requests
createBooking = async (req, res, next) => {
  try {
    const body = req.body;

    if (isObjEmpty(body)) {
      return res.status(400).json({
        success: false,
        error: 'Empty Request',
      });
    }

    if (isBadDate(body.slot.slotStart))
      return res.status(418).json({
        success: false,
        error:
          'Neteisinga rezervavimo data. Savaitgalis / neteisingos valandos. HAXOOOR  >:( !!!!',
      });

    await Booking.findOne(
      {
        slotStart: getIsoDate(body.slot.slotStart),
      },
      async (err, booking) => {
        const user = await findUserAndUpdate(
          body.slot.slotStart,
          body.user.name,
          body.user.surname
        );
        if (user.bookings.length > 0) {
          return res.status(404).json({
            success: false,
            error: 'Galima tik 1 registracija per savaitę',
          });
        }

        const newBooking = new Booking({
          slotStart: getIsoDate(body.slot.slotStart),
        });
        console.log(getIsoDate(body.slot.slotStart));
        console.log(newBooking);
        user.bookings.push(newBooking._id);
        newBooking.user = user._id;
        await user.save();
        newBooking
          .save()
          .then(() => {
            return res.status(200).json({
              success: true,
              message: 'Rezervacija sėkminga',
            });
          })
          .catch((err) => {
            console.error(err);
            return res.status(404).json({
              success: false,
              message: err.errors['slotStart'].message,
            });
          });
      }
    );
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: 'Kažkas labai negero įvyko :`(',
    });
  }
};

getBookedSlots = async (req, res) => {
  const body = req.body;

  if (isObjEmpty(body)) {
    return res.status(400).json({
      success: false,
      error: 'Empty Request',
    });
  }
  try {
    const dateStart = getIsoDateString(body.selectedDate);
    const dateEnd = getIsoDateString(addDays(body.selectedDate, 1));

    await Booking.find(
      {
        slotStart: {
          $gte: dateStart,
          $lte: dateEnd,
        },
      },
      (err, slots) => {
        if (err) {
          return res.status(400).json({ success: false, error: err });
        }

        return res.status(200).json({
          success: true,
          data: { takenSlots: slots, availableSlots: fakeSlots(dateStart) },
        });
      }
    );
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, error: err });
  }
};

module.exports = {
  createBooking,
  getBookedSlots,
};
