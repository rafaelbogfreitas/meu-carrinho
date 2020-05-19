import { useState } from 'react';

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

  const formatData = () => {
    const chart = {
      dates: [],
      totals: [],
    };

    orders.forEach((order) => {
      const [year, month, day] = order.updatedAt.split('-');
      const date = `${day.slice(0, 2)}/${month}/${year}`;
      
      if (!chart.dates.includes(date)) {
        chart.dates.push(date);
        chart.totals.push(order.total);
      } else {
        chart.totals[chart.totals.length - 1] += order.total;
      }
    });

    return chart;
  };

  const [dates, setDates] = useState(formatData().dates);
  const [totals, setTotals] = useState(formatData().totals);

  const [chartData, setChartData] = useState({
    labels: dates,
    datasets: [
      {
        label: 'Valor',
        data: totals,
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
          'rgba(255, 99, 132, 0.6)',
        ],
      },
    ],
  });

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

      
      <Chart data={chartData} />

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
