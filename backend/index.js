const express = require('express');
require('dotenv/config');
const cors = require('cors');
const db = require('./db');
const bookingRouter = require('./routes/router');

const app = express();
const apiPort = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use('/api', bookingRouter, function (e, req, res, next) {
  if (e.message === 'Bad request') {
    res.status(400).json({ success: false, error: e.message });
  }
});
app.use(function (error, req, res, next) {
  console.log(req);
});
app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
