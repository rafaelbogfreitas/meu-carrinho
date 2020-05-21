import { useState } from 'react';

import Loading from '../../../../../components/Loading/Loading';

import Head from 'next/head';
import { useRouter } from 'next/router';
import {
  getProduct,
  editProduct,
  deleteProduct,
} from '../../../../../services/productService';
import { getStore } from '../../../../../services/storeService';
import {
  handleInputChange,
  handleFileChange,
  processFormData,
} from '../../../../../services/helpers';
import Input from '../../../../../components/Input/Input';
import Textarea from '../../../../../components/Textarea/Textarea';
import FileInput from '../../../../../components/FileInput/FileInput';
import Button from '../../../../../components/Button/Button';
import Link from 'next/link';

const edit = ({ product, storeName }) => {
  let router = useRouter();

  let [name, setName] = useState(product.name);
  let [description, setDescription] = useState(product.description);
  let [price, setPrice] = useState(product.price);
  let [quantity, setQuantity] = useState(product.quantity);
  let [image, setImage] = useState('');

  let [loading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    const data = { name, description, price, quantity, image };

    editProduct(product._id, processFormData(data))
      .then((response) => router.push(`/store/${storeName}/dashboard`))
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };

  const handleDelete = async () => {
    // async/await
    try {
      const [store] = await getStore(storeName);
      const response = await deleteProduct(store._id, product._id);
      router.push(`/store/${storeName}/dashboard`);
    } catch (error) {
      console.log(error.response);
    }

    // // then/catch
    // getStore(storeName)
    // .then(([store]) => {
    //   deleteProduct(store._id, product._id)
    //   .then((response) => {
    //     console.log(response);
    //     router.push(`/store/${storeName}/dashboard`);
    //   })
    //       .catch((error) => console.log(error.response));
    //     })
    //   .catch((error) => console.log(error.response));
  };

  return loading ? (
    <>
      <Head>
        <title>Loading</title>
      </Head>
      <Loading />
    </>
  ) : (
    <main className="form-main">
      <div className="container">
        <Head>
          <title>Editar Produto</title>
        </Head>
        <h1 className="title title--form">Editar Produto</h1>
        <form className="form" onSubmit={handleSubmit}>
          <Input
            label="Nome:"
            type="text"
            name="name"
            placeholder="Produto"
            state={name}
            setState={setName}
          />
          <Textarea
            label="Descrição:"
            type="text"
            name="description"
            placeholder="Um produto legal..."
            state={description}
            setState={setDescription}
          />
          <Input
            label="Preço:"
            type="number"
            name="price"
            placeholder="R$ 50,00"
            state={price}
            setState={setPrice}
          />
          <Input
            label="Estoque:"
            type="number"
            name="quantity"
            placeholder="30"
            state={quantity}
            setState={setQuantity}
          />
          <FileInput
            label="Foto:"
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
              as={`/store/${storeName}/dashboard`}
            >
              <a>
                <Button color="brown">Voltar para a loja</Button>
              </a>
            </Link>

            <Button color="red" handler={handleDelete}>
              Deletar
            </Button>
          </section>
        </form>
      </div>
    </main>
  );
};

edit.getInitialProps = async (ctx) => {
  let { id } = ctx.query;
  let { name } = ctx.query;
  let { product } = await getProduct(id);

  return {
    product,
    storeName: name,
  };
};

export default edit;
