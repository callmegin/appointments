import axios from 'axios';

const api = axios.create({
  baseURL: `http://${process.env.REACT_APP_BASE_URL}/api`,
  timeout: 5000,
});

export const getInitialCalendarData = () => api.get(`/calendar-data`);
export const getSlotsData = (payload) => api.post(`/taken-slots`, payload);
export const createBooking = (payload) => api.post(`/book`, payload);

const apis = {
  getInitialCalendarData,
  getSlotsData,
  createBooking,
};

export default apis;
