import { useState } from 'react';
import { useRouter } from 'next/router';
import { createStore } from '../services/storeService';
import Link from 'next/link';
import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute';
import PhoneCodeSelect from '../components/PhoneCodeSelect/PhoneCodeSelect';
import Input from '../components/Input/Input';
import PhoneInput from '../components/PhoneInput/PhoneInput';
import Textarea from '../components/Textarea/Textarea';
import {
  handleInputChange,
  handleFileChange,
  processFormData,
} from '../services/helpers';

const CreateStore = () => {
  const router = useRouter();

  const [name, setName] = useState('');
  const [about, setAbout] = useState('');
  const [primaryColor, setPrimaryColor] = useState('#00ff00');
  const [secondaryColor, setSecondaryColor] = useState('#0000ff');
  const [regionCode, setRegionCode] = useState('');
  const [phone, setPhone] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      name,
      about,
      primaryColor,
      secondaryColor,
      phone: '+55' + regionCode + phone,
      image,
    };

    createStore(processFormData(data))
      .then(() => router.push('/minhaslojas'))
      .catch((error) => console.log(error));
  };

  return (
    <ProtectedRoute>
      <form onSubmit={handleSubmit}>
        <Input
          label="Nome da loja:"
          type="text"
          name="name"
          placeholder="Minha loja"
          state={name}
          setState={setName}
        />
        <Textarea
          label="Sobre sua loja:"
          type="text"
          name="about"
          placeholder="Uma loja sobre..."
          state={about}
          setState={setAbout}
        />
        <Input
          label="Cor primária:"
          type="color"
          name="primaryColor"
          state={primaryColor}
          setState={setPrimaryColor}
        />
        <Input
          label="Cor secundária:"
          type="color"
          name="secondaryColor"
          state={secondaryColor}
          setState={setSecondaryColor}
        />

        <PhoneInput
          label="WhatsApp"
          phone={phone}
          setPhone={setPhone}
          regionCode={regionCode}
          setRegionCode={setRegionCode}
        />

        <Input
          label="Sua logo:"
          type="file"
          name="image"
          setState={setImage}
        />
        <button type="submit">Criar Loja</button>
      </form>
      <Link href="minhaslojas">
        <a>Ir para minhas lojas</a>
      </Link>
    </ProtectedRoute>
  );
};

export default CreateStore;
