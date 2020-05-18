import React, { useState, useEffect, useContext } from 'react';
import Product from '../../../components/Product/Product';
import Cart from '../../../components/Cart/Cart';
import { ProductsContext, CartContext, StoreContext } from '../../../contexts/UserContext';
import Loading from '../../../components/Loading/Loading';
import OwnerFeature from '../../../components/OwnerFeature/OwnerFeature';
import ClientFeature from '../../../components/ClientFeature/ClientFeature';

import Head from 'next/head';
import Link from 'next/link';

import { renderMetatags } from '../../../services/helpers';
import { getStore } from '../../../services/storeService';
import { deleteProduct } from '../../../services/productService';

export default function Store({ store }) {
  const [isLoading, setIsLoading] = useState(true);
  const { products, setProducts } = useContext(ProductsContext);
  const { cart, setCart } = useContext(CartContext);
  const { storeName, setStoreName } = useContext(StoreContext);

  useEffect(() => {
    if (products === null || store.name !== storeName) {
      setStoreName(store.name);
      setProducts(store.products);
      setCart([]);
    }
    setIsLoading(false);
    // window.localStorage.setItem('products', JSON.stringify(products))
  }, [products, cart]);

  const handleDelete = async (productId) => {
    try {
      const response = await deleteProduct(store._id, productId);
      console.log(response);
      
      const [{ products }] = await getStore(storeName);
      setProducts(products);
    } catch (error) {
      console.log(error);
    }
  };

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
  };

  const removeItemsFromCart = (id) => {
    let updatedProduct = {};
    let updatedCart = [...cart].filter((item) => {
      if (item._id != id) {
        return true;
      } else {
        updatedProduct = {
          ...item,
        };
        return false;
      }
    });

    let updatedProducts = [...products].map((item) => {
      if (item._id == updatedProduct._id) {
        return {
          ...updatedProduct,
          quantity: +item.quantity + +updatedProduct.quantity,
        };
      } else {
        return item;
      }
    });
    setCart(updatedCart);
    setProducts(updatedProducts);
  };

  return isLoading ? (
    <Loading />
  ) : (
    <div>
      <Head>
        <title>{store.name}</title>
        {renderMetatags(
          'Loja ' + store.name, 
          store.about,
          'http://localhost:3000/store/' + store.name,
          store.imageUrl
        )}
      </Head>
      <h1 style={{ backgroundColor: `${store.theme.secondaryColor}` }}>
        Welcome to {store.name} store!!
      </h1>
      <div className="products">
        {products.map((product, i) => {
          return (
            <Product
              key={i}
              handleProduct={handleProduct}
              handleDelete={handleDelete}
              {...product}
              storeName={store.name}
            />
          );
        })}

        <OwnerFeature>
          <Link
            href={'/store/[name]/paineldevendas'}
            as={`/store/${store.name}/paineldevendas`}
          >
            <a>Painel de vendas</a>
          </Link>
          <Link href={'/editStore/[name]'} as={`/editStore/${store.name}`}>
            <a>Editar</a>
          </Link>
          <Link href={'product/new'} as={`product/new`}>
            <a name={store.name}>New Produto</a>
          </Link>
          <Link href="/minhaslojas">
            <a>Ir para minhas lojas</a>
          </Link>
        </OwnerFeature>

      </div>

      <ClientFeature>
        <div>
        <Cart 
          cart={cart} 
          storeId={store._id} 
          removeItemsFromCart={removeItemsFromCart}
          setCart={setCart}
        />
        </div>
      </ClientFeature>
    </div>
  );
}

Store.getInitialProps = async (context) => {
  const { name } = context.query;
  const [store] = await getStore(name);
  return {
    store,
  };
};
