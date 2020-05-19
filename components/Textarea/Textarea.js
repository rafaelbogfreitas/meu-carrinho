import React from 'react';

const Textarea = ({ label, type, name, placeholder, state, setState}) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <textarea
        type={type}
        name={name}
        id={name}
        placeholder={placeholder || ''}
        value={state}
        onChange={(event) => setState(event.target.value)}
      />
    </>
  );
};

export default Textarea;
