import React, { useContext } from 'react'

import Router from 'next/router'
import Link from 'next/link'
import Head from 'next/head'
import { UserContext } from '../contexts/UserContext'
import { handleLogout } from '../services/helpers'

import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute'

export default function minhaslojas() {
  
  const { user } = useContext(UserContext)

  return (
    <ProtectedRoute>
      <Head>
        <title>{user && user.name} | Minhas Lojas</title>
      </Head>
      <div>
        <h1 className="title">Minhas lojas: {user && user.name}</h1>
        <div className="container container--minhaslojas">
          <div className="plus-box">
            <Link href="createStore">
              <a className="plus">+</a>
            </Link>
          </div>
          {user && user.stores.map((store, idx) => {
            return (
              <Link key={idx} href="/store/[name]/dashboard" as={`/store/${store.name}/dashboard`}>
                <a>
                  <div>
                    <img src={store.imageUrl} alt={store.name}></img>
                    <h1>{store.name}</h1>
                  </div>
                </a>
              </Link>
            )
          })}
        </div>
        <div onClick={() => handleLogout()}>Logout</div>
      </div>
    </ProtectedRoute>
  )
}
