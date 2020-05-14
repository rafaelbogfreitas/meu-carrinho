import { useState } from 'react';
import axios from 'axios';

import ProtectedRoute from '../../components/ProtectedRoute/ProtectedRoute';

const Id = (props) => {
  const [name, setName] = useState(props.name);
  const [email, setEmail] = useState(props.email);
  const [file, setFile] = useState(false);

  const handleInputName = (event) => {
    setName(event.target.value);
  };

  const handleInputEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleInputFile = (e) => {
    const uploadData = new FormData();
    uploadData.append('image', e.target.files[0]);
    setFile(uploadData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const body = { name, email, file };
    // POST goes here
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
              onChange={handleInputName}
            />
            <label htmlFor="phone">Email:</label>
            <input
              type="email"
              placeholder="seuemail@gmail.com"
              name="email"
              value={email}
              onChange={handleInputEmail}
            />
            <label htmlFor="image">Sua foto:</label>
            <input type="file" name="image" onChange={handleInputFile} />
            <button type="submit">Salvar</button>
          </form>
        </>
      </ProtectedRoute>
  );
};

Id.getInitialProps = async (ctx) => {
  const { id } = ctx.query;
  const response = await axios.get(
    `http://localhost:5000/api/v1/user/${id}`
  );
  return { ...response.data.user };
};

export default Id;
