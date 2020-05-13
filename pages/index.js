import {useState} from 'react';

import Head from 'next/head'
import Login from '../components/Login/Login'
import Signup from '../components/Signup/Signup'

import { login, signup } from '../services/AuthService';

export default function Home() {
  let [ email, setEmail ] = useState('');
  let [ password, setPassword ] = useState('');

  const handleNameChange = e => setEmail(e.target.value)
  const handlePasswordChange = e => setPassword(e.target.value)

  const handleLogin = e => {
    e.preventDefault();
    login(email, password);
  }

  return (
    <>
      //Navbar placeholder
      <form onSubmit={(e) => handleLogin(e)}>
        <input onChange={e => handleNameChange(e)} name="name" type="text" className="text"/>
        <input onChange={e => handlePasswordChange(e)} name="password" type="text" className="text"/>
        <button>Login</button>
      </form>
      
    </>
  )
}
