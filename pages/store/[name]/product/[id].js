import React, { useEffect } from 'react';

import Head from 'next/head';
import Link from 'next/link';
import { getProduct } from '../../../../services/productService';

const SingleProduct = ({ product, name }) => {

  //check if localStorage is populated 
  useEffect(() => {
    let productsLocaStorage = JSON.parse(window.localStorage.getItem('products'));
    if(productsLocaStorage != null){
      let [productLocalStorage] = productsLocaStorage.filter(item => item._id === product._id);
      product = productLocalStorage;
    }
  })


  return (
    <>
      <Head>
        <title>{product.name}</title>
      </Head>
      <div>{product.name}</div>
      <img src={product.imageUrl} alt={product.description}/>
      <p>{product.price},00 R$</p>
      <Link 
        href="/store/[name]/product/edit/[id]"
        as={`/store/${name}/product/edit/${product._id}`}
      >
        <button>EDIT</button>
      </Link>
    </>
  )
};

SingleProduct.getInitialProps = async ({query}) => {
  let { id } = query;
  let { name } = query;
  let {product} = await getProduct(id);

  return {
      product,
      name
  }
};


export default SingleProduct;
