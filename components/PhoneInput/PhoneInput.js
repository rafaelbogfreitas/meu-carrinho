import React from 'react';
import PhoneCodeSelect from '../PhoneCodeSelect/PhoneCodeSelect';

const PhoneInput = ({ label, phone, regionCode, setPhone, setRegionCode }) => {
  return (
    <>
      <label htmlFor="phone">{label}</label>
      <PhoneCodeSelect regionCode={regionCode} setRegionCode={setRegionCode} />
      <input
        type="text"
        name="phone"
        id="phone"
        placeholder="xxxxx-xxxx"
        minLength="8"
        maxLength="9"
        value={phone}
        onChange={(event) => setPhone(event.target.value)}
      />
    </>
  );
};

export default PhoneInput;
