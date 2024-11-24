// components/Checkout.js
import React, { useState } from 'react';

function Checkout({ cart, onSubmit }) {
  const [formData, setFormData] = useState({ name: '', address: '', email: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // Envia los datos al componente App
  };

  return (
    <div>
      <h2>Detalles de Compra</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label>
          Dirección:
          <input type="text" name="address" value={formData.address} onChange={handleChange} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <button type="submit">Confirmar Compra</button>
      </form>
    </div>
  );
}

export default Checkout;