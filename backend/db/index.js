const mongoose = require('mongoose');

const dbURL = process.env.DATABASE_URL;

mongoose
  .connect(dbURL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .catch((e) => {
    console.error('Connection error', e.message);
  });

const db = mongoose.connection;

module.exports = db;
