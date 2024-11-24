// CartSidebar.js
import React from 'react';
import './CartSidebar.css';

const CartSidebar = ({ isOpen, cart, addToCart, removeFromCart, decreaseQuantity, toggleSidebar }) => {
  // Calcular subtotal e IVA
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const iva = subtotal * 0.16;
  const total = subtotal + iva;

  return (
    <div className={`cart-sidebar ${isOpen ? 'open' : ''}`}>
      <div className="cart-header">
        <h2>Tu Carrito de Compras</h2>
        <button onClick={toggleSidebar} className="close-btn">&times;</button>
      </div>
      <div className="cart-content">
        {cart.length === 0 ? (
          <p>El carrito está vacío</p>
        ) : (
          cart.map((product) => (
            <div key={product.id} className="cart-item">
              <h3>{product.name}</h3>
              <p>${product.price.toFixed(2)} c/u</p>
              <div className="cart-item-controls">
                <button onClick={() => decreaseQuantity(product.id)}>-</button>
                <span>{product.quantity}</span>
                <button onClick={() => addToCart(product)}>+</button>
                <button onClick={() => removeFromCart(product.id)} className="remove-btn">🗑️</button>
              </div>
            </div>
          ))
        )}
        <div className="cart-summary">
          <p>Subtotal: ${subtotal.toFixed(2)}</p>
          <p>IVA (16%): ${iva.toFixed(2)}</p>
          <h3>Total: ${total.toFixed(2)}</h3>
          <button className="checkout-btn">Pagar</button>
        </div>
      </div>
    </div>
  );
};

export default CartSidebar;
