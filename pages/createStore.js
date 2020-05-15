import { useState, useEffect } from 'react';
import Router, { useRouter } from 'next/router';
import { createStore } from '../services/storeServices';
import { loggedin } from '../services/authService';
import axios from 'axios';

const CreateStore = () => {
  const router = useRouter();

  const [name, setName] = useState('');
  const [about, setAbout] = useState('');
  const [primaryColor, setPrimaryColor] = useState('#00ff00');
  const [secondaryColor, setSecondaryColor] = useState('#0000ff');
  const [phone, setPhone] = useState('');
  const [image, setImage] = useState('');

  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoggedIn === null) {
      loggedin()
        .then((user) => {
          console.log('>>> User: ', user);
          setIsLoggedIn(true);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log('>>> Error: ', error);
          Router.replace('/');
        });
    }
  }, [isLoggedIn, isLoading]);

  const handleInputName = (event) => {
    setName(event.target.value);
  };

  const handleInputAbout = (event) => {
    setAbout(event.target.value);
  };

  const handleInputPrimaryColor = (event) => {
    setPrimaryColor(event.target.value);
  };

  const handleInputSecondaryColor = (event) => {
    setSecondaryColor(event.target.value);
  };

  const handleInputNumber = (event) => {
    setPhone(event.target.value);
  };

  const handleInputFile = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let uploadData = new FormData();
    const body = { name, about, primaryColor, secondaryColor, phone, image };

    for(let item in body ){
      uploadData.set(item, body[item]);
    }

      // axios({
      //   method:'post',
      //   url:'http://localhost:5000/api/v1/store/new',
      //   data: uploadData,
      //   headers:{
      //     'Content-Type':'multipart/form-data'
      //   },
      //   withCredentials:true,
      // })
      createStore(uploadData)
      .then(() => {
        router.push('/minhaslojas');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return isLoading ? (
    <h2>loading...</h2>
  ) : (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nome da loja:</label>
        <input
          type="text"
          placeholder="Minha loja"
          name="name"
          value={name}
          onChange={handleInputName}
        />
        <label htmlFor="about">Sobre sua loja:</label>
        <textarea
          type="text"
          placeholder="Uma loja sobre..."
          name="about"
          value={about}
          onChange={handleInputAbout}
        />
        <label htmlFor="primaryColor">Cor primária:</label>
        <input
          type="color"
          name="primaryColor"
          value={primaryColor}
          onChange={handleInputPrimaryColor}
        />
        <label htmlFor="secondaryColor">Cor secundária:</label>
        <input
          type="color"
          name="secondaryColor"
          value={secondaryColor}
          onChange={handleInputSecondaryColor}
        />
        <label htmlFor="phone">Telefone</label>
        <input
          type="text"
          placeholder="(xx) xxxxx-xxxx"
          name="phone"
          value={phone}
          onChange={handleInputNumber}
        />
        <label htmlFor="image">Sua logo:</label>
        <input type="file" name="image" onChange={handleInputFile} />
        <button type="submit">Criar Loja</button>
      </form>
    </>
  );
};

export default CreateStore;
