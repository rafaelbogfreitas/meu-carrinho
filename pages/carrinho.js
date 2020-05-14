import React, { useState, useEffect } from 'react'
import Router from  'next/router'
import { loggedin } from '../services/authService';


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

  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoggedIn === null) {
      loggedin()
        .then((user) => {
          setIsLoggedIn(true);
          setIsLoading(false);
        })
        .catch((error) => {
          Router.replace('/');
        });
    }
  }, [isLoggedIn, isLoading]);

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
