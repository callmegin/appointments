import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from 'api';

const initialState = {
  today: null,
  firstAvailable: null,
  selectedDay: null,
  status: 'idle',
  error: null,
};

export const fetchInitialData = createAsyncThunk(
  'fetchInitialData',
  async () => {
    const response = await api.getInitialCalendarData();
    return response.data;
  }
);

const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    daySelected(state, action) {
      state.selectedDay = action.payload;
    },
  },
  extraReducers: {
    [fetchInitialData.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchInitialData.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.today = action.payload.data.today;
      state.firstAvailable = action.payload.data.firstAvailable;
    },
    [fetchInitialData.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.payload.error;
    },
  },
});

export const { daySelected } = calendarSlice.actions;

export default calendarSlice.reducer;
