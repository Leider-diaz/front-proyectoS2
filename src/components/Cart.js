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
              alt={product.name}
              style={{
                width: '100px', // Cambia esto al tamaño que prefieras
                height: '100px',
                objectFit: 'cover',
                marginRight: '10px'
              }}
            />
            <h3>{product.name}</h3>
            <p>Precio: ${product.price}</p>
            <button onClick={() => removeFromCart(product.id)}>Quitar del carrito</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
