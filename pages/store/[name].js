import React, { useState } from 'react'

import Link from 'next/link'
import axios from 'axios'


export default function Store({ store }){

  let [products, setProducts] = setState(store.products);


  return (
    <div>
      <h1 style={{backgroundColor: `${store.theme.secondaryColor}`}}>Welcome to {store.name} store!!</h1>
      <div className="products">
        <Link to={}>
          <a>+</a>
        </Link>
        {store.products.map( product => {
          return (
            <Link href={'/product/[id]'} as={`/product/${product._id}`} key={product._id}>
              <a key={product._id}>{product.name}</a>
            </Link>
          )}
        )}
      </div>
        <Link href={'/store/paineldevendas/[name]'} as={`/store/paineldevendas/${store.name}`}>
          <a>Painel de vendas</a>
        </Link>
        <Link href={'/editStore/[name]'} as={`/editStore/${store.name}`}>
          <a>Editar</a>
        </Link>
    </div>
  )
}


Store.getInitialProps = async ctx => {
  let { name } = ctx.query;
  const store = await axios.get(`http://localhost:5000/api/v1/store/${name}`)
  return {
    store: store.data[0]
  }
}

