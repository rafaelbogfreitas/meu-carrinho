import { useContext } from 'react'

import Link from 'next/link';
import Head from 'next/head';

import { handleLogout } from '../services/helpers';
import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute'

export default function about() {

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
