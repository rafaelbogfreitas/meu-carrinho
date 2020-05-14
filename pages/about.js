import { useState, useEffect } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { loggedin, logout } from '../services/authService';
import Head from 'next/head';

<<<<<<< HEAD
// import fetch from 'isomorphic-unfetch'
import axios from 'axios'
=======
import fetch from 'isomorphic-fetch';
>>>>>>> b4aca053bc360df9fb5adcb4afc9c3d2b41f9887

export default function about() {

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
          console.log(`>>> User: ${user}`);
          setIsLoggedIn(true);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(`>>> Error: ${error}`);
          Router.replace('/');
        });
    }
  }, [isLoggedIn, isLoading]);

  const handleLogout = () => {
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


/**
 * Deixei comentado esse trecho abaixo feito pelo Rafa, provavelmente essa seria
 * a forma ideal de checar login e tudo mais ao invés de usar o useEffect no frontend,
 * porém estávamos enfrentando problemas com a chamada quando feita pelo backend.
 */

// about.getInitialProps = async (ctx) => {
//   // const response = await fetch('http://localhost:5000/api/v1/auth/loggedin')
//   // console.log(reponse)
//   const response = await loggedin();

//   // console.log('>>> response: ', response)

//   if (response.status === 401 && !ctx.req) {
//     console.log('\n\n>>> primeiro if')
//     Router.replace('/');
//     return {};
//   }

//   if (response.status === 401 && ctx.req) {
//     console.log('\n\n>>> segundo if')
//     ctx.res.writeHead(302, {
//       Location: 'http://localhost:3000',
//     });
//     ctx.res.end();
//     return;
//   }

//   return {
//     user: response,
//   };
// };
