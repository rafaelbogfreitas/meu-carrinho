import React, { useEffect, useContext } from 'react';
import { StoreContext } from '../../../../contexts/UserContext';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import { getProduct, deleteProduct } from '../../../../services/productService';
import { getStore } from '../../../../services/storeService';
const SingleProduct = ({ product, name }) => {
  const router = useRouter();
  const { storeName } = useContext(StoreContext);
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

  const handleDelete = async () => {
    try {
      const [store] = await getStore(name);
      const response = await deleteProduct(store._id, product._id);
      console.log(response);
      router.push(`/store/${storeName}/dashboard`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Head>
        <title>{product.name}</title>
      </Head>
      <div>{product.name}</div>
      <img src={product.imageUrl} alt={product.description}/>
      <p>{product.price},00 R$</p>
      <Link 
        href="/store/[name]/product/edit/[id]"
        as={`/store/${name}/product/edit/${product._id}`}
      >
        <button>EDIT</button>
      </Link>
      <button onClick={handleDelete}>DELETE</button>
    </>
  )
};

SingleProduct.getInitialProps = async ({query}) => {
  let { id } = query;
  let { name } = query;
  let {product} = await getProduct(id);

  return {
      product,
      name
  }
};


export default SingleProduct;
