// src/components/Footer.js
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGoogle,
  FaGithub,
} from "react-icons/fa";
import { FaHome, FaEnvelope, FaPhone, FaPrint } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-center text-lg-start text-white" style={{ backgroundColor: "#1c2331" }}>
      {/* Social Media Section */}
      <section
        className="d-flex justify-content-between p-4"
        style={{ backgroundColor: "#6351ce" }}
      >
        <div className="me-5">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href="#" className="text-white me-4"><FaFacebookF /></a>
          <a href="#" className="text-white me-4"><FaTwitter /></a>
          <a href="#" className="text-white me-4"><FaGoogle /></a>
          <a href="#" className="text-white me-4"><FaInstagram /></a>
          <a href="#" className="text-white me-4"><FaLinkedin /></a>
          <a href="#" className="text-white me-4"><FaGithub /></a>
        </div>
      </section>

      {/* Footer Links Section */}
      <section>
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            {/* Company Info */}
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold">Saraswati Tours & Travels</h6>
              <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }} />
              <p>
                Explore the world with Saraswati Tours & Travels. We provide best-in-class travel packages,
                affordable bookings, and a hassle-free experience for your dream destinations.
              </p>
            </div>

            {/* Services */}
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold">Services</h6>
              <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }} />
              <p><a href="#tours" className="text-white">Tour Packages</a></p>
              <p><a href="#booking" className="text-white">Hotel Booking</a></p>
              <p><a href="#transport" className="text-white">Transport Services</a></p>
              <p><a href="#guides" className="text-white">Travel Guides</a></p>
            </div>

            {/* Useful Links */}
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold">Useful Links</h6>
              <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }} />
              <p><a href="#account" className="text-white">Your Account</a></p>
              <p><a href="#about" className="text-white">About Us</a></p>
              <p><a href="#faq" className="text-white">FAQs</a></p>
              <p><a href="#support" className="text-white">Help & Support</a></p>
            </div>

            {/* Contact Info */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold">Contact</h6>
              <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }} />
              <p><FaHome className="me-2" /> Pune, Maharashtra, India</p>
              <p><FaEnvelope className="me-2" /> info@saraswatitours.com</p>
              <p><FaPhone className="me-2" /> +91 98765 43210</p>
              <p><FaPrint className="me-2" /> +91 98765 43211</p>
            </div>
          </div>
        </div>
      </section>

      {/* Copyright */}
      <div className="text-center p-3" style={{ backgroundColor: "rgba(0,0,0,0.2)" }}>
        © {new Date().getFullYear()} Saraswati Tours & Travels | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
