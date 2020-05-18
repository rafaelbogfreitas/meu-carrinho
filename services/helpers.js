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


//generate metatags 
export const renderMetatags = (title, description, url, imageUrl) => {
  return (
    <meta name="title" content={title}/>
    <meta name="description" content={description}/>


    <meta property="og:type" content="website"/>
    <meta property="og:url" content={url}/>
    <meta property="og:title" content={title}/>
    <meta property="og:description" content={description}/>
    <meta property="og:image" content={imageUrl}/>


    <meta property="twitter:card" content="summary_large_image"/>
    <meta property="twitter:url" content={url}/>
    <meta property="twitter:title" content={title}/>
    <meta property="twitter:description" content={description}/>
    <meta property="twitter:image" content={imageUrl}/>
  )
}