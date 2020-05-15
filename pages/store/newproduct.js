import React, { useState } from 'react'

import { handleInputChange, handleFileChange, processFormData } from '../../services/helpers'

const newproduct = () => {
  let [name, setName] = useState('');
  let [description,setDescription] = useState('');
  let [quantity,setQuantity] = useState('');
  let [image,setImage] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    let body = { name, description, quantity, image };

    let uploadData = processFormData(body);

    
  }

  return (
    <div>
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

export default newproduct
