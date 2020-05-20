import { useState } from 'react';
import { editStore, getStore, deleteStore } from '../../services/storeService';
import ProtectedRoute from '../../components/ProtectedRoute/ProtectedRoute';
import PhoneCodeSelect from '../../components/PhoneCodeSelect/PhoneCodeSelect';
import Loading from '../../components/ProtectedRoute/ProtectedRoute';
import Input from '../../components/Input/Input';
import PhoneInput from '../../components/PhoneInput/PhoneInput';
import ColorInput from '../../components/ColorInput/ColorInput';
import FileInput from '../../components/FileInput/FileInput';
import Textarea from '../../components/Textarea/Textarea';

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
      phone: '+55' + regionCode + phone,
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
        console.log('response: ', response);
        router.push('/minhaslojas');
      })
      .catch((error) => {
        setLoading(false);
        console.log('error: ', error);
      });
    console.log('Hello');
  };

  return (
    <ProtectedRoute>
      {loading ? (
        <Loading />
      ) : (
        <>
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

            <div className="fieldset__section">
              <ColorInput
                label="Cor primária:"
                name="primaryColor"
                state={primaryColor}
                setState={setPrimaryColor}
              />
              <ColorInput
                label="Cor secundária:"
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
              setState={setImage}
            />
            <button className="save" type="submit">
              Salvar
            </button>
          </form>
          <button onClick={handleDelete} className="deleteButton">
            Apagar loja
          </button>
          <Link href="/minhaslojas">
            <a>Ir para minhas lojas</a>
          </Link>
          <Link
            href="/store/[name]/dashboard"
            as={`/store/${store.name}/dashboard`}
          >
            <a>Voltar</a>
          </Link>
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
