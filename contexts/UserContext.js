import { createContext } from 'react';

export const UserContext = createContext(null);
export const ProductsContext = createContext(null);
export const CartContext = createContext(null);
export const StoreContext = createContext(null);

// import { ProductsContext, CartContext, StoreContext } from '../../../contexts/UserContext';
// import Loading from '../../../components/Loading/Loading';

// const [isLoading, setIsLoading] = useState(true);
//   const { products, setProducts } = useContext(ProductsContext);
//   const { cart, setCart } = useContext(CartContext);
//   const { storeName, setStoreName } = useContext(StoreContext);

//   useEffect(() => {
//     if (products === null || store.name !== storeName) {
//       setStoreName(store.name);
//       setProducts(store.products);
//     }
//     setIsLoading(false);
//     // window.localStorage.setItem('products', JSON.stringify(products))
//   }, [products, cart]);
