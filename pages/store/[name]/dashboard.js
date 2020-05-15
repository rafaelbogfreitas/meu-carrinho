import React from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { getStore } from '../../../services/storeService';


export default function Store({store}) {
  return (
    <div>
      <h1 style={{ backgroundColor: `${store.theme.secondaryColor}` }}>
        Welcome to {store.name} store!!
      </h1>
      <div className="products">
        {store.products.map((product) => {
          return (
            <aside className="product">

              <Link
                href={'/store/[name]/product/[id]'}
                as={`/store/${store.name}/product/${product._id}`}
                key={product._id}
              >
                <a key={product._id}>{product.name}</a>
              </Link>
              <img src={product.imageUrl} alt={product.name}/>
              <div className="quantity">{product.quantity}</div>
              <div className="price">{product.price},00 R$</div>
            </aside>
          );
        })}
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
        <Link href="/minhaslojas"><a>Ir para minhas lojas</a></Link>
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
