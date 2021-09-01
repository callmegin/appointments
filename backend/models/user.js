const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const Slot = require('./slots');

const userSchema = new Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  bookings: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Booking',
    },
  ],
});

// User.index(
//   {
//     name: 1,
//     suername: 1,
//   },
//   {
//     unique: true,
//   }
// );

// User.pre('save', function (error, res, next) {
//   // if (error) console.log(`------------error code: ${error.code}`);
//   // res.save();
//   const wtf = this;
//   console.log(wtf);
//   console.log('saving this shit ?????????????');
//   next();
// });

module.exports = mongoose.model('User', userSchema);
