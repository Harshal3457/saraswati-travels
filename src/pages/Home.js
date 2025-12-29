// src/pages/Home.js
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TourCard from '../components/TourCard';

const Home = () => {
  // Example tours (replace with API data later)
  const tours = [
    { id: 1, title: 'Beach Paradise', description: 'Relax on the sunny beaches', price: 250, imageUrl: '/images/beach.jpg' },
    { id: 2, title: 'Mountain Adventure', description: 'Explore the mountains', price: 300, imageUrl: '/images/mountain.jpg' },
  ];

  // ✅ Define slider images properly
  const sliderImages = [
    "/images/i1.jpg",
    "/images/i2.jpeg",
    "/images/i3.jpg",
    "/images/i4.jpeg",
    "/images/i5.jpeg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Change image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % sliderImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [sliderImages.length]); // ✅ Add dependency

  return (
    <>
      <Header />

      {/* <div className="header-banner">
        <h1>Welcome to Tours & Travels</h1>
        <p>Explore the world with us!</p>
      </div> */}

      {/* Dynamic Image Slider */}
      <div className="image-slider" style={{ textAlign: 'center', margin: '20px 0' }}>
        <img
          src={sliderImages[currentImageIndex]}
          alt="Slider"
          style={{ width: '80%', height: '400px', objectFit: 'cover', borderRadius: '10px', transition: 'opacity 1s ease-in-out' }}
        />
      </div>

      <main>
        <h2>Popular Tours</h2>
        <div className="tour-list">
          {tours.map(tour => <TourCard key={tour.id} tour={tour} />)}
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Home;
