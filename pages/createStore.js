import { useState, useEffect } from 'react';
import Router, { useRouter } from 'next/router';
import { createStore } from '../services/storeServices';
import { loggedin } from '../services/authService';
import Link from 'next/link';
import {
  handleInputChange,
  handleFileChange,
  processFormData,
} from '../../services/helpers';

const CreateStore = () => {
  const router = useRouter();

  const [name, setName] = useState('');
  const [about, setAbout] = useState('');
  const [primaryColor, setPrimaryColor] = useState('#00ff00');
  const [secondaryColor, setSecondaryColor] = useState('#0000ff');
  const [phone, setPhone] = useState('');
  const [image, setImage] = useState('');

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

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = { name, about, primaryColor, secondaryColor, phone, image };

    createStore(processFormData(data))
      .then(() => router.push('/minhaslojas'))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nome da loja:</label>
        <input
          type="text"
          placeholder="Minha loja"
          name="name"
          value={name}
          onChange={(event) => handleInputChange(event, setName)}
        />
        <label htmlFor="about">Sobre sua loja:</label>
        <textarea
          type="text"
          placeholder="Uma loja sobre..."
          name="about"
          value={about}
          onChange={(event) => handleInputChange(event, setAbout)}
        />
        <label htmlFor="primaryColor">Cor primária:</label>
        <input
          type="color"
          name="primaryColor"
          value={primaryColor}
          onChange={(event) => handleInputChange(event, setPrimaryColor)}
        />
        <label htmlFor="secondaryColor">Cor secundária:</label>
        <input
          type="color"
          name="secondaryColor"
          value={secondaryColor}
          onChange={(event) => handleInputChange(event, setSecondaryColor)}
        />
        <label htmlFor="phone">Telefone</label>
        <input
          type="text"
          placeholder="(xx) xxxxx-xxxx"
          name="phone"
          value={phone}
          onChange={(event) => handleInputChange(event, setPhone)}
        />
        <label htmlFor="image">Sua logo:</label>
        <input
          type="file"
          name="image"
          onChange={(event) => handleFileChange(event, setImage)}
        />
        <button type="submit">Criar Loja</button>
      </form>
      <Link href="minhaslojas">
        <a>Ir para minhas lojas</a>
      </Link>
    </>
  );
};

export default CreateStore;
