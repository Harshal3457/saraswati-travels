// src/context/TourContext.js
import React, { createContext, useState, useEffect } from 'react';
import { tourService } from '../services/tourService';

export const TourContext = createContext();

export const TourProvider = ({ children }) => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch all tours
  const fetchTours = async () => {
    setLoading(true);
    try {
      const data = await tourService.getAllTours();
      setTours(data);
    } catch (error) {
      console.error('Error fetching tours:', error);
    } finally {
      setLoading(false);
    }
  };

  // Add a new tour
  const addTour = async (tourData) => {
    try {
      const newTour = await tourService.addTour(tourData);
      setTours(prev => [...prev, newTour]);
    } catch (error) {
      console.error('Error adding tour:', error);
    }
  };

  // Update a tour
  const updateTour = async (id, tourData) => {
    try {
      const updatedTour = await tourService.updateTour(id, tourData);
      setTours(prev => prev.map(t => t.id === id ? updatedTour : t));
    } catch (error) {
      console.error('Error updating tour:', error);
    }
  };

  // Delete a tour
  const deleteTour = async (id) => {
    try {
      await tourService.deleteTour(id);
      setTours(prev => prev.filter(t => t.id !== id));
    } catch (error) {
      console.error('Error deleting tour:', error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  return (
    <TourContext.Provider value={{ tours, loading, fetchTours, addTour, updateTour, deleteTour }}>
      {children}
    </TourContext.Provider>
  );
};
