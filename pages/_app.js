import { useState } from 'react';
import '../styles/index.scss';
import {
  UserContext,
  ProductsContext,
  CartContext,
  StoreContext,
} from '../contexts/UserContext';

export default function App({ Component, pageProps }) {
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState(null);
  const [storeName, setStoreName] = useState('');
  const [cart, setCart] = useState([]);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <StoreContext.Provider value={{ storeName, setStoreName }}>
        <ProductsContext.Provider value={{ products, setProducts }}>
          <CartContext.Provider value={{ cart, setCart }}>
            <Component {...pageProps} />
          </CartContext.Provider>
        </ProductsContext.Provider>
      </StoreContext.Provider>
    </UserContext.Provider>
  );
}
