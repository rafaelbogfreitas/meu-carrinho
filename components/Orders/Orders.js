import React, { useEffect } from 'react'
import orderStyles from './orders.module.scss'

import { deleteOrder, updateOrder } from '../../services/orderService'
import { getStore } from '../../services/storeService'

import Moment from 'react-moment';

export default function Orders(props) {
  
  const removeOrder =  async (storeId, orderId) => {
    try {

      let deleted =  await deleteOrder(storeId, orderId)
      let [updatedStore] = await getStore(props.storeName)


      props.setOrders(updatedStore.orders)
    }

    catch(error) {
      console.log(error)
    }
  }

  const changeOrderStatus =  async (orderId) => {

    try {
      
      let updated = await updateOrder(orderId)
      let [updatedStore] = await getStore(props.storeName)
      props.setOrders(updatedStore.orders)

    }

    catch(error) {
      console.log(error)
    }
      
  }

  return (
    <div className={orderStyles.outline_white}>
      <p>Order ID: {props.order._id}</p>
      {props.order.products.map((product, idx) => {
        return <p key={idx}>{product.product.name} - Quantity {product.quantity}</p>
      })}
      <p>Order Total: {props.order.total}.00 R$</p>
      <Moment format="DD/MM/YYYY HH:MM">{props.order.updatedAt}</Moment>
      <button onClick={() => removeOrder(props.storeId, props.order._id)} className="deleteOrder">Delete Order</button>
      <button onClick={() => changeOrderStatus(props.order._id)} className="completeOrder">Complete Order</button>
    </div>
  )
}