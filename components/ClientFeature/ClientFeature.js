import { useState, useEffect, useContext } from 'react';
import Loading from '../Loading/Loading';
import { StoreContext } from '../../contexts/UserContext';
import { getStore } from '../../services/storeService';
import { loggedin } from '../../services/authService';

const ClientFeature = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isOwner, setIsOwner] = useState(false);
  const { storeName } = useContext(StoreContext);

  useEffect(() => {
    loggedin()
      .then(({ stores }) => {
        getStore(storeName)
          .then(([currentStore]) => {
            const boolean = stores.some((store) => store._id === currentStore._id);
            if (boolean) setIsOwner(true);
            setIsLoading(false);
          })
          .catch(() => setIsLoading(false));
      })
      .catch(() => setIsLoading(false));
  }, [storeName]);

  return isLoading ? <></> : isOwner ? <></> : <>{children}</>;
};

export default ClientFeature;
