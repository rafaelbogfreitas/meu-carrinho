import { logout } from './authService';
import Router from 'next/router';

export const handleLogout = () => {
  logout() // <== adicionei then e catch aqui por ser uma função async
    .then(() => Router.replace('/'))
    .catch((error) => console.log(error));
};


//Form helpers
export const handleInputChange = (e, handler) => handler(e.target.value);
export const handleFileChange = (e, handler) => handler(e.target.files[0]);

  //process formData
  export const processFormData = (obj) => {
    const uploadData = new FormData();

    for(let item in obj ){
      uploadData.set(item, obj[item]);
    }

    return uploadData;
  }