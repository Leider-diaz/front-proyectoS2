import React, { useState } from 'react';
import './App.css';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import CartSidebar from './components/CartSidebar';

function App() {
  const [cart, setCart] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(product => product.id !== productId)); // Quita el producto del carrito
  };

  const decreaseQuantity = (productId) => {
    setCart(
      cart.map((item) =>
        item.id === productId
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : item
      )
    );
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const scrollToProducts = () => {
    const section = document.getElementById('productos');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      {/* Header */}
      <header className="App-header">
        <h1>Mi Tienda Online</h1>
        <div className="header-buttons">
          <button className="btn-productos" onClick={toggleSidebar}>
            Carrito de compras
          </button>
          <button className="btn-productos" onClick={scrollToProducts}>
            Productos
          </button>
        </div>
      </header>

      {/* Contenido principal */}
      <main>
        <section id="productos">
          <ProductList addToCart={addToCart} />
        </section>
      </main>

      <CartSidebar
        isOpen={isSidebarOpen}
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        decreaseQuantity={decreaseQuantity}
        toggleSidebar={toggleSidebar}
      />
    </div>
  );
}

export default App;
