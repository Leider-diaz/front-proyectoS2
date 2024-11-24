import React, { useState } from 'react';
import './App.css';
import ProductList from './components/ProductList';
import CartSidebar from './components/CartSidebar';
import ProductModal from './components/ProductModal';
import OrderList from './components/OrderList';


function App() {
  const [cart, setCart] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

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
    setCart(cart.filter((product) => product.id !== productId)); // Quita el producto del carrito
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

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const [viewOrders, setViewOrders] = useState(false);

  const toggleViewOrders = () => {
  setViewOrders(!viewOrders);
};

const [orders, setOrders] = useState([]);
const addOrder = (product, quantity) => {
  if (quantity === 0) return; // Evitar agregar pedidos sin cantidad

  const newOrder = {
    id: orders.length + 1, // Asignar un ID único
    date: new Date().toISOString().split('T')[0], // Fecha actual en formato YYYY-MM-DD
    status: 'Registrado', // Estado inicial del pedido
    store: 'Tienda Online', // Nombre de la tienda
    customer_name: 'Cliente Anónimo', // Nombre genérico
    total_price: (product.price * quantity).toFixed(2), // Precio total del pedido
    products: [{ product_name: product.name, quantity }],
  };

  setOrders([...orders, newOrder]); // Actualizar la lista de pedidos
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
        <button className="btn-productos" onClick={toggleViewOrders}>
          {viewOrders ? "Cerrar Pedidos" : "Ver Pedidos"}
        </button>
      </div>
    </header>

    {/* Contenido principal */}
    <main>
      {viewOrders ? (
        <OrderList />
      ) : (
        <section id="productos">
          <ProductList addToCart={addToCart} openModal={openModal} addOrder={addOrder} />
        </section>
      )}
    </main>

    {/* Sidebar del carrito */}
    <CartSidebar
      isOpen={isSidebarOpen}
      cart={cart}
      addToCart={addToCart}
      removeFromCart={removeFromCart}
      decreaseQuantity={decreaseQuantity}
      toggleSidebar={toggleSidebar}
    />

    {/* Modal del producto */}
    <ProductModal
      product={selectedProduct}
      isOpen={isModalOpen}
      onClose={closeModal}
      addToCart={addToCart}
    />
  </div>
);

}

export default App;
