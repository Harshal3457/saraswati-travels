// src/components/BookingCard.js
import React from 'react';

const BookingCard = ({ booking }) => {
  return (
    <div className="booking-card">
      <h3>{booking.tourTitle}</h3>
      <p>Booking Date: {booking.date}</p>
      <p>Status: {booking.status}</p>
    </div>
  );
};

export default BookingCard;
