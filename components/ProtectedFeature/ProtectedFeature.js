import { useState, useEffect, useContext } from 'react';
import Loading from '../Loading/Loading';
import { UserContext, StoreContext } from '../../contexts/UserContext';

const ProtectedRoute = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isOwner, setIsOwner] = useState(false);
  const { user } = useContext(UserContext);
  const { storeName } = useContext(StoreContext);

  useEffect(() => {

    /**
     * TO DO:
     * 
     * Aqui precisamos checar se a loja que está no context, ou seja,
     * que está sendo visitada pertence ao usuário que está logado para
     * então permitir que os children sejam renderizados.
     */
    
  }, [user, storeName]);

  return isLoading ? <Loading /> : isOwner ? <>{children}</> : <></>;
};

export default ProtectedRoute;
