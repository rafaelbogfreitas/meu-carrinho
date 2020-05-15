import React from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { getStore } from '../../services/storeServices';

export default function Store({store}) {
  return (
    <div>
      <h1 style={{ backgroundColor: `${store.theme.secondaryColor}` }}>
        Welcome to {store.name} store!!
      </h1>
      <div className="products">
        {store.products.map((product) => {
          return (
            <Link
              href={'/product/[id]'}
              as={`/product/${product._id}`}
              key={product._id}
            >
              <a key={product._id}>{product.name}</a>
            </Link>
          );
        })}
        <Link
          href={'/store/paineldevendas/[name]'}
          as={`/store/paineldevendas/${store.name}`}
        >
          <a>Painel de vendas</a>
        </Link>
        <Link href={'/editStore/[name]'} as={`/editStore/${store.name}`}>
          <a>Editar</a>
        </Link>
      </div>
    </div>
  );
}

Store.getInitialProps = async (context) => {
  const { name } = context.query;
  const [store] = await getStore(name);
  return {
    store,
  }
};
