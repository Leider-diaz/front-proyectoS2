import React, { useState, useEffect } from 'react';
import './OrderList.css';
import { obtenerPedidos, obtenerPedidos3A } from './service/General-services';



const OrderList = () => {
  const [orders, setPedidos] = useState([]);


useEffect(()=>{const res = async ()=>{try {
  const data = await obtenerPedidos()
  setPedidos(data)
  const data3A = await obtenerPedidos3A()
  orders.concat(data3A)
} catch (error) {
  
}}
res()
},[])
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
              <p><strong>Total:</strong> $ {order.total_price}</p>
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
