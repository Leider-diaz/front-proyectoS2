import React, { useState } from 'react';
import './Product.css';

const Product = ({ product, addToCart, openModal}) => {
  const [quantity, setQuantity] = useState(0);

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };

  return (
    <div className="product-card">
      <img src='/images/4.jpg' alt={product.nombre} className="product-image" />
      {/* Título clicable para abrir el modal */}
      <h3 
        onClick={() => openModal(product)} 
        style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}
      >
        {product.nombre}
      </h3>
      <p className="product-price">${product.precio}</p>
      <p className="product-category">{product.tipoProducto.nombre}</p>
      <div className="quantity-control">
        <button onClick={handleDecrease}>-</button>
        <span>{quantity}</span>
        <button onClick={handleIncrease}>+</button>
      </div>
      
      <button onClick={() => addToCart(product, quantity)} className="add-to-cart-button">
        Añadir al Carrito
      </button>
      <button className="buy-button">Comprar ahora</button>
    </div>
  );
};

export default Product;
