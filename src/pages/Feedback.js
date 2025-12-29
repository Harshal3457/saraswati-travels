import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/Footer";
import Header from "../components/Header";

// Optional: Banner image for feedback page
import feedbackBanner from "../assets/images/Contact/i1.jpg";

const Feedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: "5",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFeedbacks([...feedbacks, formData]);
    setFormData({ name: "", email: "", rating: "5", message: "" });
    alert("Thank you for your feedback!");
  };

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section
        className="text-center text-white d-flex align-items-center"
        style={{
          backgroundImage: `url(${feedbackBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "300px",
        }}
      >
        <div className="container">
          <h1 className="display-4 fw-bold">Feedback</h1>
          <p className="lead">Your thoughts help us improve our services!</p>
        </div>
      </section>

      {/* Feedback Form */}
      <div className="container my-5">
        <div className="row">
          <div className="col-md-6 mb-4">
            <h3 className="mb-4">Submit Your Feedback</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="rating" className="form-label">
                  Rating
                </label>
                <select
                  className="form-select"
                  id="rating"
                  name="rating"
                  value={formData.rating}
                  onChange={handleChange}
                >
                  <option value="5">★★★★★ Excellent</option>
                  <option value="4">★★★★ Very Good</option>
                  <option value="3">★★★ Good</option>
                  <option value="2">★★ Fair</option>
                  <option value="1">★ Poor</option>
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Feedback
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your feedback here..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary">
                Submit Feedback
              </button>
            </form>
          </div>

          {/* Display Feedbacks */}
          <div className="col-md-6 mb-4">
            <h3 className="mb-4">Recent Feedback</h3>
            {feedbacks.length === 0 && <p>No feedback yet. Be the first to submit!</p>}
            {feedbacks.map((fb, index) => (
              <div key={index} className="p-3 mb-3 border rounded shadow-sm">
                <h5>{fb.name} <small className="text-muted">({fb.rating}★)</small></h5>
                <p>{fb.message}</p>
                <p className="text-muted">{fb.email}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Feedback;
