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
        <a key={_id}>
          <div className="product-image">
            <img src={imageUrl} alt={name} />
            { quantity == 0 ? <div class="esgotado">esgotado</div> : null}
          </div>
        </a>
      </Link>
          {/* <div className="quantity">{quantity}</div> */}
          <div className="product-content">
            <div className="product-info">
              <div className="product-name">{name}</div>
              <div className="price">{price},00 R$</div>
            </div>
            <OwnerFeature>
              <button onClick={() => handleDelete(_id)}>
                <img className="bin" src="/bin.svg" alt="bin icon"/>
              </button>
            </OwnerFeature>

            <ClientFeature>
            <div className="add-btn">
              {/* <label htmlFor="amount">Amount:</label> */}
                { 
                  <input 
                    type="number" 
                    name="amount"
                    value={amount}
                    max={quantity}
                    min={0}
                    onChange={(event) => handleInputChange(event, setAmount)}
                  />
                }
              <button onClick={() => handleProduct(_id, amount)}>
                <img src="/cart.svg" alt="cart icon"/>
              </button>
            </div>
            </ClientFeature>
          </div>
      
    </aside>
  );
};

export default Product;
