import React from 'react';

const Textarea = ({ label, type, name, placeholder, state, setState }) => {
  return (
    <fieldset className="fieldset">
      <label className="fieldset__label" htmlFor={name}>
        {label}
      </label>
      <textarea
        className="fieldset__textarea"
        type={type}
        name={name}
        id={name}
        placeholder={placeholder || ''}
        value={state}
        onChange={(event) => setState(event.target.value)}
      />
    </fieldset>
  );
};

export default Textarea;
