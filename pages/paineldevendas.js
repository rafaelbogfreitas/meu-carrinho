import React, { useState, useEffect } from "react";
import Router from 'next/router'
import Orders from '../components/Orders/Orders'
import Loading from '../components/Loading/Loading'
import { loggedin } from '../services/authService'
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
// console.log(pendingOrders)
// console.log(doneOrders)


export default function paineldevendas() {

  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoggedIn === null) {
      loggedin()
        .then((user) => {
          setIsLoggedIn(true);
          setIsLoading(false);
        })
        .catch((error) => {
          Router.replace('/');
        });
    }
  }, [isLoggedIn, isLoading]);

  return ( isLoading ?
    <Loading/> :
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
  );
}
