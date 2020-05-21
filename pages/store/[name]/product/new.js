import React, { useState } from 'react';

import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';
import {
  handleInputChange,
  handleFileChange,
  processFormData,
} from '../../../../services/helpers';
import { createProduct } from '../../../../services/productService';
import { getStore } from '../../../../services/storeService';
import ProtectedRoute from '../../../../components/ProtectedRoute/ProtectedRoute';
import Loading from '../../../../components/Loading/Loading';
import Input from '../../../../components/Input/Input';
import Textarea from '../../../../components/Textarea/Textarea';
import FileInput from '../../../../components/FileInput/FileInput';
import Button from '../../../../components/Button/Button';

const newproduct = ({ store }) => {
  let router = useRouter();

  let [name, setName] = useState(null);
  let [description, setDescription] = useState(null);
  let [quantity, setQuantity] = useState(null);
  let [price, setPrice] = useState(null);
  let [image, setImage] = useState(false);
  let [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    let body = { name, description, price, quantity, image };

    let uploadData = processFormData(body);
    createProduct(store._id, uploadData)
      .then((newProduct) => {
        router.push(`/store/${store.name}/dashboard`);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  return (
    <ProtectedRoute>
      {loading ? (
        <Loading />
      ) : (
        <main className="form-main">
          <div className="container">
            <Head>
              <title>Criar Produto</title>
            </Head>
            <h1 className="title title--form">Criar Produto</h1>
            <form
              className="form"
              onSubmit={(e) => handleSubmit(e, store.name)}
            >
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
                <Button color="green" submit>
                  Criar Produto
                </Button>
                <Link
                  href="/store/[name]/dashboard"
                  as={`/store/${store.name}/dashboard`}
                >
                  <a>
                    <Button color="brown">Voltar</Button>
                  </a>
                </Link>
              </section>
            </form>
          </div>
        </main>
      )}
    </ProtectedRoute>
  );
};

newproduct.getInitialProps = async (ctx) => {
  let { name } = ctx.query;

  const [store] = await getStore(name);

  return { store };
};

export default newproduct;
