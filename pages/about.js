import Link from 'next/link';
import Router from 'next/router';
import { logout } from '../services/authService';
import Head from 'next/head';
import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute';

export default function about({ user }) {
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
          <meta property="og:title" content="My page title" key="title" />
        </Head>
        <div>
          <h1>Hello world</h1>
          <Link href="/">
            <a>Go Back</a>
          </Link>
          <div onClick={() => handleLogout()}>Logout</div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
