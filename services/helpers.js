import { logout } from './authService';
import Router from 'next/router';

export const handleLogout = () => {
  logout() // <== adicionei then e catch aqui por ser uma função async
    .then(() => Router.replace('/'))
    .catch((error) => console.log(error));
};


//Form helpers
export const handleInputChange = (e, handler) => handler(e.target.value);
export const handleFileChange = (e, handler) => handler(e.target.value[0]);