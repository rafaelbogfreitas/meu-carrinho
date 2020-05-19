import { useState, useEffect } from 'react';

import Link from 'next/link';
import Head from 'next/head';

import Orders from '../../../components/Orders/Orders';
import ProtectedRoute from '../../../components/ProtectedRoute/ProtectedRoute';
import Chart from '../../../components/Chart/Chart';

import { getStore } from '../../../services/storeService';
import ordersMock from '../../../utils/ordersMock';

export default function paineldevendas({ store }) {
  const { name, _id } = store[0];
  const ordersDB = store[0].orders;

  const [orders, setOrders] = useState(ordersDB);

  return (
    <ProtectedRoute>
      <Head>
        <title>Painel de vendas</title>
      </Head>
      <div>
        <div>
          <h1>Pending orders</h1>
          {orders.length > 0 ? (
            orders
              .filter((order) => order.status === 'pending')
              .map((orderz, idx) => (
                <Orders
                  key={idx}
                  order={orderz}
                  storeId={_id}
                  storeName={name}
                  setOrders={setOrders}
                />
              ))
          ) : (
            <div>You have no pending orders</div>
          )}
        </div>
        <div>
          <h1>Finished orders</h1>
          {orders.length > 0 ? (
            orders
              .filter((order) => order.status === 'done')
              .map((orderz, idx) => (
                <Orders
                  key={idx}
                  order={orderz}
                  storeId={_id}
                  storeName={name}
                  setOrders={setOrders}
                />
              ))
          ) : (
            <div>You have no finished orders</div>
          )}
        </div>
      </div>

      <label htmlFor="start">Start</label>

      <Chart orders={orders} />

      <Link href="/store/[name]/dashboard" as={`/store/${name}/dashboard`}>
        <button>Voltar</button>
      </Link>
    </ProtectedRoute>
  );
}

paineldevendas.getInitialProps = async ({ query: { name } }) => {
  const store = await getStore(name);
  return { store };
};
