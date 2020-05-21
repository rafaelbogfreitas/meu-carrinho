import { useState, useEffect } from 'react';
import '../styles/index.scss';
import {
  UserContext,
  ProductsContext,
  CartContext,
  StoreContext,
} from '../contexts/UserContext';

import Head from 'next/head';
import Router from 'next/router'
import * as gtag from '../lib/gtag'


  

export default function App({ Component, pageProps }) {
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState(null);
  const [storeName, setStoreName] = useState('');
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    Router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [])

  return (
    <>
    <Head>
    {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-167359157-1"></script>
      <script dangerouslySetInnerHTML={{ 
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date());

          gtag('config', ${gtag.GA_TRACKING_ID});
        `
        }}>
        
    </script>
    </Head>
    <UserContext.Provider value={{ user, setUser }}>
      <StoreContext.Provider value={{ storeName, setStoreName }}>
        <ProductsContext.Provider value={{ products, setProducts }}>
          <CartContext.Provider value={{ cart, setCart }}>
            <Component {...pageProps} />
          </CartContext.Provider>
        </ProductsContext.Provider>
      </StoreContext.Provider>
    </UserContext.Provider>
    </>
  );
}
