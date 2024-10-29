import React, { useState, useEffect } from 'react';
import Product from './Product';
import './ProductList.css'; // Asegúrate de tener un archivo CSS para estilos
import { obtenerProductos } from './service/General-services';

const ProductList = ({ addToCart }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProductos] = useState([]);

  useEffect(()=>{const res = async ()=>{try {
    const data = await obtenerProductos()
    setProductos(data)
  } catch (error) {
    
  }}
  res()
},[])
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const filteredProducts = products.filter((product) =>
    product.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Catálogo de Productos</h2>
      <input
        type="text"
        placeholder="Buscar productos..."
        value={searchTerm}
        onChange={handleSearchChange}
        style={{ width: '80%', padding: '10px', marginBottom: '20px', borderRadius: '5px', border: '1px solid #ccc' }}
      />
      <div className="product-list">
        {filteredProducts.map((product) => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;

