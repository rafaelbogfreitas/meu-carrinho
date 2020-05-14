import { useContext } from 'react'
import Link from 'next/link';
import Router from 'next/router';
import { logout } from '../services/authService';
import Head from 'next/head';
import ProtectedRoute, { ProtectedContext } from '../components/ProtectedRoute/ProtectedRoute';

export default function about() {
  let { user } = useContext(ProtectedContext);
  const handleLogout = () => {
    logout() // <== adicionei then e catch aqui por ser uma função async
      .then(() => Router.replace('/'))
      .catch((error) => console.log(error));
  };

  return (
    <ProtectedRoute>
      <div>
        <Head>
          <title>My page title</title>
          <h1>{user}</h1>
          <meta property="og:title" content="My page title" key="title" />
        </Head>
        <div>
          <h1>Hello world{user}</h1>
          <Link href="/">
            <a>Go Back</a>
          </Link>
          <div onClick={() => handleLogout()}>Logout</div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
