import { getStore } from '../../../services/storeService';
import Link from 'next/link'

import Orders from '../../../components/Orders/Orders'
import ProtectedRoute from "../../../components/ProtectedRoute/ProtectedRoute";

export default function paineldevendas({ store }) {
  let { orders, name } = store[0];
  console.log(store)
  return ( 
    <ProtectedRoute>
      <div>
        <div>
          <h1>Pending orders</h1>
          {orders.length > 0 ?
            orders
            .filter((order) => order.status === "pending")
            .map((orderz, idx) => {
              return  <Orders key={idx} order={orderz}></Orders>
            }):
            <div>You have no pending orders</div>
            }
        </div>
        <div>
        <h1>Finished orders</h1>
          {orders.length > 0 ?
            orders
            .filter((order) => order.status === "done")
            .map((orderz, idx) => {
              return  <Orders key={idx} order={orderz}></Orders>
            }) :
            <div>You have no finished orders</div>
            }
        </div>
      </div>
      <Link href="/store/[name]/dashboard" as={`/store/${name}/dashboard`}>
        <button>Voltar</button>
      </Link>
    </ProtectedRoute>
  );
}

paineldevendas.getInitialProps = async ({ query: { name } }) => {
  const store = await getStore(name);
  return { store };
}