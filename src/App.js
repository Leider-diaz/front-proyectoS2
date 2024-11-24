import React, { useEffect, useState } from 'react';
import './App.css';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import CartSidebar from './components/CartSidebar';
import { deleteProductosCarrito, obtenerProductos, obtenerProductosCarrito, realizarPedidoCarrito, setProductosCarrito } from './components/service/General-services';

function App() {
  const [cart, setCart] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);


useEffect(()=>{const res = async ()=>{try {
  const data = await obtenerProductosCarrito(1)
  setCart(data)
} catch (error) {
  
}}
res()
},[])

  const addToCart = async (product, quantity) => {
    try {
      await setProductosCarrito(1, product.id, quantity);
    } catch (error) {
      console.log(error.message)
    }
    const data = await obtenerProductosCarrito(1);
    setCart(data); // Agrega el producto al carrito
  };

  const pedirCarrito = async (idUsuario) => {
    await realizarPedidoCarrito(idUsuario);
    const data = await obtenerProductosCarrito(1);
    setCart(data);
  };
  
  const [currentPage, setCurrentPage] = useState(window.location.pathname)
  const navigate = () => {setCurrentPage("/producto")}

  const removeFromCart = async (productId) => {
    await deleteProductosCarrito(productId);
    const data = await obtenerProductosCarrito(1);
    setCart(data); // Quita el producto del carrito
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
        pedirCarrito={pedirCarrito}
        decreaseQuantity={decreaseQuantity}
        toggleSidebar={toggleSidebar}
      />
    </div>
    
  );
}

export default App;
