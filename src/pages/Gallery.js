import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../components/Footer';
import Header from '../components/Header';

// Sample images for the gallery (replace with your actual images)
import destination1 from '../assets/images/gallery/g3.jpg';
import destination0 from '../assets/images/gallery/about1.jpg';

import destination2 from '../assets/images/gallery/about2.jpg';
import destination3 from '../assets/images/gallery/about3.jpg';
import destination4 from '../assets/images/gallery/about4.jpg';
import destination5 from '../assets/images/gallery/about1.jpg';
import destination6 from '../assets/images/gallery/about2.jpg';

const Gallery = () => {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section
        className="text-center text-white d-flex align-items-center"
        style={{
          backgroundImage: `url(${destination1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '400px',
        }}
      >
        <div className="container">
          <h1 className="display-4 fw-bold">Our Gallery</h1>
          <p className="lead">Explore the beauty of the world through our curated travel experiences</p>
        </div>
      </section>

      {/* Gallery Grid */}
      <div className="container my-5">
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src={destination0} className="card-img-top" alt="Destination 1" />
              <div className="card-body">
                <h5 className="card-title">Mountain Adventure</h5>
                <p className="card-text">Experience the thrill of mountain treks and breathtaking views.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card">
              <img src={destination2} className="card-img-top" alt="Destination 2" />
              <div className="card-body">
                <h5 className="card-title">Beach Getaway</h5>
                <p className="card-text">Relax on pristine beaches with crystal-clear waters.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card">
              <img src={destination3} className="card-img-top" alt="Destination 3" />
              <div className="card-body">
                <h5 className="card-title">Cultural Tour</h5>
                <p className="card-text">Immerse yourself in rich cultures and historical landmarks.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card">
              <img src={destination4} className="card-img-top" alt="Destination 4" />
              <div className="card-body">
                <h5 className="card-title">Desert Safari</h5>
                <p className="card-text">Embark on an exhilarating journey through vast deserts.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card">
              <img src={destination5} className="card-img-top" alt="Destination 5" />
              <div className="card-body">
                <h5 className="card-title">Tropical Escape</h5>
                <p className="card-text">Discover lush jungles and exotic wildlife.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card">
              <img src={destination6} className="card-img-top" alt="Destination 6" />
              <div className="card-body">
                <h5 className="card-title">Urban Exploration</h5>
                <p className="card-text">Explore vibrant cities and modern architecture.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Gallery;
