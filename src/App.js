import React, { useEffect, useState } from 'react';
import './App.css';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import { obtenerProductos, obtenerProductosCarrito, setProductosCarrito } from './components/service/General-services';

function App() {
  const [cart, setCart] = useState([]);
  const [productos, setProductos] = useState([])

  useEffect(()=>{const res = async ()=>{try {
    const data = await obtenerProductos()
    setProductos(data)
  } catch (error) {
    
  }}
  res()
},[])

useEffect(()=>{const res = async ()=>{try {
  const data = await obtenerProductosCarrito(1)
  setCart(data)
} catch (error) {
  
}}
res()
},[])

  const addToCart = async (product, quantity) => {
    await setProductosCarrito(1, product.id, quantity);
    const data = await obtenerProductosCarrito(1);
    console.log(data);
    setCart(data); // Agrega el producto al carrito
    console.log(cart);
  };
  
  const [currentPage, setCurrentPage] = useState(window.location.pathname)
  const navigate = () => {setCurrentPage("/producto")}

  const removeFromCart = (productId) => {
    setCart(cart.filter(product => product.id !== productId)); // Quita el producto del carrito
  };


  return (
    <div className="App">
      {/* Header */}
      <header className="App-header">
        <h1>Mi Tienda Online</h1>
        <nav>
          <ul>
            <li><a href="#productos">Productos</a></li>
            <li><a href="#carrito">Carrito</a></li>
          </ul>
        </nav>
      </header>

      {/* Contenido principal */}
      <main>
        <section id="productos">

          <ProductList addToCart={addToCart} />
        </section>

        <section id="carrito">
          <h2>Carrito de Compras</h2>
          <Cart cart={cart} removeFromCart={removeFromCart} />
        </section>
      </main>
    </div>

  );
}

export default App;
