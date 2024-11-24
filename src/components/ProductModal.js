// ProductModal.js
import React from 'react';
import './ProductModal.css';

function ProductModal({ product, isOpen, onClose, addToCart }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>X</button>
        
        <div className="modal-body">
          <div className="modal-image">
            {/* Imagen del producto, puedes sustituir el src por una imagen válida */}
            <img src='/images/1.jpg' alt={product.title} />
          </div>
          
          <div className="modal-details">
            <h2>{product.title}</h2>
            <p className="category">Calzado Deportivo</p>
            <p className="price">89.99 €</p>
            
            <div className="tabs">
              <button className="tab-button active">Descripción</button>
              <button className="tab-button">Características</button>
            </div>
            <p className="description">
              Estas zapatillas deportivas Ultra Comfort son perfectas para tus entrenamientos diarios. Diseñadas con tecnología de amortiguación avanzada y materiales transpirables, te proporcionarán el máximo confort y rendimiento durante tus actividades físicas.
            </p>

            <div className="quantity-controls">
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>

            <div className="modal-buttons">
              <button className="add-to-cart" onClick={() => addToCart(product)}>Añadir al Carrito</button>
              <button className="buy-now">Comprar Ahora</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;
