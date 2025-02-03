// CartSidebar.js
import React from 'react';
import './CartSidebar.css';
import { deleteUnProductosCarrito, obtenerProductosCarrito, setUnProductosCarrito } from './service/General-services';

const CartSidebar = ({ isOpen, cart, addToCart, pedirCarrito, removeFromCart, decreaseQuantity, toggleSidebar, setCart}) => {

  const total = cart.reduce((acc, item) => acc + item.producto.precio * item.cantidad, 0);

  const quitar = async (productId) => {
    await deleteUnProductosCarrito(1, productId);
    const data = await obtenerProductosCarrito(1);
    setCart(data);
  };

  const añadir = async (productId) => {
    console.log(productId);
    await setUnProductosCarrito(1, productId);
    const data = await obtenerProductosCarrito(1);
    setCart(data);
  };

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
                <button onClick={() => quitar(product.idProducto)}>-</button>
                <span>{product.cantidad}</span>
                <button onClick={() => añadir(product.idProducto)}>+</button>
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
