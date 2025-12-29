// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container, NavDropdown, Button } from "react-bootstrap";

const AppNavbar = () => {
  // Inline styles
  const navbarStyle = {
    background: "linear-gradient(90deg, #1a73e8, #1762c6)",
    padding: "0.5rem 1rem",
  };

  const navLinkStyle = {
    color: "#fff",
    margin: "0 0.5rem",
    transition: "color 0.3s",
  };

  const navLinkHoverColor = "#ffdd57";

  const buttonStyle = {
    backgroundColor: "#ffdd57",
    borderColor: "#ffdd57",
    color: "#000",
  };

  const buttonHoverStyle = {
    backgroundColor: "#ffc107",
    borderColor: "#ffc107",
    color: "#000",
  };

  return (
    <Navbar expand="lg" style={navbarStyle} variant="dark" sticky="top">
      <Container>
        {/* Logo */}
        <Navbar.Brand as={Link} to="/">
          <img
            src="/logo.png"
            alt="Tours & Travels Logo"
            style={{ height: "50px" }}
          />
        </Navbar.Brand>

        {/* Mobile Toggle */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          {/* Main Links */}
          <Nav className="mx-auto">
            {[
              { text: "Home", path: "/" },
              { text: "About Us", path: "/AboutUs" },
              // { text: "Tour Packages", path: "/packages" },
              // { text: "Destinations", path: "/destinations" },
              // { text: "Hotels", path: "/hotels" },
              // { text: "Tours", path: "/tours" },
              { text: "Gallery", path: "/gallery" },
              { text: "Cancellation Policy", path: "/cancellation" },
              { text: "Contact Us", path: "/contact" },
              { text: "Feedback", path: "/feedback" },
              { text: "Register", path: "/register" },
            ].map((item, index) => (
              <Nav.Link
                as={Link}
                to={item.path}
                key={index}
                style={navLinkStyle}
                onMouseEnter={(e) => (e.target.style.color = navLinkHoverColor)}
                onMouseLeave={(e) => (e.target.style.color = navLinkStyle.color)}
              >
                {item.text}
              </Nav.Link>
            ))}

            {/* Dropdown for Manage Booking */}
            <NavDropdown title="Manage Booking" id="manage-booking-dropdown" style={{ color: "#fff" }}>
              {[
                { text: "My Bookings", path: "/my-bookings" },
                { text: "Modify Booking", path: "/modify-booking" },
                { text: "Cancel Booking", path: "/cancel-booking" },
              ].map((item, i) => (
                <NavDropdown.Item as={Link} to={item.path} key={i}>
                  {item.text}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>

          {/* Right Side */}
          <Nav>
            {/* <Nav.Link
              as={Link}
              to="/track"
              style={navLinkStyle}
              onMouseEnter={(e) => (e.target.style.color = navLinkHoverColor)}
              onMouseLeave={(e) => (e.target.style.color = navLinkStyle.color)}
            >
              Track Booking
            </Nav.Link> */}
            <Nav.Link
              as={Link}
              to="/login"
              style={navLinkStyle}
              onMouseEnter={(e) => (e.target.style.color = navLinkHoverColor)}
              onMouseLeave={(e) => (e.target.style.color = navLinkStyle.color)}
            >
              Login / Signup
            </Nav.Link>

            {/* <Button
              style={buttonStyle}
              onMouseEnter={(e) => Object.assign(e.target.style, buttonHoverStyle)}
              onMouseLeave={(e) => Object.assign(e.target.style, buttonStyle)}
              className="ms-2"
            >
              🚍 Locate Bus
            </Button> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
