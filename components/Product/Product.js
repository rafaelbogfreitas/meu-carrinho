import React from 'react'
import productStyles from './product.module.scss'

import Link from 'next/link'

const Product = ({
     name, 
     description, 
     price, 
     imageUrl,
     quantity,
     handleProduct,
     storeName,
     _id
    }) => {
  return (
    <aside className="product">
        <Link
          href={'/store/[name]/product/[id]'}
          as={`/store/${storeName}/product/${_id}`}
          key={_id}
        >
          <a key={_id}>{name}</a>
        </Link>
        <img src={imageUrl} alt={name}/>
        <div className="quantity">{quantity}</div>
        <div className="price">{price},00 R$</div>
        <button onClick={() => handleProduct(_id)}>add</button>
    </aside>
  )
}

export default Product
