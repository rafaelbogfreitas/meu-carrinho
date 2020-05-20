import React, { useState } from 'react';
import { useRouter } from 'next/router';
import loginStyles from './login.module.scss';
import { login } from '../../services/authService';

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
      .catch((error) => console.log(error));
  };

  return (
    <div className={loginStyles.login}>
      <form onSubmit={(e) => handleLogin(e)}>
        <h1>Login</h1>
        <input
          onChange={(e) => handleEmailChange(e)}
          name="name"
          type="text"
          className="text"
          id="login-name"
        />
        <input
          onChange={(e) => handlePasswordChange(e)}
          name="password"
          type="text"
          className="text"
          id="login-password"
        />
        <button id="login-button">Login</button>
      </form>
    </div>
  );
};

export default Login;
