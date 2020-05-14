import Router from 'next/router';
import { useState, useEffect, useContext } from 'react';
import { loggedin } from '../../services/authService';
import Loading from '../Loading/Loading';
import { UserContext } from '../../contexts/UserContext';

const ProtectedRoute = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    if (isLoggedIn === null) {
      loggedin()
        .then((user) => {
          setUser(user);
          setIsLoggedIn(true);
          setIsLoading(false);
        })
        .catch(() => {
          Router.replace('/');
        });
    }
  }, [isLoggedIn, isLoading, user]);

  return isLoading ? <Loading /> : <>{children}</>;
};

export default ProtectedRoute;
