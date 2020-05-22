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
import Button from '../../../../components/Button/Button';

import { renderMetatags } from '../../../../services/helpers';
import { getProduct, deleteProduct } from '../../../../services/productService';
import { getStore } from '../../../../services/storeService';

const SingleProduct = ({ product, name }) => {
  const router = useRouter();
  const { products, setProducts } = useContext(ProductsContext);
  const { setStoreName } = useContext(StoreContext);
  const { cart, setCart } = useContext(CartContext);
  const [amount, setAmount] = useState(1);
  
  setStoreName(name);
  
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
          `https://meu-carrinho.now.sh/store/${name}/product/${product._id}`,
          product.imageUrl
        )}
      </Head>
      <main className="container--no-grid">
        <h1 className="title">{product.name}</h1>
        <div className="single-product">
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

            <ClientFeature>
              <footer className="single-product-info__footer">
                <p>
                  <span>R$</span> {product.price},00
                </p>

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
              </footer>
            </ClientFeature>
            <OwnerFeature>
              <footer>
                <Link
                  href="/store/[name]/product/edit/[id]"
                  as={`/store/${name}/product/edit/${product._id}`}
                >
                  <a>
                    <Button submit color="green">
                      Editar
                    </Button>
                  </a>
                </Link>

                <Button color="red" handler={handleDelete}>
                  Deletar
                </Button>

                <Link
                  href="/store/[name]/dashboard"
                  as={`/store/${name}/dashboard`}
                >
                  <a>
                    <Button color="brown">Voltar</Button>
                  </a>
                </Link>
              </footer>
            </OwnerFeature>

          </aside>
        </div>
      </main>
    </>
  );
};

SingleProduct.getInitialProps = async (ctx) => {
  let { id } = ctx.query;
  let { name } = ctx.query;
  
  try {
    let { product } = await getProduct(id);
    return {
      product,
      name,
    };
  }

  catch(error) {
      ctx.res.writeHead(302, {Location: '/404'})
      ctx.res.end()
      return {};
  }
  
};

export default SingleProduct;
