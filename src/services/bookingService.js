// src/services/bookingService.js
import api from './api';

export const bookingService = {
  getUserBookings: async () => {
    const response = await api.get('/bookings/my');
    return response.data;
  },

  createBooking: async (bookingData) => {
    const response = await api.post('/bookings', bookingData);
    return response.data;
  },

  getBookingById: async (id) => {
    const response = await api.get(`/bookings/${id}`);
    return response.data;
  },

  cancelBooking: async (id) => {
    const response = await api.delete(`/bookings/${id}`);
    return response.data;
  },
};
