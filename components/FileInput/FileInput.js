import React from 'react';

const FileInput = ({ label, name, image, setState }) => {
  return (
    <fieldset className="fieldset">
      <label className="fieldset__label" htmlFor={name}>
        {label}
      </label>
      <label className="fieldset__label--file" htmlFor={name}>
        {image.name || 'Procurar'}

        <input
          className="fieldset__input--file"
          type="file"
          placeholder="teste"
          name={name}
          id={name}
          onChange={(event) => setState(event.target.files[0])}
        />
      </label>
    </fieldset>
  );
};

export default FileInput;
