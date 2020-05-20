import React, { useState, useEffect, useContext } from 'react';
import {
  ProductsContext,
  CartContext,
  StoreContext,
} from '../../../../contexts/UserContext';
import { useRouter } from 'next/router';
import { handleInputChange } from '../../../../services/helpers';

import Head from 'next/head';
import Link from 'next/link';

import OwnerFeature from '../../../../components/OwnerFeature/OwnerFeature';
import ClientFeature from '../../../../components/ClientFeature/ClientFeature';

import { renderMetatags } from '../../../../services/helpers';
import { getProduct, deleteProduct } from '../../../../services/productService';
import { getStore } from '../../../../services/storeService';

const SingleProduct = ({ product, name }) => {
  const router = useRouter();
  const { products, setProducts } = useContext(ProductsContext);
  const { cart, setCart } = useContext(CartContext);
  const [amount, setAmount] = useState(1);
  /**
   * Comentei o trecho abaixo provisóriamente pois parece que não
   * tem mais utilidade já que estamos controlando products e cart
   * pelo context. Ele também estava deixando o product undefinied e
   * impedindo o funcionamento do handleDelete.
   */

  //check if localStorage is populated
  // useEffect(() => {
  //   let productsLocaStorage = JSON.parse(window.localStorage.getItem('products'));
  //   console.log()
  //   if(productsLocaStorage != null){
  //     let [productLocalStorage] = productsLocaStorage.filter(item => item._id === product._id);
  //     product = productLocalStorage;
  //   }
  // })
  useEffect(() => {
    if (!products) {
      getStore(name)
        .then(([store]) => setProducts(store.products))
        .catch((error) => console.log(error));
    }
  }, []);

  const handleProduct = (id, amount) => {
    let newProduct = {};
    let cartProduct = {};

    const updatedProducts = [...products].map((product) => {
      if (product._id === id) {
        newProduct = {
          ...product,
          quantity: +product.quantity - +amount,
        };

        cartProduct = {
          ...product,
          quantity: +amount,
        };

        return newProduct;
      }
      return product;
    });

    if (newProduct.quantity < 0) return;

    setProducts(updatedProducts);

    //handleCart
    if (!cart.some((item) => item._id == cartProduct._id) || cart.length == 0) {
      setCart([...cart, cartProduct]);
      return;
    }

    let updatedCart = [...cart].map((item, i, arr) =>
      item._id == cartProduct._id
        ? {
            ...cartProduct,
            quantity: +item.quantity + +amount,
          }
        : item
    );

    setCart(updatedCart);
    // router.push(`/store/${name}/dashboard`)
  };

  const handleDelete = async () => {
    try {
      const [store] = await getStore(name);
      const response = await deleteProduct(store._id, product._id);
      router.push(`/store/${name}/dashboard`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Head>
        {renderMetatags(
          product.name,
          product.description,
          `http://localhost:3000/store/${name}/product/${product._id}`,
          product.imageUrl
        )}
      </Head>
      <main className="container--no-grid">
        <h1 className="title">{product.name}</h1>
        <div className="row">
          <figure className="single-product-figure">
            <img
              className="single-product-figure__img"
              src={product.imageUrl}
              alt={product.description}
            />
          </figure>
          <aside className="single-product-info">
            <header className="single-product-info__header">
              <p>{product.description}</p>
            </header>

            <footer className="single-product-info__footer">
              <p>
                <span>R$</span> {product.price},00
              </p>

              <ClientFeature>
                <div className="add-btn">
                  <input
                    type="number"
                    name="amount"
                    value={amount}
                    max={product.quantity}
                    min={0}
                    onChange={(event) => handleInputChange(event, setAmount)}
                  />
                  <Link
                    href={'/store/[name]/dashboard'}
                    as={`/store/${name}/dashboard`}
                  >
                    <button onClick={() => handleProduct(product._id, amount)}>
                      <img src="/cart.svg" alt="cart icon" />
                    </button>
                  </Link>
                </div>
              </ClientFeature>

              {/* <label htmlFor="amount">Amount:</label>
              {product.quantity == 0 ? (
                <div>Esgotado</div>
              ) : (
                <ClientFeature>
                  <input
                    type="number"
                    name="amount"
                    value={amount}
                    max={product.quantity}
                    min={1}
                    onChange={(event) => handleInputChange(event, setAmount)}
                  />
                </ClientFeature>
              )}
              <OwnerFeature>
                <Link
                  href="/store/[name]/product/edit/[id]"
                  as={`/store/${name}/product/edit/${product._id}`}
                >
                  <button className="editButton">EDIT</button>
                </Link>
              </OwnerFeature>
              <OwnerFeature>
                <button onClick={handleDelete} className="deleteButton">
                  DELETE
                </button>
              </OwnerFeature>
              <ClientFeature>
                <Link
                  href={'/store/[name]/dashboard'}
                  as={`/store/${name}/dashboard`}
                >
                  <button onClick={() => handleProduct(product._id, amount)}>
                    ADD
                  </button>
                </Link>
              </ClientFeature> */}
            </footer>
          </aside>
        </div>
      </main>
    </>
  );
};

SingleProduct.getInitialProps = async ({ query }) => {
  let { id } = query;
  let { name } = query;
  let { product } = await getProduct(id);

  return {
    product,
    name,
  };
};

export default SingleProduct;
