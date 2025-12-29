// src/utils/validate.js

// Validate email format
export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

// Validate password (min 6 characters)
export const validatePassword = (password) => {
  return password.length >= 6;
};

// Check if a field is not empty
export const isRequired = (value) => {
  return value && value.trim() !== '';
};

// Validate tour price (positive number)
export const validatePrice = (price) => {
  return !isNaN(price) && Number(price) > 0;
};
