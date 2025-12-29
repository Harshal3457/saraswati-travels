import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/Footer";
import Header from "../components/Header";

// Import images (replace these with your local images in /assets)
import carImage from "../assets/images/about1.jpg";
import busImage from "../assets/images/about2.jpg";
import hotelImage from "../assets/images/about3.jpg";
import travelImage from "../assets/images/aboutbgimg.jpg";

const AboutUs = () => {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section
        className="text-center text-white d-flex align-items-center"
        style={{
          backgroundImage: `url(${travelImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "400px",
        }}
      >
        <div className="container">
          <h1 className="display-4 fw-bold">About Saraswati Tours & Travels</h1>
          <p className="lead">Creating memorable journeys for every traveler</p>
        </div>
      </section>

      {/* About Content */}
      <div className="container my-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img
              src={carImage}
              alt="Travel"
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-md-6">
            <h2>Who We Are</h2>
            <p>
              At <strong>Saraswati Tours & Travels</strong>, we believe that
              traveling is more than just visiting new places – it’s about creating
              memories, discovering cultures, and experiencing life in new ways.
              Our team is dedicated to providing reliable, safe, and customized travel
              solutions for individuals, families, and businesses.
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="text-center my-5">
          <h3>🌍 Our Mission</h3>
          <p className="lead">
            To make every journey smooth, safe, and memorable by offering exceptional
            travel experiences with unmatched customer service.
          </p>
        </div>

        {/* Services Section */}
        <h3 className="mb-4 text-center">🚍 What We Offer</h3>
        <div className="row text-center">
          <div className="col-md-3 mb-4">
            <div className="card h-100 shadow-sm">
              <img src={carImage} className="card-img-top" alt="Tour Packages" />
              <div className="card-body">
                <h5 className="card-title">Tour Packages</h5>
                <p className="card-text">Domestic & international packages for all budgets.</p>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="card h-100 shadow-sm">
              <img src={hotelImage} className="card-img-top" alt="Hotels" />
              <div className="card-body">
                <h5 className="card-title">Hotels & Resorts</h5>
                <p className="card-text">Comfortable stays at the best locations.</p>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="card h-100 shadow-sm">
              <img src={busImage} className="card-img-top" alt="Group Tours" />
              <div className="card-body">
                <h5 className="card-title">Group Tours</h5>
                <p className="card-text">Customized family & corporate group trips.</p>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="card h-100 shadow-sm">
              <img src={travelImage} className="card-img-top" alt="Support" />
              <div className="card-body">
                <h5 className="card-title">24/7 Support</h5>
                <p className="card-text">We’re here to assist you anytime, anywhere.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="my-5 text-center">
          <h3>🤝 Why Choose Us?</h3>
          <div className="row justify-content-center mt-4">
            <div className="col-md-3 mb-3">
              <div className="p-3 border rounded shadow-sm">
                ✔ Experienced Travel Experts
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="p-3 border rounded shadow-sm">
                ✔ Affordable & Transparent Pricing
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="p-3 border rounded shadow-sm">
                ✔ 1000+ Happy Customers
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="p-3 border rounded shadow-sm">
                ✔ Seamless Booking & Cancellation
              </div>
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <div className="text-center mt-5">
          <p className="fw-bold fs-4 fst-italic">
            "Travel with us, and let every trip become a story worth telling."
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AboutUs;
