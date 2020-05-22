import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { login } from '../../services/authService';
import Input from '../Input/Input';

const Login = ({ flip, setFlip, loading, setLoading }) => {
  let router = useRouter();

  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(!loading)
    login(email, password) // <== adicionei then e catch aqui por ser uma função async
      .then(() => {
        router.push('/minhaslojas')
        setLoading(false)
      })
      .catch((error) => {
        console.log(error);
        setLoading(false)
      });

    setEmail('');
    setPassword('');
  };

  return (

      <form onSubmit={(e) => handleLogin(e)}>
        <h1>Entrar</h1>
        <input
          onChange={(e) => handleEmailChange(e)}
          name="name"
          type="text"
          className="text"
          id="login-name"
          placeholder="email"
          value={email}
        />
        <input
          onChange={(e) => handlePasswordChange(e)}
          name="password"
          type="password"
          className="text"
          id="login-password"
          value={password}
          placeholder="senha"
        />
        <button className="btn--login">Entrar</button>
        <button id="btn--goToRegister" onClick={() => setFlip(!flip)}> Ir para o registro</button>
        <a href="https://meu-carrinho.herokuapp.com/api/v1/auth/google">
          Entrar com o Google
        </a>
      </form>

  );
};

export default Login;
