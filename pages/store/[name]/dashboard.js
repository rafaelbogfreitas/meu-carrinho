import React, { useState, useEffect } from 'react';

import Head from 'next/head'
import Link from 'next/link';
import { getStore } from '../../../services/storeService';


export default function Store({store}) {
  
  let [ products, setProducts ] = useState(store.products)
  let [ cart, setCart ] = useState([]);


  useEffect(() => {
    window.localStorage.setItem('products', JSON.stringify(products))
  }, [products])

  const handleProduct = id => {
    let newProduct = {};
    let cartProduct = {};
   
    const updatedProducts = [...products].map(product => {

      if (product._id === id) {
        
        newProduct = {
          ...product,
          quantity: product.quantity - 1
        }

        cartProduct = {
          ...product,
          quantity: 1
        }

        return newProduct;
      }
      return product;
    });

    if(newProduct.quantity < 0) return
    
    setProducts(updatedProducts);

    //handleCart
    if(!cart.some(item => item._id == cartProduct._id) || cart.length == 0){
      setCart([...cart, cartProduct]);
      return
    } 

    let updatedCart = [...cart].map( (item, i, arr) => 
      item._id == cartProduct._id ?
      ({
        ...cartProduct,
        quantity: item.quantity + 1
      }) :
      item
    )

    setCart(updatedCart)
  }

  const removeItemsFromCart = id => {
    let updatedProduct = {}
    let updatedCart = [...cart].filter( item => {
      if(item._id != id) {
        return true
      } else {
        updatedProduct = {
          ...item,
        }
        return false;
      };
    });

    let updatedProducts = [...products].map( item => {
      if(item._id == updatedProduct._id){
        return {
          ...updatedProduct,
          quantity: item.quantity + updatedProduct.quantity
        };
      } else {
        return item;
      }
    })
    setCart(updatedCart);
    setProducts(updatedProducts);
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
              <h2>{product.quantity}</h2>
              <button onClick={() => removeItemsFromCart(product._id)}>remove</button>
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
