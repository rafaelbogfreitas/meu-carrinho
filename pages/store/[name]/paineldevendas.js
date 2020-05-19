import { useState, useEffect } from 'react';

import Link from 'next/link';
import Head from 'next/head';

import Orders from '../../../components/Orders/Orders';
import ProtectedRoute from '../../../components/ProtectedRoute/ProtectedRoute';
import Chart from '../../../components/Chart/Chart';

import { getStore } from '../../../services/storeService';
import ordersMock from '../../../utils/ordersMock';

export default function paineldevendas({ store }) {
  let { name, _id } = store[0];
  let ordersDB = store[0].orders;

  let [orders, setOrders] = useState(ordersDB);
  const [ordersChart, setOrdersChart] = useState(ordersMock);
  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);
  const [showClear, setShowClear] = useState(false);

  useEffect(() => {
    if (start && end) {
      setShowClear(true);
      const startTime = new Date(start).getTime();
      const endTime = new Date(end).getTime();

      const updatedOrdersChart = ordersMock.filter((order) => {
        const orderTime = new Date(order.updatedAt).getTime();
        return orderTime > startTime && orderTime < endTime;
      });

      setOrdersChart(updatedOrdersChart);
      return;
    }

    setOrdersChart(ordersMock);
  }, [start, end]);

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
      <input
        type="date"
        name="start"
        id="start"
        value={start || ''}
        onChange={(event) => setStart(event.target.value)}
      />
      <label htmlFor="end">End</label>
      <input
        type="date"
        name="end"
        id="end"
        value={end || ''}
        onChange={(event) => setEnd(event.target.value)}
      />
      {showClear && (
        <button
          onClick={() => {
            setShowClear(false);
            setStart(null);
            setEnd(null);
          }}
        >
          Clear
        </button>
      )}
      <Chart orders={ordersChart} />

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
