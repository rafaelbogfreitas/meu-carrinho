import React, { useState } from 'react'
import { useRouter } from 'next/router'
import loginStyles from './login.module.scss';
import { login } from '../../services/AuthService';

const Login = () => {

  let router = useRouter();

  let [ email, setEmail ] = useState('');
  let [ password, setPassword ] = useState('');

  const handleEmailChange = e => setEmail(e.target.value)
  const handlePasswordChange = e => setPassword(e.target.value)

  const handleLogin = e => {
    e.preventDefault();
    login(email, password);
    router.push('/about')
  }

  return (
    <div className={loginStyles.login}>
      <form onSubmit={(e) => handleLogin(e)}>
        <h1>Login</h1>
        <input onChange={e => handleEmailChange(e)} name="name" type="text" className="text"/>
        <input onChange={e => handlePasswordChange(e)} name="password" type="text" className="text"/>
        <button>Login</button>
      </form>
    </div>
  )
}

export default Login;
