import React, { useEffect } from 'react'
import orderStyles from './orders.module.scss'

import { deleteOrder, updateOrder } from '../../services/orderService'
import Moment from 'react-moment';

export default function Orders(props) {
  
  useEffect(() => {

  }, [])
  
  const removeOrder = (storeId, orderId) => {
    deleteOrder(storeId, orderId)
      .then( response => {
        console.log(response)
      })
      .catch(error => console.log(error))
  }

  const changeOrderStatus = (orderId, body) => {
    updateOrder(orderId, body)
      .then( response => console.log(response))
      .catch( error => console.log(error))
  }

  return (
    <div className={orderStyles.outline_white}>
      <p>Order ID: {props.order._id}</p>
      {props.order.products.map((product, idx) => {
        return <p key={idx}>{product.product.name} - Quantity {product.product.quantity}</p>
      })}
      <p>Order Total: {props.order.total}.00 R$</p>
      <Moment format="DD/MM/YYYY HH:MM">{props.order.updatedAt}</Moment>
      <button onClick={() => removeOrder(props.storeId, props.order._id)}>Delete Order</button>
      <button onClick={() => changeOrderStatus(props.order._id)}>Complete Order</button>
    </div>
  )
}