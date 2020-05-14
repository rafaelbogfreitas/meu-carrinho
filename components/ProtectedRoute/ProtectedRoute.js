import Router from 'next/router';
import { useState, useEffect } from 'react';
import { loggedin } from '../../services/authService';
import Loading from '../Loading/Loading';

const ProtectedRoute = ({ children }) => {
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

  return isLoading ? <Loading /> : <>{children}</>;
};

export default ProtectedRoute;
