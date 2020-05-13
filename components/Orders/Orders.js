import React from 'react'
import orderStyles from './orders.module.scss'


const deleteOrder = (orderId) => {
  // TODO: CHAMAR DELETE ORDER
  console.log(`Delete - order id: ${orderId}`)
}
const updateOrder = (orderId) => {
  // TODO: CHAMAR UPDATE ORDER
  console.log(`Update - order Id: ${orderId}`)

}

export default function Orders(props) {
  return (
    <div className={orderStyles.outline_white}>
      <p>Order ID: {props.order.id}</p>
      {props.order.products.map((product, idx) => {
        return <p key={idx}>{product.name} - Quantity {product.quantity}</p>
      })}
      <p>Order Total: {props.order.total}</p>
      <button onClick={() => deleteOrder(props.order.id)}>Delete Order</button>
      <button onClick={() => updateOrder(props.order.id)}>Finish Order</button>
    </div>
  )
}