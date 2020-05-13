import React from 'react'
import axios from 'axios';

const SingleProduct = ({product}) => {
  return (
    <div>
      {product.name}
    </div>
  )
}

SingleProduct.getInitialProps = async ctx => {
  let { id } = ctx.query;
  console.log(id)
  const product = await axios.get(`http://localhost:5000/api/v1/product/${id}`)
  console.log(product)
  return {
    product: product.data.product
  }
}

export default SingleProduct;