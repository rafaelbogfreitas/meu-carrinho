import { useState } from 'react';
import '../styles/index.scss';
import { UserContext } from '../contexts/UserContext';

export default function App({ Component, pageProps }) {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Component {...pageProps} />
    </UserContext.Provider>
  );
}
