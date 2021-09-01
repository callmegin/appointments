const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  slotStart: {
    type: Date,
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
});
const Booking = mongoose.model('Booking', bookingSchema);

bookingSchema.path('slotStart').validate({
  validator: function (value) {
    return new Promise(function (resolve, reject) {
      Booking.findOne({ slotStart: value }, function (err, slot) {
        if (slot) resolve(false);
        resolve(true);
      });
    });
  },
  message: 'Slot is already taken. You cheeky piece of bacon',
});

module.exports = Booking;
