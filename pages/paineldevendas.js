import Orders from '../components/Orders/Orders'

import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
// TODO ACESSAR API PARA RECEBER ORDERS

let orders = [
  {
    products: [
      {
        name: "Produto 1",
        quantity: 5,
      },
      {
        name: "Produto 2",
        quantity: 10,
      },
    ],
    total: 100,
    status: "pending",
    id: 312312412
  },
  {
    products: [
      {
        name: "Produto 5",
        quantity: 5,
      },
      {
        name: "Produto 6",
        quantity: 10,
      },
      {
        name: "Produto 7",
        quantity: 10,
      },
    ],
    total: 150,
    status: "pending",
    id: 54354353543
  },
  {
    products: [
      {
        name: "Produto 3",
        quantity: 5,
      },
      {
        name: "Produto 4",
        quantity: 10,
      },
    ],
    total: 50,
    status: "done",
    id: 87898789789
  },
];

let pendingOrders = orders.filter((order) => order.status === "pending")
let doneOrders = orders.filter((order) => order.status === "done")

export default function paineldevendas() {

  return ( 
    <ProtectedRoute>
      <div>
        <div>
          <h1>Pending orders</h1>
          {orders
            .filter((order) => order.status === "pending")
            .map((orderz, idx) => {
              return  <Orders key={idx} order={orderz}></Orders>
            })}
        </div>
        <div>
        <h1>Finished orders</h1>
          {orders
            .filter((order) => order.status === "done")
            .map((orderz, idx) => {
              return  <Orders key={idx} order={orderz}></Orders>
            })}
        </div>
      </div>
    </ProtectedRoute>
  );
}
