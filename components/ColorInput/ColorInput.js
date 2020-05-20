import React from 'react';

const Input = ({ label, name, state, setState}) => {
  return (
    <fieldset className="fieldset--color">
      <label className="fieldset__label" htmlFor={name}>{label}</label>
      <input
        className="fieldset__input--color"
        type="color"
        name={name}
        id={name}
        value={state}
        onChange={(event) => setState(event.target.value)}
      />
    </fieldset>
  );
};

export default Input;
