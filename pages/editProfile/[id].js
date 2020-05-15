import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { getUser, editUser } from '../../services/userService';
import {
  handleInputChange,
  handleFileChange,
  processFormData,
} from '../../services/helpers';

import ProtectedRoute from '../../components/ProtectedRoute/ProtectedRoute';

const Id = ({ user }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [image, setImage] = useState(false);

  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();

    const { _id } = user;
    const data = { name, email, image };

    editUser(_id, processFormData(data))
      .then((response) => {
        console.log(response);
        router.push('/minhaslojas');
      })
      .catch(({ response }) => {
        console.log(response);
      });
  };

  return (
    <ProtectedRoute>
      <>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Seu nome:</label>
          <input
            type="text"
            placeholder="Minha loja"
            name="name"
            value={name}
            onChange={(event) => handleInputChange(event, setName)}
          />
          <label htmlFor="phone">Email:</label>
          <input
            type="email"
            placeholder="seuemail@gmail.com"
            name="email"
            value={email}
            onChange={(event) => handleInputChange(event, setEmail)}
          />
          <label htmlFor="image">Sua foto:</label>
          <input
            type="file"
            name="image"
            onChange={(event) => handleFileChange(event, setImage)}
          />
          <button type="submit">Salvar</button>
        </form>
      </>
    </ProtectedRoute>
  );
};

Id.getInitialProps = async ({ query: { id }}) => {
  return { user } = await getUser(id);
};

export default Id;
