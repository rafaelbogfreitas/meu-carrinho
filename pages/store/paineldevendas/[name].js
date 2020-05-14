
import fetch from 'isomorphic-unfetch'
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
      <Link href="/store/[name]" as={`/store/${name}`}>
        <button>Voltar</button>
      </Link>
    </ProtectedRoute>
  );
}

paineldevendas.getInitialProps = async (ctx) => {
  let { name } = ctx.query;
  const store = await fetch(`http://localhost:5000/api/v1/store/${name}`)
  const data = await store.json();
  return {
    store: data
  }
}