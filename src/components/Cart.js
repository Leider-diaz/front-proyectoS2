import React from 'react';

const Cart = ({ cart, removeFromCart }) => {
  return (
    <div>
      {cart.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        cart.map((product) => (
          <div key={product.id} className="cart-item">
            <img
              src={product.image}
              alt={product.producto.nombre}
              style={{
                width: '100px', // Cambia esto al tamaño que prefieras
                height: '100px',
                objectFit: 'cover',
                marginRight: '10px'
              }}
            />
            <h3>{product.producto.nombre}</h3>
            <p>Precio: ${product.producto.precio}</p>
            <p>cantidad: {product.cantidad}</p>
            <button onClick={() => removeFromCart(product.id)}>Quitar del carrito</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
