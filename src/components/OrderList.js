import React, { useState } from 'react';
import './OrderList.css';

const orders = [
  {
    id: 4,
    date: "2024-10-29",
    status: "Registrado",
    store: "Librería Central",
    customer_name: "Joan Pedraza",
    total_price: "150.50",
    products: [
      { product_name: "Percy Jackson: El ladrón del rayo", quantity: 1 },
      { product_name: "Percy Jackson: El mar de los monstruos", quantity: 1 },
      { product_name: "Percy Jackson: La maldición del titán", quantity: 1 },
    ],
  },
  {
    id: 5,
    date: "2024-10-30",
    status: "Enviado",
    store: "Librería Online",
    customer_name: "Ana López",
    total_price: "300.00",
    products: [
      { product_name: "Harry Potter y la piedra filosofal", quantity: 1 },
      { product_name: "Harry Potter y la cámara secreta", quantity: 2 },
    ],
  },
];

const OrderList = () => {
  const [expandedOrderId, setExpandedOrderId] = useState(null);

  const toggleOrderDetails = (orderId) => {
    setExpandedOrderId(orderId === expandedOrderId ? null : orderId);
  };

  return (
    <div className="order-list-container">
      <h2>Lista de Pedidos</h2>
      <div className="order-list">
        {orders.map((order) => (
          <div key={order.id} className="order-card">
            <div className="order-summary">
              <p><strong>Fecha:</strong> {order.date}</p>
              <p><strong>Estado:</strong> {order.status}</p>
              <p><strong>Tienda:</strong> {order.store}</p>
              <p><strong>Cliente:</strong> {order.customer_name}</p>
              <p><strong>Total:</strong> {order.total_price} €</p>
              <button onClick={() => toggleOrderDetails(order.id)} className="view-details-button">
                {expandedOrderId === order.id ? "Ocultar Detalles" : "Ver Detalles"}
              </button>
            </div>

            {expandedOrderId === order.id && (
              <div className="order-details">
                <h3>Productos del Pedido</h3>
                <ul>
                  {order.products.map((product, index) => (
                    <li key={index}>
                      {product.product_name} (Cantidad: {product.quantity})
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderList;
