import { configureStore } from '@reduxjs/toolkit';
import calendarReducer from './calendarSlice';
import slotsReducer from './slotsSlice';
import bookingSlice from './bookingSlice';

const store = configureStore({
  reducer: {
    calendar: calendarReducer,
    slots: slotsReducer,
    booking: bookingSlice,
  },
});

export default store;
