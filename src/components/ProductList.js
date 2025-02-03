import React, { useState } from 'react';
import Product from './Product';
import './ProductList.css';

const ProductList = ({ addToCart, openModal }) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const products = [
    { id: 1, name: 'Zapatos nike v1', price: 19.99, image: '/images/1.jpg', category: 'Ropa' },
    { id: 2, name: 'Zapatos nike v2', price: 49.99, image: '/images/2.jpg', category: 'Ropa' },
    { id: 3, name: 'Zapatos nike v3', price: 79.99, image: '/images/3.jpg', category: 'Calzado' },
    // Agrega más productos si es necesario
  ];

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Catálogo de Productos</h2>
      <input
        type="text"
        placeholder="Buscar productos..."
        value={searchTerm}
        onChange={handleSearchChange}
        style={{
          width: '80%',
          padding: '10px',
          marginBottom: '20px',
          borderRadius: '5px',
          border: '1px solid #ccc'
        }}
      />
      
      <div className="product-list">
        {filteredProducts.map((product) => (
          <Product 
          key={product.id} 
          product={product} 
          addToCart={addToCart} 
          openModal={openModal} // Pasar openModal al componente Product
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
