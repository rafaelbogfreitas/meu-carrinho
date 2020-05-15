import React from 'react';
import Link from 'next/link';
import { getStore } from '../../services/storeServices';

export default function Store(props) {
  return (
    <div>
      <h1 style={{ backgroundColor: `${props.theme.secondaryColor}` }}>
        Welcome to {props.name} store!!
      </h1>
      <div className="products">
        {props.products.map((product) => {
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
          as={`/store/paineldevendas/${props.name}`}
        >
          <a>Painel de vendas</a>
        </Link>
        <Link href={'/editStore/[name]'} as={`/editStore/${props.name}`}>
          <a>Editar</a>
        </Link>
      </div>
    </div>
  );
}

Store.getInitialProps = async (context) => {
  const { name } = context.query;
  const [store] = await getStore(name);
  return store;
};
