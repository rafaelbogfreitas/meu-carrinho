import { useState } from 'react';

const createStore = () => {
  const [name, setName] = useState('');
  const [about, setAbout] = useState('');
  const [primaryColor, setPrimaryColor] = useState('');
  const [secondaryColor, setSecondaryColor] = useState('');
  const [phone, setPhone] = useState('');
  const [file, setFile] = useState('');

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

  const handleSubmit = () => {
    const body = { name, about, primaryColor, secondaryColor, phone, file };
    // POST goes here
  };

  const handleInputFile = (e) => {
    const uploadData = new FormData();
    uploadData.append('image', e.target.files[0]);
    setFile(uploadData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nome da loja:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleInputName}
        />
        <label htmlFor="about">Sobre sua loja:</label>
        <textarea
          type="text"
          name="about"
          value={about}
          onChange={handleInputAbout}
        />
        <label htmlFor="primaryColor">Cor primária:</label>
        <input
          type="text"
          name="primaryColor"
          value={primaryColor}
          onChange={handleInputPrimaryColor}
        />
        <label htmlFor="secondaryColor">Cor secundária:</label>
        <input
          type="text"
          name="secondaryColor"
          value={secondaryColor}
          onChange={handleInputSecondaryColor}
        />
        <label htmlFor="phone">Cor secundária:</label>
        <input
          type="number"
          name="phone"
          value={phone}
          onChange={handleInputNumber}
        />
        <label htmlFor="phone">Cor secundária:</label>
        <input
          type="number"
          name="phone"
          value={phone}
          onChange={handleInputNumber}
        />
        <label htmlFor="image">Sua logo:</label>
        <input type="file" name="image" onChange={handleInputFile} />
      </form>
    </div>
  );
};

export default createStore;
