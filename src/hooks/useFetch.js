// src/hooks/useFetch.js
import { useState, useEffect } from 'react';
import api from '../services/api';

const useFetch = (endpoint) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await api.get(endpoint);
      setData(response.data);
    } catch (err) {
      setError(err);
      console.error('Fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [endpoint]);

  return { data, loading, error, refetch: fetchData };
};

export default useFetch;
