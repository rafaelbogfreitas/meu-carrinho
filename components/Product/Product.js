import React, { useState } from 'react';
import productStyles from './product.module.scss';
import OwnerFeature from '../OwnerFeature/OwnerFeature';
import ClientFeature from '../ClientFeature/ClientFeature';
import { handleInputChange } from '../../services/helpers';

import Link from 'next/link';

const Product = ({
  name,
  description,
  price,
  imageUrl,
  quantity,
  handleProduct,
  handleDelete,
  storeName,
  _id,
}) => {
  const [amount, setAmount] = useState(1);

  return (
    <aside className="product">
      <Link
        href={'/store/[name]/product/[id]'}
        as={`/store/${storeName}/product/${_id}`}
        key={_id}
      >
        <a key={_id}>{name}</a>
      </Link>
      <img src={imageUrl} alt={name} />
      <div>{description}</div>
      <div className="quantity">{quantity}</div>
      <div className="price">{price},00 R$</div>
      {/* <ClientFeature> */}
        <label htmlFor="amount">Amount:</label>
        <input 
          type="number" 
          name="amount"
          value={amount}
          onChange={(event) => handleInputChange(event, setAmount)}
        />
        <button onClick={() => handleProduct(_id, amount)}>add</button>
      {/* </ClientFeature> */}
      {/* <OwnerFeature> */}
        <button onClick={() => handleDelete(_id)}>DELETE</button>
      {/* </OwnerFeature> */}
    </aside>
  );
};

export default Product;
