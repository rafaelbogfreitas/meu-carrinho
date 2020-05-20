import React, { useEffect } from 'react'
import orderStyles from './orders.module.scss'

import { deleteOrder, updateOrder } from '../../services/orderService'
import { getStore } from '../../services/storeService'

import Moment from 'react-moment';

export default function Orders(props) {
  console.log(props.order.products[0].product.name)
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
    <div className="order">
      <div className="order-header">
        <p>Order ID: {props.order._id}</p>
        <Moment format="DD/MM/YYYY HH:MM">{props.order.updatedAt}</Moment>
      </div>
      {props.order.products.map((product, idx) => {
        console.log(product)
        return <p key={idx}>{product.quantity} x {product.product && product.product.name }</p>
      })}
      <p>Order Total: {props.order.total}.00 R$</p>
      {
        props.order.status == 'pending' ?
        <div className="btn-order-container">
          <button onClick={() => changeOrderStatus(props.order._id)} className="btn-order">Concluir</button>
          <button onClick={() => removeOrder(props.storeId, props.order._id)} className="btn-order btn-order--delete">Cancelar</button>
        </div> :
        null
      }
    </div>
  )
}