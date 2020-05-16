import React, { useState, useEffect } from 'react';

import Head from 'next/head'
import Link from 'next/link';
import Router from 'next/router';
import { getStore } from '../../../services/storeService';


export default function Store({store}) {

  let [ products, setProducts ] = useState(store.products)
  let [ cart, setCart ] = useState([]);

  useEffect(() => {
    window.localStorage.setItem('products', JSON.stringify(products))
  }, [products])

  const handleProduct = id => {
    const updatedProducts = [...products].map(product => {
      // const productCopy = JSON.parse(JSON.stringify(product));
      if (product._id === id) {
        const newProduct = {
          ...product,
          quantity: product.quantity - 1
        }
        // handleCart(newProduct);
      }
      return product;
    });
    console.log(updatedProducts);
    setProducts(updatedProducts);
  }

  const handleCart = (product) => {

    // if (cart.findIndex(item => item._id === product._id) === -1) {
    //   console.log('aqui')
    //   setCart([...cart, product]);
    //   return;
    // }

    // const updatedCart = [...cart].map(item => {
    //   if (item._id === product._id) {
    //     const newItem = {
    //       ...item,
    //       quantity: item.quantity + 1
    //     }
    //     return newItem;
    //   }
    //   return item;
    // })

    // setCart(updatedCart);
  }

  return (
    <div>
    <Head>
      <title>{store.name}</title>
    </Head>
      <h1 style={{ backgroundColor: `${store.theme.secondaryColor}` }}>
        Welcome to {store.name} store!!
      </h1>
      <div className="products">
        {products.map((product, i) => {
          return (
            <aside key={i} className="product">
              <Link
                href={'/store/[name]/product/[id]'}
                as={`/store/${store.name}/product/${product._id}`}
                key={product._id}
              >
                <a key={product._id}>{product.name}</a>
              </Link>
              <img src={product.imageUrl} alt={product.name}/>
              <div className="quantity">{product.quantity}</div>
              <div className="price">{product.price},00 R$</div>
              <button onClick={() => handleProduct(product._id)}>add</button>
            </aside>
          );
        })}
        <Link
          href={'/store/[name]/paineldevendas'}
          as={`/store/${store.name}/paineldevendas`}
        >
          <a>Painel de vendas</a>
        </Link>
        <Link href={'/editStore/[name]'} as={`/editStore/${store.name}`}>
          <a>Editar</a>
        </Link>
        <Link href={'product/new'} as={`product/new`}>
          <a name={store.name}>New Produto</a>
        </Link>
        <Link href="/minhaslojas"><a>Ir para minhas lojas</a></Link>
      </div>
      <div>
        {cart.map((product, i) => {
          return (
            <div key={i}>
              <h2>{product.name}</h2>
              <h2>{product.price}</h2>
            {/*<Product product={product}/>*/}
            </div>
          );
        })}
      </div>
    </div>
  );
}

Store.getInitialProps = async (context) => {
  const { name } = context.query;
  const [store] = await getStore(name);
  return {
    store,
  }
};
