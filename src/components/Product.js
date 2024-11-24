import React, { useState } from 'react';
import './Product.css';
import { realizarPedido } from './service/General-services';

const Product = ({ product, addToCart }) => {
  const [quantity, setQuantity] = useState(0);

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };

  const pedir = async (product, quantity) => {
    await realizarPedido(1, product.id, quantity);
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.nombre} className="product-image" />
      <h3>{product.nombre}</h3>
      <p className="product-price">${product.precio}</p>
      <p className="product-category">{product.tipoProducto.nombre}</p>
      <div className="quantity-control">
        <button onClick={handleDecrease}>-</button>
        <span>{quantity}</span>
        <button onClick={handleIncrease}>+</button>
      </div>
      <button onClick={() => addToCart(product, quantity)} className="add-to-cart-button">Añadir al Carrito</button>
      <button onClick={() => pedir(product, quantity)} className="buy-button">Comprar ahora</button>
    </div>
  );
};

export default Product;

