import Head from 'next/head'
import Login from '../components/Login/Login'
import Signup from '../components/Signup/Signup'

import { renderMetatags } from '../services/helpers'

export default function Home() {

  return (
    <>
    <Head>
      {renderMetatags(
        'Minha Loja',
        'Crie sua loja e administre suas vendas',
        'http://localhost:3000',
        'http://nossologo.svg',
      )}
    </Head>
      {/* Navbar placeholder */}

      <Login/>
      <Signup/>
      
    </>
  )
}
