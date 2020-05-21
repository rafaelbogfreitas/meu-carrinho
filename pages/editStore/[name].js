import { useState } from 'react';
import { useRouter } from 'next/router';
import { editStore, getStore, deleteStore } from '../../services/storeService';
import ProtectedRoute from '../../components/ProtectedRoute/ProtectedRoute';
import Loading from '../../components/ProtectedRoute/ProtectedRoute';
import Input from '../../components/Input/Input';
import PhoneInput from '../../components/PhoneInput/PhoneInput';
import ColorInput from '../../components/ColorInput/ColorInput';
import FileInput from '../../components/FileInput/FileInput';
import Textarea from '../../components/Textarea/Textarea';
import Button from '../../components/Button/Button';

import Head from 'next/head';
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
  const [secondaryColor, setSecondaryColor] = useState(
    store.theme.secondaryColor
  );
  const [phone, setPhone] = useState(store.phone.slice(5));
  const [regionCode, setRegionCode] = useState(store.phone.slice(3, 5));
  const [image, setImage] = useState(false);
  const [loading, setLoading] = useState(false);

  const { _id: id } = store;

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    const data = {
      name,
      about,
      primaryColor,
      secondaryColor,
      phone: '+55' + regionCode + String(phone),
      image,
    };

    editStore(id, processFormData(data))
      .then((response) =>
        router.push(`/store/${response.updatedStore.name}/dashboard`)
      )
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };

  const handleDelete = () => {
    setLoading(true);
    deleteStore(id)
      .then((response) => {
        router.push('/minhaslojas');
      })
      .catch((error) => {
        setLoading(false);
        console.log('error: ', error);
      });
  };

  return (
    <ProtectedRoute>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Head>
            <title>Editar loja</title>
          </Head>
          <main className="form-main">
            <div className="container">
              <h1 className="title title--form">Editar loja</h1>
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

                  <Link
                    href="/store/[name]/dashboard"
                    as={`/store/${store.name}/dashboard`}
                  >
                    <a>
                      <Button color="brown">Voltar</Button>
                    </a>
                  </Link>

                  <Button color="red" handler={handleDelete}>
                    Deletar
                  </Button>
                </section>
              </form>
            </div>
          </main>
        </>
      )}
    </ProtectedRoute>
  );
};

Name.getInitialProps = async (context) => {
  const { name } = context.query;
  const [store] = await getStore(name);
  return { store };
};

export default Name;
