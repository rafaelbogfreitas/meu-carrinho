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

const newproduct = ({ store }) => {
  let router = useRouter();

  let [name, setName] = useState('');
  let [description, setDescription] = useState('');
  let [quantity, setQuantity] = useState('');
  let [price, setPrice] = useState('');
  let [image, setImage] = useState('');
  let [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    let body = { name, description, price, quantity, image };

    let uploadData = processFormData(body);
    console.log(uploadData);
    createProduct(store._id, uploadData)
      .then((newProduct) => {
        router.push(`/store/${store.name}/dashboard`);
        console.log(newProduct);
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
        <div>
          <Head>
            <title>New Product</title>
          </Head>
          <h1>{store.name}</h1>
          <form onSubmit={(e) => handleSubmit(e, store.name)}>
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
            <Input label="Foto:" type="file" name="image" setState={setImage} />

            <button>submit</button>
          </form>
          <Link
            href="/store/[name]/dashboard"
            as={`/store/${store.name}/dashboard`}
          >
            <a>Voltar</a>
          </Link>
        </div>
      )}
    </ProtectedRoute>
  );
};

newproduct.getInitialProps = async (ctx) => {
  let { name } = ctx.query;
  console.log(name);

  const [store] = await getStore(name);
  console.log(store);

  return { store };
};

export default newproduct;
