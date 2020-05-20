import React from 'react';

const Input = ({ label, type, name, placeholder, state, setState}) => {
  return (
    <fieldset className="fieldset">
      <label className="fieldset__label" htmlFor={name}>{label}</label>
      <input
        className="fieldset__input"
        type={type}
        name={name}
        id={name}
        placeholder={placeholder || ''}
        value={state || ''}
        onChange={(event) => setState(type === 'file' ? event.target.files[0] : event.target.value)}
      />
    </fieldset>
  );
};

export default Input;