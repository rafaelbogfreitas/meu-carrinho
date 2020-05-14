import { useState, useEffect } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { loggedin, logout } from '../services/authService';
import Head from 'next/head';

export default function about({user}) {

  /**
   * Esse trecho estou usando o hook useEffect para
   * checar se o usuário está logado pelo front end,
   * faço uma condição de loading para que a checagem
   * seja feita antes de renderizar o conteúdo de fato,
   * essa não deve ser a forma mais usual do next, mas
   * está funcionando com Head e tudo mais.
   */

  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoggedIn === null) {
      loggedin()
        .then((user) => {
          setIsLoggedIn(true);
          setIsLoading(false);
        })
        .catch((error) => {
          Router.replace('/');
        });
    }
  }, [isLoggedIn, isLoading]);

  const handleLogout = ( ) => {
    logout() // <== adicionei then e catch aqui por ser uma função async
      .then(() => Router.replace('/'))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <Head>
        <title>My page title</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <div>
          <h1>Hello world</h1>
          <Link href="/">
            <a>Go Back</a>
          </Link>
          <div onClick={() => handleLogout()}>Logout</div>
        </div>
      )}
    </div>
  );
}


