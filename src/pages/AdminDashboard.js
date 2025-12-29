// src/pages/AdminDashboard.js
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AdminDashboard = () => {
  return (
    <>
      <Header />
      <main>
        <h2>Admin Dashboard</h2>
        <p>Manage tours, bookings, and users here.</p>
      </main>
      <Footer />
    </>
  );
};

export default AdminDashboard;
