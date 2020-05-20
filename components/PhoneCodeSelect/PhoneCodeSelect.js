import React from 'react';
import { handleInputChange } from '../../services/helpers';

function PhoneCodeSelect({ regionCode, setRegionCode }) {
  return (
    <select
    className="fieldset__select"
      value={regionCode}
      onChange={(event) => handleInputChange(event, setRegionCode)}
      required
    >
      {/* <option value="" selected disabled>DDD</option> */}
      <option value="68">Acre (68)</option>
      <option value="82">Alagoas (82)</option>
      <option value="96">Amapá (96)</option>
      <option value="92">Amazonas (92)</option>
      <option value="71">Bahia (71)</option>
      <option value="88">Ceará (88)</option>
      <option value="61">Distrito Federal (61)</option>
      <option value="27">Espírito Santo (27)</option>
      <option value="62">Goiás (62)</option>
      <option value="98">Maranhão (98)</option>
      <option value="65">Mato Grosso (65)</option>
      <option value="84">Mato Grosso do Sul (84)</option>
      <option value="31">Minas Gerais (31)</option>
      <option value="91">Pará (91)</option>
      <option value="83">Paraíba (83)</option>
      <option value="41">Paraná (41)</option>
      <option value="81">Pernambuco (81)</option>
      <option value="86">Piauí (86)</option>
      <option value="21">Rio de Janeiro (21)</option>
      <option value="84">Rio Grande do Norte (84)</option>
      <option value="51">Rio Grande do Sul (51)</option>
      <option value="69">Rondônia (69)</option>
      <option value="95">Roraima (95)</option>
      <option value="48">Santa Catarina (48)</option>
      <option value="11">São Paulo (11)</option>
      <option value="79">Sergipe (79)</option>
      <option value="63">Tocantins (63)</option>
    </select>
  );
}

export default PhoneCodeSelect;
