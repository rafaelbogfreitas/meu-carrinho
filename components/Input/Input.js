import React from 'react';

const Input = ({ label, type, name, placeholder, state, setState }) => {

  return (
    <fieldset className="fieldset">
      <label className="fieldset__label" htmlFor={name}>
        {label}
      </label>
      <input
        className="fieldset__input"
        type={type}
        name={name}
        id={name}
        placeholder={placeholder || ''}
        value={state || ''}
        onChange={(event) => setState(event.target.value)}
        style={state === '' ? { border: '1px solid red' } : null}
        required
      />
    </fieldset>
  );
};

export default Input;
