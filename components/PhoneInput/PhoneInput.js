import React from 'react';
import PhoneCodeSelect from '../PhoneCodeSelect/PhoneCodeSelect';

const PhoneInput = ({ label, phone, regionCode, setPhone, setRegionCode }) => {
  const handleNumber = ({ target: value }) => {
    /^[0-9]+$/.test(value) || value === '' ? setPhone(value) : null;
  };

  return (
    <fieldset className="fieldset">
      <label className="fieldset__label" htmlFor="phone">
        {label}
      </label>
      <div className="fieldset__section">
        <PhoneCodeSelect
          regionCode={regionCode}
          setRegionCode={setRegionCode}
        />
        <input
          className="fieldset__input--phone"
          type="text"
          name="phone"
          id="phone"
          placeholder="xxxxx-xxxx"
          minLength="8"
          maxLength="9"
          value={phone}
          onChange={handleNumber}
          style={phone === '' ? { border: '1px solid red' } : null}
          required
        />
      </div>
      {phone === '' && (
        <small className="fieldset__small">Este campo é obrigatório</small>
      )}
    </fieldset>
  );
};

export default PhoneInput;
