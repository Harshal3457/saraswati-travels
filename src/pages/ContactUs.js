import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/Footer";
import Header from "../components/Header";

// Optional: Import a banner image
import contactBanner from "../assets/images/Contact/i1.jpg";

const ContactUs = () => {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section
        className="text-center text-white d-flex align-items-center"
        style={{
          backgroundImage: `url(${contactBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "300px",
        }}
      >
        <div className="container">
          <h1 className="display-4 fw-bold">Contact Us</h1>
          <p className="lead">We’re here to help! Get in touch with us.</p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <div className="container my-5">
        <div className="row">
          {/* Contact Form */}
          <div className="col-md-6 mb-4">
            <h3 className="mb-4">Send Us a Message</h3>
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Full Name
                </label>
                <input type="text" className="form-control" id="name" placeholder="Your Name" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input type="email" className="form-control" id="email" placeholder="Your Email" />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  Phone Number
                </label>
                <input type="tel" className="form-control" id="phone" placeholder="Your Phone Number" />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea className="form-control" id="message" rows="5" placeholder="Write your message here..."></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="col-md-6 mb-4">
            <h3 className="mb-4">Our Contact Info</h3>
            <p>
              <strong>Address:</strong> Korpawali, Taluka Yawal, District Jalgaon, Maharashtra, India
            </p>
            <p>
              <strong>Phone:</strong> +91 98765 43210
            </p>
            <p>
              <strong>Email:</strong> info@saraswatitours.com
            </p>
            <p>
              <strong>Working Hours:</strong> Mon - Sun: 9:00 AM - 7:00 PM
            </p>

            {/* Optional: Social Links */}
            <div className="mt-4">
              <h5>Follow Us</h5>
              <a href="#" className="me-3">Facebook</a>
              <a href="#" className="me-3">Instagram</a>
              <a href="#" className="me-3">Twitter</a>
            </div>
          </div>
        </div>
      </div>

      {/* Google Map Section */}
      <div className="container mb-5">
        <h3 className="mb-4 text-center">Find Us Here</h3>
        <div className="ratio ratio-16x9 shadow rounded">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.0000000000005!2d75.00000000000001!3d21.000000000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0000000000000000!2sChaudhari%20Garage%2C%20Korpawali!5e0!3m2!1sen!2sin!4v1695790000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Saraswati Tours Location"
          ></iframe>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ContactUs;
