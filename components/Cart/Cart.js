import React, { useState } from 'react'
import Loading from '../Loading/Loading'

import { createOrder } from '../../services/orderService'
import cartStyles from './cart.module.scss'

const Cart = ({
  cart,
  storeId,
  removeItemsFromCart,
  setCart
}) => {

  let [ loading, setLoading ] = useState(false);
  
  let total = 0;
  let products = [];

  const sendOrder = () => {
    
    let order = {
      products,
      total
    }

    createOrder(storeId, order)
      .then( response => {
        setCart([])
        setLoading(false)

      })
      .catch(error => {
        console.log(error)
        setLoading(false)
      })


  }


  return (
    loading ?
    <Loading/> :
      <div>
        <h1>Carrinho</h1>
        {cart.map((product, i) => {
          total += product.quantity * product.price;
          products.push({
            product: product._id,
            quantity: product.quantity
          })
          return (
            <div key={i}>
              <h2>{product.name}</h2>
              <h2>{product.quantity}</h2>
              <button onClick={() => removeItemsFromCart(product._id)}>remove</button>
            </div>
          );
        })}
        <strong>{total}</strong>
        <button onClick={sendOrder}>ENVIAR</button>
      </div>
    )
}

export default Cart
