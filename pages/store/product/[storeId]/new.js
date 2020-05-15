import React, { useState } from 'react'

import { handleInputChange, handleFileChange, processFormData } from '../../../../services/helpers'
import { createProduct } from '../../../../services/productService';
import { getStore } from '../../../../services/storeService';
import { Router, useRouter } from 'next/router';

const newproduct = ({ store }) => {
  let [name, setName] = useState('');
  let [description,setDescription] = useState('');
  let [quantity,setQuantity] = useState('');
  let [image,setImage] = useState('');
  let router = useRouter();
  console.log(router)
  const handleSubmit = e => {
    e.preventDefault();

    let body = { name, description, quantity, image };

    let uploadData = processFormData(body);
    createProduct(store._id, uploadData)
      .then( newProduct => {
        // Router.push()
        console.log(newProduct)
      })
      .catch( error => console.log(error))

  }

  return (
    <div>
    <h1>{store.name}</h1>
      <form onSubmit={handleSubmit}>
        <input onChange={e => handleInputChange(e, setName)} name="name" type="text" className="text"/>
        <input onChange={e => handleInputChange(e, setDescription)} name="description" type="text" className="text"/>
        <input onChange={e => handleInputChange(e, setQuantity)} name="quantity" type="number" className="number"/>
        <input onChange={e => handleFileChange(e, setImage)} name="image" type="file" className="file"/>

        <button>submit</button>
      </form>
    </div>
  )
}

newproduct.getInitialProps = async ctx => {
  let { storeId } = ctx.query;
  console.log(ctx);

  const store = await getStore(storeId);
  console.log(store)

  return { store };
}

export default newproduct;
