import React, { useState } from 'react'

import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { handleInputChange, handleFileChange, processFormData } from '../../../../services/helpers'
import { createProduct } from '../../../../services/productService'
import { getStore } from '../../../../services/storeService'
import ProtectedRoute from '../../../../components/ProtectedRoute/ProtectedRoute';
import Loading from '../../../../components/Loading/Loading';

const newproduct = ({ store }) => {

  let router = useRouter();

  let [name, setName] = useState('')
  let [description,setDescription] = useState('')
  let [quantity,setQuantity] = useState('')
  let [price,setPrice] = useState('')
  let [image,setImage] = useState('')
  let [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true);
    let body = { name, description, price, quantity, image }

    let uploadData = processFormData(body)
    console.log(uploadData)
    createProduct(store._id, uploadData)
      .then( newProduct => {
        router.push(`/store/${store.name}/dashboard`)
        console.log(newProduct)
      })
      .catch( error => {
        console.log(error)
        setLoading(false)
      })

  }

  return (
    <ProtectedRoute>
      {loading ?
        <Loading/> :
      <div>
      <Head>
        <title>New Product</title>
      </Head>
      <h1>{store.name}</h1>
        <form onSubmit={(e) => handleSubmit(e, store.name)}>
          <input onChange={e => handleInputChange(e, setName)} name="name" type="text" className="text"/>
          <input onChange={e => handleInputChange(e, setDescription)} name="description" type="text" className="text"/>
          <input onChange={e => handleInputChange(e, setPrice)} name="price" type="number" className="text"/>
          <input onChange={e => handleInputChange(e, setQuantity)} name="quantity" type="number" className="number"/>
          <input onChange={e => handleFileChange(e, setImage)} name="image" type="file" className="file"/>
          <button>submit</button>
        </form>
        <Link href="/store/[name]/dashboard" as={`/store/${store.name}/dashboard`}>
          <a>Voltar</a>
        </Link>
      </div>
      }
    </ProtectedRoute>
  )
}

newproduct.getInitialProps = async ctx => {
  let { name } = ctx.query
  console.log(name)

  const [store] = await getStore(name)
  console.log(store)

  return { store }
}

export default newproduct
