import React, { useState } from 'react';
import { useRouter } from 'next/router';
import loginStyles from './login.module.scss';
import { login } from '../../services/authService';
import Input from '../Input/Input';

const Login = () => {
  let router = useRouter();

  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleLogin = (e) => {
    e.preventDefault();

    login(email, password) // <== adicionei then e catch aqui por ser uma função async
      .then(() => router.push('/minhaslojas'))
      .catch((error) => {
        console.log(error);
      });

    setEmail('');
    setPassword('');
  };

  return (
    <div className={loginStyles.login}>
      <form onSubmit={(e) => handleLogin(e)}>
        <h1>Login</h1>
        {/* <Input
          type="email"
          name="login-email"
          placeholder="email@email.com"
          state={email}
          setState={setEmail}
        />
        <Input
          type="password"
          name="login-password"
          placeholder="Pelo menos 6 dígitos"
          state={password}
          setState={setPassword}
        /> */}
        <input
          onChange={(e) => handleEmailChange(e)}
          name="name"
          type="text"
          className="text"
          id="login-name"
          value={email}
        />
        <input
          onChange={(e) => handlePasswordChange(e)}
          name="password"
          type="password"
          className="text"
          id="login-password"
          value={password}
        />
        <button id="login-button">Login</button>
      </form>
    </div>
  );
};

export default Login;
