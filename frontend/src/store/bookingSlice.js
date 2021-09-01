import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from 'api';

const initialState = {
  status: 'idle',
  error: null,
};

export const createBooking = createAsyncThunk(
  'createBooking',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await api.createBooking(payload);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: {
    [createBooking.pending]: (state, action) => {
      state.status = 'loading';
    },
    [createBooking.fulfilled]: (state, action) => {
      state.status = 'succeeded';
    },
    [createBooking.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.payload.error;
    },
  },
});

export const { reset } = bookingSlice.actions;

export default bookingSlice.reducer;
