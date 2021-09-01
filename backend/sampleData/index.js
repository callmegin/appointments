require('dotenv/config');
require('../db/index');
const mongoose = require('mongoose');

const fs = require('fs');
const { Booking, User } = require('../models');
const BookingCtrl = require('../controllers/booking');

const sampleData = `./sampleData/sampleData.json`;

//get data from json
const data = JSON.parse(fs.readFileSync(sampleData, 'utf8'));

//feed that hungry db without any error handling
const seedData = async () => {
  for (const userJson of data) {
    console.log(`Inserting: ${userJson.user.name}`);
    const user = await User.create({
      name: userJson.user.name,
      surname: userJson.user.surname,
    });
    const booking = await Booking.create({
      slotStart: userJson.slot.slotStart,
    });
    user.bookings.push(booking._id);
    booking.user = user._id;
    await user.save();
    await booking.updateOne({ user: user._id });
  }
  console.log('Completed');
  mongoose.connection.close(() => console.log('Connection closed'));
};

mongoose.connection.once('open', function () {
  console.log('🍻🍻🍻🍻🍻');
  seedData();
});
