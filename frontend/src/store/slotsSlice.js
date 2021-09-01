import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from 'api';

const initialState = {
  availableSlots: null,
  takenSlots: null,
  selectedSlot: null,
  status: 'idle',
  error: 'null',
};

export const fetchSlotsData = createAsyncThunk(
  'fetchSlotsData',
  async (date) => {
    const response = await api.getSlotsData(date);

    return response.data;
  }
);

const slotSlice = createSlice({
  name: 'slots',
  initialState,
  reducers: {
    setSelectedSlot(state, action) {
      state.selectedSlot = action.payload;
    },
  },
  extraReducers: {
    [fetchSlotsData.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchSlotsData.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.availableSlots = action.payload.data.availableSlots;
      state.takenSlots = action.payload.data.takenSlots;
    },
    [fetchSlotsData.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
  },
});

export const { setSelectedSlot } = slotSlice.actions;

export default slotSlice.reducer;
