import React from 'react'
import orderStyles from './orders.module.scss'

import { deleteOrder } from '../../services/orderService'




export default function Orders(props) {
  
  const removeOrder = (storeId, orderId) => {
    deleteOrder(storeId, orderId)
      .then( response => {
        console.log(response)
      })
      .catch(error => console.log(error))
  }
  return (
    <div className={orderStyles.outline_white}>
      <p>Order ID: {props.order.id}</p>
      {props.order.products.map((product, idx) => {
        return <p key={idx}>{product.name} - Quantity {product.quantity}</p>
      })}
      <p>Order Total: {props.order.total}</p>
      <button onClick={() => removeOrder(props.storeId, props.order._id)}>Delete Order</button>
      <button onClick={() => updateOrder(props.order.id)}>Finish Order</button>
    </div>
  )
}