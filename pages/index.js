import { useRouter } from 'next/router';

import Head from 'next/head'
import Login from '../components/Login/Login'
import Signup from '../components/Signup/Signup'

export default function Home() {
  return (
    <>
      {/* Navbar placeholder */}

      <Login/>
      <Signup/>
      
    </>
  )
}
