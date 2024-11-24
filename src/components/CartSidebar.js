// CartSidebar.js
import React from 'react';
import './CartSidebar.css';

const CartSidebar = ({ isOpen, cart, addToCart, pedirCarrito, removeFromCart, decreaseQuantity, toggleSidebar }) => {

  const total = cart.reduce((acc, item) => acc + item.producto.precio * item.cantidad, 0);
  console.log(cart);

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
              <h3>{product.producto.nombre}</h3>
              <p>${product.producto.precio.toFixed(2)} c/u</p>
              <div className="cart-item-controls">
                <button onClick={() => decreaseQuantity(product.id)}>-</button>
                <span>{product.cantidad}</span>
                <button onClick={() => addToCart(product)}>+</button>
                <button onClick={() => removeFromCart(product.id)} className="remove-btn">🗑️</button>
              </div>
            </div>
          ))
        )}
        <div className="cart-summary">
          <h3>Total: ${total.toFixed(2)}</h3>
          <button onClick={() => pedirCarrito(1)} className="checkout-btn">Realizar pedido</button>
        </div>
      </div>
    </div>
  );
};

export default CartSidebar;
