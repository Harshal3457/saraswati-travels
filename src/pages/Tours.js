// src/pages/Tours.js
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TourCard from '../components/TourCard';

const Tours = () => {
  const tours = [
    { id: 1, title: 'Beach Paradise', description: 'Relax on the sunny beaches', price: 250, imageUrl: '/images/beach.jpg' },
    { id: 2, title: 'Mountain Adventure', description: 'Explore the mountains', price: 300, imageUrl: '/images/mountain.jpg' },
  ];

  return (
    <>
      <Header />
      <main>
        <h2>All Tours</h2>
        <div className="tour-list">
          {tours.map(tour => <TourCard key={tour.id} tour={tour} />)}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Tours;
