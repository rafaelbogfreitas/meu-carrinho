import React from 'react'

import cartStyles from './cart.module.scss'

const Cart = ({
  cart,
  removeItemsFromCart
}) => {
  return (
      <div>
        <h1>Carrinho</h1>
        {cart.map((product, i) => {
          return (
            <div key={i}>
              <h2>{product.name}</h2>
              <h2>{product.quantity}</h2>
              <button onClick={() => removeItemsFromCart(product._id)}>remove</button>
            </div>
          );
        })}
      </div>
    )
}

export default Cart
