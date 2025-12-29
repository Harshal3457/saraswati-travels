// src/services/api.js
import axios from 'axios';

// Replace with your Spring Boot backend URL
const API_URL = 'http://localhost:8080/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to headers if present
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token'); // token stored after login
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
