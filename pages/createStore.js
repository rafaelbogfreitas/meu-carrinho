import { useState } from 'react';
import { useRouter } from 'next/router';
import { createStore } from '../services/storeService';
import Head from 'next/head';
import Link from 'next/link';
import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute';
import Input from '../components/Input/Input';
import PhoneInput from '../components/PhoneInput/PhoneInput';
import ColorInput from '../components/ColorInput/ColorInput';
import FileInput from '../components/FileInput/FileInput';
import Button from '../components/Button/Button';
import Textarea from '../components/Textarea/Textarea';
import {
  handleInputChange,
  handleFileChange,
  processFormData,
} from '../services/helpers';

const CreateStore = () => {
  const router = useRouter();

  const [name, setName] = useState(null);
  const [about, setAbout] = useState(null);
  const [primaryColor, setPrimaryColor] = useState('#00ff00');
  const [secondaryColor, setSecondaryColor] = useState('#0000ff');
  const [regionCode, setRegionCode] = useState(null);
  const [phone, setPhone] = useState(null);
  const [image, setImage] = useState(false);

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
      <Head>
        <title>Crie sua loja</title>
      </Head>

      <main className="form-main">
        <div className="container">
          <h1 className="title title--form">Crie sua loja</h1>
          <form className="form" onSubmit={handleSubmit}>
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

            <div className="fieldset__section">
              <ColorInput
                label="Cor 1:"
                name="primaryColor"
                state={primaryColor}
                setState={setPrimaryColor}
              />
              <ColorInput
                label="Cor 2:"
                name="secondaryColor"
                state={secondaryColor}
                setState={setSecondaryColor}
              />
            </div>

            <PhoneInput
              label="WhatsApp"
              phone={phone}
              setPhone={setPhone}
              regionCode={regionCode}
              setRegionCode={setRegionCode}
            />

            <FileInput
              label="Sua logo:"
              type="file"
              name="image"
              image={image}
              setState={setImage}
            />

            <section className="btn-section">
              <Button submit color="green">
                Salvar
              </Button>

              <Link href="/minhaslojas" passHref>
                <a>
                  <Button color="brown">Ir para minhas lojas</Button>
                </a>
              </Link>
            </section>
          </form>
        </div>
      </main>
    </ProtectedRoute>
  );
};

export default CreateStore;
