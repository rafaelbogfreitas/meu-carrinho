import { useState } from 'react';
import { editStore, getStore, deleteStore } from '../../services/storeService';
import ProtectedRoute from '../../components/ProtectedRoute/ProtectedRoute';
import { useRouter } from 'next/router';
import Link from 'next/link';
import {
  handleInputChange,
  handleFileChange,
  processFormData,
} from '../../services/helpers';

const Name = ({ store }) => {
  const router = useRouter();

  const [name, setName] = useState(store.name);
  const [about, setAbout] = useState(store.about);
  const [primaryColor, setPrimaryColor] = useState(store.theme.primaryColor);
  const [secondaryColor, setSecondaryColor] = useState(store.theme.secondaryColor);
  const [phone, setPhone] = useState(store.phone);
  const [image, setImage] = useState(false);

  const { _id: id } = store;

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = { name, about, primaryColor, secondaryColor, phone, image };

    editStore(id, processFormData(data))
      .then((response) => router.push(`/store/${response.updatedStore.name}/dashboard`))
      .catch((error) => console.log(error));
  };

  const handleDelete = () => {
    deleteStore(id)
      .then((response) => {
        console.log('response: ', response);
        router.push('/minhaslojas');
      })
      .catch((error) => {
        console.log('error: ', error);
      });
  };

  return (
    <ProtectedRoute>
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
          type="tel"
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
        <button type="submit">Salvar edições</button>
      </form>
      <button onClick={handleDelete}>Apagar loja</button>
      <Link href="/minhaslojas">
        <a>Ir para minhas lojas</a>
      </Link>
      <Link href="/store/[name]/dashboard" as={`/store/${store.name}/dashboard`}>
        <a>Voltar</a>
      </Link>
    </ProtectedRoute>
  );
};

Name.getInitialProps = async (context) => {
  const { name } = context.query;
  const [store] = await getStore(name);
  return { store };
};

export default Name;
