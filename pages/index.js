import { useState } from 'react';
import { useRouter } from 'next/router';

import Head from 'next/head'
import Login from '../components/Login/Login'
import Signup from '../components/Signup/Signup'

import { login, signup } from '../services/AuthService';

export default function Home() {
  let router = useRouter();

  // console.log(router)

  let [ name, setName ] = useState('');
  let [ email, setEmail ] = useState('');
  let [ password, setPassword ] = useState('');

  const handleNameChange = e => setName(e.target.value)
  const handleEmailChange = e => setEmail(e.target.value)
  const handlePasswordChange = e => setPassword(e.target.value)

  const handleLogin = e => {
    e.preventDefault();
    login(email, password);
    router.push('/about')
  }

  const handleSignup = e => {
    e.preventDefault();
    signup(name, email, password);
  }

  return (
    <>
      {/* Navbar placeholder */}

      {/* Login (to become a separate Component in future) */}
      <form onSubmit={(e) => handleLogin(e)}>
        <h1>Login</h1>
        <input onChange={e => handleEmailChange(e)} name="name" type="text" className="text"/>
        <input onChange={e => handlePasswordChange(e)} name="password" type="text" className="text"/>
        <button>Login</button>
      </form>
      
      {/* Signup (to become a separate Component in future) */}
      <form onSubmit={(e) => handleSignup(e)}>
        <h1>Signup</h1>
        <input onChange={e => handleNameChange(e)} name="name" type="text" className="text"/>
        <input onChange={e => handleEmailChange(e)} name="email" type="text" className="text"/>
        <input onChange={e => handlePasswordChange(e)} name="password" type="text" className="text"/>
        <button>Signup</button>
      </form>
      
    </>
  )
}
