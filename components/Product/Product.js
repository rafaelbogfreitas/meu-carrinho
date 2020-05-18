import React from 'react';
import productStyles from './product.module.scss';
import OwnerFeature from '../OwnerFeature/OwnerFeature';
import ClientFeature from '../ClientFeature/ClientFeature';

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
      <ClientFeature>
        <button onClick={() => handleProduct(_id)}>add</button>
      </ClientFeature>
      <OwnerFeature>
        <button onClick={() => handleDelete(_id)}>DELETE</button>
      </OwnerFeature>
    </aside>
  );
};

export default Product;
