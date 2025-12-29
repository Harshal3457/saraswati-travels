// src/components/TourCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const TourCard = ({ tour }) => {
  return (
    <div className="tour-card">
      <img src={tour.imageUrl} alt={tour.title} />
      <h3>{tour.title}</h3>
      <p>{tour.description}</p>
      <p>Price: ${tour.price}</p>
      <Link to={`/tours/${tour.id}`} className="btn">View Details</Link>
    </div>
  );
};

export default TourCard;
