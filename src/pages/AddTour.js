// src/pages/AddTour.js
import React, { useState } from 'react';

const AddTour = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ title, description, price });
    // TODO: call API to add tour
  };

  return (
    <div className="tour-form">
      <h2>Add Tour</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} required />
        <textarea placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} required />
        <input type="number" placeholder="Price" value={price} onChange={e => setPrice(e.target.value)} required />
        <button type="submit">Add Tour</button>
      </form>
    </div>
  );
};

export default AddTour;
