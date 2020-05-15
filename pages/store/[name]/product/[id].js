import React, { useEffect } from 'react';
import { getProduct } from '../../../../services/productService';

const SingleProduct = ({ product }) => {

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
      <div>{product.name}</div>
      <img src={product.imageUrl} alt={product.description}/>
      <p>{product.price},00 R$</p>
    </>
  )
};

SingleProduct.getInitialProps = async ({ query : { id }}) => {
  return await getProduct(id);
};


export default SingleProduct;
