import React from 'react'

let props = {
  products: [{
    name: 'Produto 1',
    quantity: 5
  },
  {
    name: 'Produto 2',
    quantity: 10
  }],
  total: 50
}

export default function carrinho() {
  return (
    <div>
      {props.products.map((product, idx) => {
        return (
          <div key={idx}>
            <p>{product.name} - Quantidade: {product.quantity}</p>
          </div>
        )
      })}
      <h1>Total = {props.total}</h1>
    </div>
  )
}
