import React from 'react'
import Link from 'next/link'

// TODO: TRAZER AS LOJAS DA API

let stores = [{
  src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSnHs-oEIScULf8g6ehnRgT64UY269hG4lnb7a0xuNPDqfEy4sz&usqp=CAU',
  name: 'loja 1',
  url: 'url loja 1'
},
{
  src: 'https://pegaki.com.br/wp-content/uploads/2019/05/Loja.png',
  name: 'loja 2',
  url: 'url loja 2'
}]

export default function minhaslojas() {
  return (
    <div>
      <h1>Lojas do Usuário</h1>
      {stores.map(store => {
        return (
          <Link href="/"><a>
            <div>
              <h1>{store.name}</h1>
              <img src={store.src} alt={store.name}></img>
            </div>
          </a></Link>
        )
      })}
    </div>
  )
}