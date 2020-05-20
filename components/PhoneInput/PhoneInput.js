import React from 'react';
import PhoneCodeSelect from '../PhoneCodeSelect/PhoneCodeSelect';

const PhoneInput = ({ label, phone, regionCode, setPhone, setRegionCode }) => {
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
          onChange={(event) => setPhone(event.target.value)}
        />
      </div>
    </fieldset>
  );
};

export default PhoneInput;
