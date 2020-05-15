import React, { useContext } from 'react'

import Router from 'next/router'
import Link from 'next/link'
import { UserContext } from '../contexts/UserContext'
import { handleLogout } from '../services/helpers'

import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute'

export default function minhaslojas() {
  
  const { user } = useContext(UserContext)

  return (
    <ProtectedRoute>
      <div>
        <h1>Lojas do Usuário: {user && user.name}</h1>
        <Link href="createStore"><a>Criar Nova Loja</a></Link>
        {user && user.stores.map((store, idx) => {
          return (
            <Link key={idx} href="/store/[name]/dashboard" as={`/store/${store.name}/dashboard`}>
              <a>
                <div>
                  <h1>{store.name}</h1>
                  <img src={store.imageUrl} alt={store.name}></img>
                </div>
              </a>
            </Link>
          )
        })}
        <div onClick={() => handleLogout()}>Logout</div>
      </div>
    </ProtectedRoute>
  )
}