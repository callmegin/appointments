const { getStartOfToday, getStartOfTomorrow } = require('../lib/date');

//! GET ISO DATE
getInitialCalendarData = async (req, res) => {
  try {
    const firstAvailable = getStartOfTomorrow();
    const today = getStartOfToday();

    res.status(200).json({
      success: true,
      data: {
        today: today,
        firstAvailable: firstAvailable,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: true, error: err });
  }
};

module.exports = {
  getInitialCalendarData,
};
