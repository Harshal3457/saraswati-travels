// src/routes/PublicRoute.js
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const PublicRoute = ({ children }) => {
  const context = useContext(AuthContext);

  // Safety check: if context is not provided
  if (!context) {
    console.error("AuthContext is not provided. Make sure your app is wrapped in AuthProvider.");
    return null; // Prevent crash
  }

  const { user, loading } = context;

  // Optional: Show a loading message while checking user
  if (loading) {
    return <div>Loading...</div>;
  }

  // If user is already logged in, redirect to home page
  if (user) {
    return <Navigate to="/" replace />;
  }

  // Else, render the child component
  return children;
};

export default PublicRoute;
