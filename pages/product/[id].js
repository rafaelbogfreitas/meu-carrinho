import React from 'react';
import { getProduct } from '../../services/productService';

const SingleProduct = ({ product }) => {
  return <div>{product.name}</div>;
};

SingleProduct.getInitialProps = async ({ query : { id }}) => {
  return await getProduct(id);
};

export default SingleProduct;
