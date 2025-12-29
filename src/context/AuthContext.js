// src/context/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import { authService } from '../services/authService';

// Create AuthContext
export const AuthContext = createContext();

// AuthProvider to wrap the app
export const AuthProvider = ({ children }) => {
  // Initialize user from authService (if logged in)
  const [user, setUser] = useState(() => authService.getCurrentUser() || null);
  const [loading, setLoading] = useState(false);

  // -----------------------------
  // LOGIN
  // -----------------------------
  const login = async (credentials) => {
    setLoading(true);
    try {
      const data = await authService.login(credentials);
      setUser(data.user); // store user in state
      return data;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // -----------------------------
  // REGISTER
  // -----------------------------
  const register = async (userData) => {
    setLoading(true);
    try {
      const data = await authService.register(userData);
      // Optionally, set user after registration
      // setUser(data.user);
      return data;
    } catch (error) {
      console.error('Register error:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // -----------------------------
  // LOGOUT
  // -----------------------------
  const logout = () => {
    authService.logout();
    setUser(null);
  };

  // -----------------------------
  // PROVIDE CONTEXT VALUES
  // -----------------------------
  const contextValue = {
    user,
    login,
    register,
    logout,
    loading,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};
