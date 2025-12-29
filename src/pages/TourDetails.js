// src/pages/TourDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TourDetails = () => {
  const { id } = useParams();

  // TODO: fetch tour details using id
  const tour = { id, title: 'Beach Paradise', description: 'Relax on the sunny beaches', price: 250 };

  return (
    <>
      <Header />
      <main>
        <h2>{tour.title}</h2>
        <p>{tour.description}</p>
        <p>Price: ${tour.price}</p>
        <button>Book Now</button>
      </main>
      <Footer />
    </>
  );
};

export default TourDetails;
