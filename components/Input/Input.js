import React from 'react';

const Input = ({ label, type, name, placeholder, state, setState}) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder || ''}
        value={state || ''}
        onChange={(event) => setState(type === 'file' ? event.target.files[0] : event.target.value)}
      />
    </>
  );
};

export default Input;
