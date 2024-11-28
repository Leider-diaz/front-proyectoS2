// ProductModal.js
import React, { useState, useEffect } from 'react';
import './ProductModal.css';
import { realizarPedido } from './service/General-services';

function ProductModal({ product, isOpen, onClose, addToCart }) {
  const [quantity, setQuantity] = useState(0);
  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };
  
  if (!isOpen) return null;


  const pedir = async (product, quantity) => {
    await realizarPedido(1, product.id, quantity);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>X</button>
        
        <div className="modal-body">
          <div className="modal-image">
          <img src='/images/4.jpg' alt={product.nombre} className="product-image" />
          </div>
          
          <div className="modal-details">
            <h2>{product.nombre}</h2>
            <p className="category">{product.tipoProducto.nombre}</p>
            <p className="price">${product.precio}</p>
            
            <div className="tabs">
              <button className="tab-button active">Descripción</button>
            </div>
            <p className="description">
            {product.descripcion}
            </p>

            <div className="quantity-control">
            <button onClick={handleDecrease}>-</button>
            <span>{quantity}</span>
            <button onClick={handleIncrease}>+</button>
            </div>

            <div className="modal-buttons">
              <button className="add-to-cart" onClick={() => addToCart(product, quantity)}>Añadir al Carrito</button>
              <button onClick={() => pedir(product, quantity)} className="buy-button">Comprar ahora</button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;
