import Head from 'next/head'
import Login from '../components/Login/Login'
import Signup from '../components/Signup/Signup'

export default function Home() {

  return (
    <>
    <Head>
      <title>Minha Loja</title>
    </Head>
      {/* Navbar placeholder */}

      <Login/>
      <Signup/>
      
    </>
  )
}
