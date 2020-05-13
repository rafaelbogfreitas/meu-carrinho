import { useState } from 'react';
import axios from 'axios';

const Name = (props) => {
  const [name, setName] = useState(props.name);
  const [about, setAbout] = useState(props.about);
  const [primaryColor, setPrimaryColor] = useState(props.theme.primaryColor);
  const [secondaryColor, setSecondaryColor] = useState(props.theme.seconfaryor);
  const [phone, setPhone] = useState(props.phone);
  const [file, setFile] = useState(false);

  const handleInputName = (event) => {
    setName(event.target.value);
  };

  const handleInputAbout = (event) => {
    setAbout(event.target.value);
  };

  const handleInputPrimaryColor = (event) => {
    setPrimaryColor(event.target.value);
  };

  const handleInputSecondaryColor = (event) => {
    setSecondaryColor(event.target.value);
  };

  const handleInputNumber = (event) => {
    setPhone(event.target.value);
  };

  const handleInputFile = (e) => {
    const uploadData = new FormData();
    uploadData.append('image', e.target.files[0]);
    setFile(uploadData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const body = { name, about, primaryColor, secondaryColor, phone, file };
    // POST goes here
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nome da loja:</label>
        <input
          type="text"
          placeholder="Minha loja"
          name="name"
          value={name}
          onChange={handleInputName}
        />
        <label htmlFor="about">Sobre sua loja:</label>
        <textarea
          type="text"
          placeholder="Uma loja sobre..."
          name="about"
          value={about}
          onChange={handleInputAbout}
        />
        <label htmlFor="primaryColor">Cor primária:</label>
        <input
          type="color"
          name="primaryColor"
          value={primaryColor}
          onChange={handleInputPrimaryColor}
        />
        <label htmlFor="secondaryColor">Cor secundária:</label>
        <input
          type="color"
          name="secondaryColor"
          value={secondaryColor}
          onChange={handleInputSecondaryColor}
        />
        <label htmlFor="phone">Telefone</label>
        <input
          type="text"
          placeholder="(xx) xxxxx-xxxx"
          name="phone"
          value={phone}
          onChange={handleInputNumber}
        />
        <label htmlFor="image">Sua logo:</label>
        <input type="file" name="image" onChange={handleInputFile} />
        <button type="submit">Criar Loja</button>
      </form>
    </>
  );
};

Name.getInitialProps = async (ctx) => {
  const { name } = ctx.query;
  const response = await axios.get(
    `http://localhost:5000/api/v1/store/${name}`
  );
  return { ...response.data[0] };
};

export default Name;
