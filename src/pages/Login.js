import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Optional banner image
import loginBanner from "../assets/images/Contact/i1.jpg";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Login successful for ${formData.email}`);
    // Integrate with backend API for authentication
    setFormData({ email: "", password: "", rememberMe: false });
  };

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section
        className="text-center text-white d-flex align-items-center"
        style={{
          backgroundImage: `url(${loginBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "300px",
        }}
      >
        <div className="container">
          <h1 className="display-4 fw-bold">Login</h1>
          <p className="lead">Access your account and continue your journey!</p>
        </div>
      </section>

      {/* Login Form */}
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-5">
            <div className="card shadow p-4">
              <h3 className="mb-4 text-center">Sign In</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email Address</label>
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
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter Password"
                    required
                  />
                </div>

                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="rememberMe"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="rememberMe">
                    Remember Me
                  </label>
                </div>

                <button type="submit" className="btn btn-primary w-100">Login</button>

                <p className="text-center mt-3">
                  Don't have an account? <a href="/register">Register here</a>
                </p>

                {/* Optional social logins */}
                <div className="text-center mt-3">
                  <p>Or sign in with:</p>
                  <button className="btn btn-outline-danger me-2">Google</button>
                  <button className="btn btn-outline-primary">Facebook</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Login;
