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
      <option value="68">AC (68)</option>
      <option value="82">AL (82)</option>
      <option value="96">AP (96)</option>
      <option value="92">AM (92)</option>
      <option value="71">BA (71)</option>
      <option value="88">CE (88)</option>
      <option value="61">DF (61)</option>
      <option value="27">ES (27)</option>
      <option value="62">GO (62)</option>
      <option value="98">MA (98)</option>
      <option value="65">MT (65)</option>
      <option value="84">MS (84)</option>
      <option value="31">MG (31)</option>
      <option value="91">PA (91)</option>
      <option value="83">PB (83)</option>
      <option value="41">PR (41)</option>
      <option value="81">PE (81)</option>
      <option value="86">PI (86)</option>
      <option value="21">RJ (21)</option>
      <option value="84">RN (84)</option>
      <option value="51">RS (51)</option>
      <option value="69">RO (69)</option>
      <option value="95">RR (95)</option>
      <option value="48">SC (48)</option>
      <option value="11">SP (11)</option>
      <option value="79">SE (79)</option>
      <option value="63">TO (63)</option>
    </select>
  );
}

export default PhoneCodeSelect;
