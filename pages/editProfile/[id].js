import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { editUser } from '../../services/userService'

import ProtectedRoute from '../../components/ProtectedRoute/ProtectedRoute';

const Id = (props) => {
  const [name, setName] = useState(props.name);
  const [email, setEmail] = useState(props.email);
  const [image, setImage] = useState(false);

  const router = useRouter();

  const handleInputName = (event) => {
    setName(event.target.value);
  };

  const handleInputEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleInputFile = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { _id } = props;
    const formData = new FormData();
    const data = { name, email, image };

    for(let item in data) {
      formData.set(item, data[item]);
    }

    editUser(_id, formData)
      .then((response) => {
        console.log(response)
        router.push('/minhaslojas');
      })
      .catch((error) => console.log(error))
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
