import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { signup } from '../../services/authService';
import signupStyles from './signup.module.scss';

const Signup = () => {
  let router = useRouter();

  let [name, setName] = useState('');
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSignup = (e) => {
    e.preventDefault();

    setName('');
    setEmail('');
    setPassword('');

    signup(name, email, password) // <== adicionei then e catch aqui por ser uma função async
      .then(() => router.push('/createStore'))
      .catch((error) => {
        console.log(error)
      });
  };

  return (
    <div className={signupStyles.login}>
      <form onSubmit={(e) => handleSignup(e)}>
        <h1>Signup</h1>
        <input
          onChange={(e) => handleNameChange(e)}
          name="name"
          type="text"
          className="text"
          id="signup-name"
          value={name}
        />
        <input
          onChange={(e) => handleEmailChange(e)}
          name="email"
          type="text"
          className="text"
          id="signup-email"
          value={email}
        />
        <input
          onChange={(e) => handlePasswordChange(e)}
          name="password"
          type="password"
          className="text"
          id="signup-password"
          value={password}
        />
        <button id="signup-button">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
