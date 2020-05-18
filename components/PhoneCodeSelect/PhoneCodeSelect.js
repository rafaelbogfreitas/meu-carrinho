import React from 'react';
import { handleInputChange } from '../../services/helpers';

function PhoneCodeSelect({ regionCode, setRegionCode }) {
  return (
    <select
      value={regionCode}
      onChange={(event) => handleInputChange(event, setRegionCode)}
      required
    >
      {/* <option value="" selected disabled>DDD</option> */}
      <option value="68">(68) Acre</option>
      <option value="82">(82) Alagoas</option>
      <option value="96">(96) Amapá</option>
      <option value="92">(92) Amazonas</option>
      <option value="71">(71) Bahia</option>
      <option value="88">(88) Ceará</option>
      <option value="61">(61) Distrito Federal</option>
      <option value="27">(27) Espírito Santo</option>
      <option value="62">(62) Goiás</option>
      <option value="98">(98) Maranhão</option>
      <option value="65">(65) Mato Grosso</option>
      <option value="84">(84) Mato Grosso do Sul</option>
      <option value="31">(31) Minas Gerais</option>
      <option value="91">(91) Pará</option>
      <option value="83">(83) Paraíba</option>
      <option value="41">(41) Paraná</option>
      <option value="81">(81) Pernambuco</option>
      <option value="86">(86) Piauí</option>
      <option value="21">(21) Rio de Janeiro</option>
      <option value="84">(84) Rio Grande do Norte</option>
      <option value="51">(51) Rio Grande do Sul</option>
      <option value="69">(69) Rondônia</option>
      <option value="95">(95) Roraima</option>
      <option value="48">(48) Santa Catarina</option>
      <option value="11">(11) São Paulo</option>
      <option value="79">(79) Sergipe</option>
      <option value="63">(63) Tocantins</option>
    </select>
  );
}

export default PhoneCodeSelect;
