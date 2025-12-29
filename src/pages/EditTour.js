// src/pages/EditTour.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const EditTour = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    // TODO: fetch tour by id and set state
    setTitle('Sample Tour');
    setDescription('Sample description');
    setPrice(250);
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ id, title, description, price });
    // TODO: call API to update tour
  };

  return (
    <div className="tour-form">
      <h2>Edit Tour</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} required />
        <textarea placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} required />
        <input type="number" placeholder="Price" value={price} onChange={e => setPrice(e.target.value)} required />
        <button type="submit">Update Tour</button>
      </form>
    </div>
  );
};

export default EditTour;
