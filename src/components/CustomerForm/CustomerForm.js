import React from 'react';
import './CustomerForm.css';
import {NavLink, Route, useHistory, useRouteMatch} from 'react-router-dom';
import {useFormValidation} from '../../hooks/useFormValidation';

function CustomerForm({ onSubmit, onGeolocation }) {
  const { values, handleChange, errors, isValid, resetForm, handleAdd } = useFormValidation();
  const { path, url } = useRouteMatch();
  const history = useHistory();

  React.useEffect(() => {
    resetForm();
  }, [resetForm]);

  function handleClick(type) {
    onGeolocation()
      .then((res) => {
        handleAdd(type, res.address.state);
      })
      .catch((err) => {
        console.log(err)
      });
  }

  function handlePastSameInfo() {
    handleAdd('billingCity', values.city);
    handleAdd('billingName', values.name);
    handleAdd('billingAddress', values.address);
    handleAdd('billingAdditionalInfo', values.additionalInfo);
    handleAdd('billingCountry', values.country);
    handleAdd('billingZip', values.zip);
    handleAdd('billingCountry', values.country);
    handleAdd('billingCity', values.city);

  }

  console.log(values);
  return (
    <form action="#" method="post" className="form" noValidate onSubmit={onSubmit}>
      <nav className="form__nav">
        <ul className="form__links">
          <li className="form__list">
            <NavLink
              className="form__link"
              activeClassName="form__link_active"
              to={`${url}/shipping`}>Shipping
            </NavLink>
          </li>
          <li className="form__list">
            <NavLink
              className="form__link"
              activeClassName="form__link_active"
              to={`${url}/billing`}>Billing
            </NavLink>
          </li>
          <li className="form__list">
            <NavLink
              className="form__link"
              activeClassName="form__link_active"
              to={`${url}/payment`}>Payment
            </NavLink>
          </li>
        </ul>
      </nav>
      <Route path={`${path}/shipping`}>
        <h2 className="form__title">Shipping Info</h2>
        <div className="form__page-container">
          <label className="form__label">Recipient
            <input
              type="text"
              name="name"
              className="form__input form__input_top-margin-l"
              placeholder="Full Name"
              required
              value={values.name || ''}
              onChange={handleChange}
            />
            <div className="form__input-container form__input-container_type_text">
              <input
                type="tel"
                name="tel"
                className="form__input"
                placeholder="Daytime Phone"
                required
                value={values.tel || ''}
                onChange={handleChange}
              />
              <p className="form__input-description">For delivery questions only</p>
            </div>
          </label>
          <label className="form__label">Address
            <input
              type="text"
              name="address"
              className="form__input form__input_top-margin-l"
              placeholder="Street Address"
              required
              value={values.address || ''}
              onChange={handleChange}
            />
            <input
              type="text"
              name="additionalInfo"
              className="form__input form__input_top-margin-m"
              placeholder="Apt, Suite, Bldg, Gate Code. (optional)"
              value={values.additionalInfo || ''}
              onChange={handleChange}
            />
            <div className="form__input-container form__input-container_type_inputs">
              <input
                type="text"
                name="city"
                className="form__input form__input_type_city"
                placeholder="City"
                required
                value={values.city || ''}
                onChange={handleChange}
              />
              <button
                type="button"
                className="form__button-inside-input"
                onClick={() => handleClick('city')}
              />
            </div>
            <div className="form__input-container form__input-container_type_inputs">
              <select
                className="form__select"
                name="country"
                value={values.country || ''}
                onChange={handleChange}
                required
              >
                <option value="" disabled hidden>Country</option>
                <option className="form__option" value="Afghanistan">Afghanistan</option>
                <option className="form__option" value="Albania">Albania</option>
                <option className="form__option" value="Algeria">Algeria</option>
                <option className="form__option" value="American Samoa">American Samoa</option>
                <option className="form__option" value="Andorra">Andorra</option>
                <option className="form__option" value="Angola">Angola</option>
                <option className="form__option" value="Anguilla">Anguilla</option>
                <option className="form__option" value="Antarctica">Antarctica</option>
                <option className="form__option" value="Antigua and Barbuda">Antigua and Barbuda</option>
                <option className="form__option" value="Argentina">Argentina</option>
                <option className="form__option" value="Armenia">Armenia</option>
                <option className="form__option" value="Aruba">Aruba</option>
                <option className="form__option" value="Australia">Australia</option>
                <option className="form__option" value="Austria">Austria</option>
                <option className="form__option" value="Azerbaijan">Azerbaijan</option>
                <option className="form__option" value="Bahamas">Bahamas</option>
                <option className="form__option" value="Bahrain">Bahrain</option>
                <option className="form__option" value="Bangladesh">Bangladesh</option>
                <option className="form__option" value="Barbados">Barbados</option>
                <option className="form__option" value="Belarus">Belarus</option>
                <option className="form__option" value="Belgium">Belgium</option>
                <option className="form__option" value="Belize">Belize</option>
                <option className="form__option" value="Benin">Benin</option>
                <option className="form__option" value="Bermuda">Bermuda</option>
                <option className="form__option" value="Bhutan">Bhutan</option>
                <option className="form__option" value="Bolivia">Bolivia</option>
                <option className="form__option" value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                <option className="form__option" value="Botswana">Botswana</option>
                <option className="form__option" value="Bouvet Island">Bouvet Island</option>
                <option className="form__option" value="Brazil">Brazil</option>
                <option className="form__option" value="British Indian Ocean Territory">British Indian Ocean Territory
                </option>
                <option className="form__option" value="Brunei Darussalam">Brunei Darussalam</option>
                <option className="form__option" value="Bulgaria">Bulgaria</option>
                <option className="form__option" value="Burkina Faso">Burkina Faso</option>
                <option className="form__option" value="Burundi">Burundi</option>
                <option className="form__option" value="Cambodia">Cambodia</option>
                <option className="form__option" value="Cameroon">Cameroon</option>
                <option className="form__option" value="Canada">Canada</option>
                <option className="form__option" value="Cape Verde">Cape Verde</option>
                <option className="form__option" value="Cayman Islands">Cayman Islands</option>
                <option className="form__option" value="Central African Republic">Central African Republic</option>
                <option className="form__option" value="Chad">Chad</option>
                <option className="form__option" value="Chile">Chile</option>
                <option className="form__option" value="China">China</option>
                <option className="form__option" value="Christmas Island">Christmas Island</option>
                <option className="form__option" value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                <option className="form__option" value="Colombia">Colombia</option>
                <option className="form__option" value="Comoros">Comoros</option>
                <option className="form__option" value="Congo">Congo</option>
                <option className="form__option" value="Congo, The Democratic Republic of The">Congo, The Democratic
                  Republic of The
                </option>
                <option className="form__option" value="Cook Islands">Cook Islands</option>
                <option className="form__option" value="Costa Rica">Costa Rica</option>
                <option className="form__option" value="Cote D'ivoire">Cote D'ivoire</option>
                <option className="form__option" value="Croatia">Croatia</option>
                <option className="form__option" value="Cuba">Cuba</option>
                <option className="form__option" value="Cyprus">Cyprus</option>
                <option className="form__option" value="Czech Republic">Czech Republic</option>
                <option className="form__option" value="Denmark">Denmark</option>
                <option className="form__option" value="Djibouti">Djibouti</option>
                <option className="form__option" value="Dominica">Dominica</option>
                <option className="form__option" value="Dominican Republic">Dominican Republic</option>
                <option className="form__option" value="Ecuador">Ecuador</option>
                <option className="form__option" value="Egypt">Egypt</option>
                <option className="form__option" value="El Salvador">El Salvador</option>
                <option className="form__option" value="Equatorial Guinea">Equatorial Guinea</option>
                <option className="form__option" value="Eritrea">Eritrea</option>
                <option className="form__option" value="Estonia">Estonia</option>
                <option className="form__option" value="Ethiopia">Ethiopia</option>
                <option className="form__option" value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)
                </option>
                <option className="form__option" value="Faroe Islands">Faroe Islands</option>
                <option className="form__option" value="Fiji">Fiji</option>
                <option className="form__option" value="Finland">Finland</option>
                <option className="form__option" value="France">France</option>
                <option className="form__option" value="French Guiana">French Guiana</option>
                <option className="form__option" value="French Polynesia">French Polynesia</option>
                <option className="form__option" value="French Southern Territories">French Southern Territories
                </option>
                <option className="form__option" value="Gabon">Gabon</option>
                <option className="form__option" value="Gambia">Gambia</option>
                <option className="form__option" value="Georgia">Georgia</option>
                <option className="form__option" value="Germany">Germany</option>
                <option className="form__option" value="Ghana">Ghana</option>
                <option className="form__option" value="Gibraltar">Gibraltar</option>
                <option className="form__option" value="Greece">Greece</option>
                <option className="form__option" value="Greenland">Greenland</option>
                <option className="form__option" value="Grenada">Grenada</option>
                <option className="form__option" value="Guadeloupe">Guadeloupe</option>
                <option className="form__option" value="Guam">Guam</option>
                <option className="form__option" value="Guatemala">Guatemala</option>
                <option className="form__option" value="Guinea">Guinea</option>
                <option className="form__option" value="Guinea-bissau">Guinea-bissau</option>
                <option className="form__option" value="Guyana">Guyana</option>
                <option className="form__option" value="Haiti">Haiti</option>
                <option className="form__option" value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald
                  Islands
                </option>
                <option className="form__option" value="Holy See (Vatican City State)">Holy See (Vatican City State)
                </option>
                <option className="form__option" value="Honduras">Honduras</option>
                <option className="form__option" value="Hong Kong">Hong Kong</option>
                <option className="form__option" value="Hungary">Hungary</option>
                <option className="form__option" value="Iceland">Iceland</option>
                <option className="form__option" value="India">India</option>
                <option className="form__option" value="Indonesia">Indonesia</option>
                <option className="form__option" value="Iran, Islamic Republic of">Iran, Islamic Republic of</option>
                <option className="form__option" value="Iraq">Iraq</option>
                <option className="form__option" value="Ireland">Ireland</option>
                <option className="form__option" value="Israel">Israel</option>
                <option className="form__option" value="Italy">Italy</option>
                <option className="form__option" value="Jamaica">Jamaica</option>
                <option className="form__option" value="Japan">Japan</option>
                <option className="form__option" value="Jordan">Jordan</option>
                <option className="form__option" value="Kazakhstan">Kazakhstan</option>
                <option className="form__option" value="Kenya">Kenya</option>
                <option className="form__option" value="Kiribati">Kiribati</option>
                <option className="form__option" value="Korea, Democratic People's Republic of">Korea, Democratic
                  People's Republic of
                </option>
                <option className="form__option" value="Korea, Republic of">Korea, Republic of</option>
                <option className="form__option" value="Kuwait">Kuwait</option>
                <option className="form__option" value="Kyrgyzstan">Kyrgyzstan</option>
                <option className="form__option" value="Lao People's Democratic Republic">Lao People's Democratic
                  Republic
                </option>
                <option className="form__option" value="Latvia">Latvia</option>
                <option className="form__option" value="Lebanon">Lebanon</option>
                <option className="form__option" value="Lesotho">Lesotho</option>
                <option className="form__option" value="Liberia">Liberia</option>
                <option className="form__option" value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
                <option className="form__option" value="Liechtenstein">Liechtenstein</option>
                <option className="form__option" value="Lithuania">Lithuania</option>
                <option className="form__option" value="Luxembourg">Luxembourg</option>
                <option className="form__option" value="Macao">Macao</option>
                <option className="form__option" value="Macedonia, The Former Yugoslav Republic of">Macedonia, The
                  Former Yugoslav Republic of
                </option>
                <option className="form__option" value="Madagascar">Madagascar</option>
                <option className="form__option" value="Malawi">Malawi</option>
                <option className="form__option" value="Malaysia">Malaysia</option>
                <option className="form__option" value="Maldives">Maldives</option>
                <option className="form__option" value="Mali">Mali</option>
                <option className="form__option" value="Malta">Malta</option>
                <option className="form__option" value="Marshall Islands">Marshall Islands</option>
                <option className="form__option" value="Martinique">Martinique</option>
                <option className="form__option" value="Mauritania">Mauritania</option>
                <option className="form__option" value="Mauritius">Mauritius</option>
                <option className="form__option" value="Mayotte">Mayotte</option>
                <option className="form__option" value="Mexico">Mexico</option>
                <option className="form__option" value="Micronesia, Federated States of">Micronesia, Federated States
                  of
                </option>
                <option className="form__option" value="Moldova, Republic of">Moldova, Republic of</option>
                <option className="form__option" value="Monaco">Monaco</option>
                <option className="form__option" value="Mongolia">Mongolia</option>
                <option className="form__option" value="Montserrat">Montserrat</option>
                <option className="form__option" value="Morocco">Morocco</option>
                <option className="form__option" value="Mozambique">Mozambique</option>
                <option className="form__option" value="Myanmar">Myanmar</option>
                <option className="form__option" value="Namibia">Namibia</option>
                <option className="form__option" value="Nauru">Nauru</option>
                <option className="form__option" value="Nepal">Nepal</option>
                <option className="form__option" value="Netherlands">Netherlands</option>
                <option className="form__option" value="Netherlands Antilles">Netherlands Antilles</option>
                <option className="form__option" value="New Caledonia">New Caledonia</option>
                <option className="form__option" value="New Zealand">New Zealand</option>
                <option className="form__option" value="Nicaragua">Nicaragua</option>
                <option className="form__option" value="Niger">Niger</option>
                <option className="form__option" value="Nigeria">Nigeria</option>
                <option className="form__option" value="Niue">Niue</option>
                <option className="form__option" value="Norfolk Island">Norfolk Island</option>
                <option className="form__option" value="Northern Mariana Islands">Northern Mariana Islands</option>
                <option className="form__option" value="Norway">Norway</option>
                <option className="form__option" value="Oman">Oman</option>
                <option className="form__option" value="Pakistan">Pakistan</option>
                <option className="form__option" value="Palau">Palau</option>
                <option className="form__option" value="Palestinian Territory, Occupied">Palestinian Territory,
                  Occupied
                </option>
                <option className="form__option" value="Panama">Panama</option>
                <option className="form__option" value="Papua New Guinea">Papua New Guinea</option>
                <option className="form__option" value="Paraguay">Paraguay</option>
                <option className="form__option" value="Peru">Peru</option>
                <option className="form__option" value="Philippines">Philippines</option>
                <option className="form__option" value="Pitcairn">Pitcairn</option>
                <option className="form__option" value="Poland">Poland</option>
                <option className="form__option" value="Portugal">Portugal</option>
                <option className="form__option" value="Puerto Rico">Puerto Rico</option>
                <option className="form__option" value="Qatar">Qatar</option>
                <option className="form__option" value="Reunion">Reunion</option>
                <option className="form__option" value="Romania">Romania</option>
                <option className="form__option" value="Russian Federation">Russian Federation</option>
                <option className="form__option" value="Rwanda">Rwanda</option>
                <option className="form__option" value="Saint Helena">Saint Helena</option>
                <option className="form__option" value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                <option className="form__option" value="Saint Lucia">Saint Lucia</option>
                <option className="form__option" value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                <option className="form__option" value="Saint Vincent and The Grenadines">Saint Vincent and The
                  Grenadines
                </option>
                <option className="form__option" value="Samoa">Samoa</option>
                <option className="form__option" value="San Marino">San Marino</option>
                <option className="form__option" value="Sao Tome and Principe">Sao Tome and Principe</option>
                <option className="form__option" value="Saudi Arabia">Saudi Arabia</option>
                <option className="form__option" value="Senegal">Senegal</option>
                <option className="form__option" value="Serbia and Montenegro">Serbia and Montenegro</option>
                <option className="form__option" value="Seychelles">Seychelles</option>
                <option className="form__option" value="Sierra Leone">Sierra Leone</option>
                <option className="form__option" value="Singapore">Singapore</option>
                <option className="form__option" value="Slovakia">Slovakia</option>
                <option className="form__option" value="Slovenia">Slovenia</option>
                <option className="form__option" value="Solomon Islands">Solomon Islands</option>
                <option className="form__option" value="Somalia">Somalia</option>
                <option className="form__option" value="South Africa">South Africa</option>
                <option className="form__option" value="South Georgia and The South Sandwich Islands">South Georgia and
                  The South Sandwich
                  Islands
                </option>
                <option className="form__option" value="Spain">Spain</option>
                <option className="form__option" value="Sri Lanka">Sri Lanka</option>
                <option className="form__option" value="Sudan">Sudan</option>
                <option className="form__option" value="Suriname">Suriname</option>
                <option className="form__option" value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
                <option className="form__option" value="Swaziland">Swaziland</option>
                <option className="form__option" value="Sweden">Sweden</option>
                <option className="form__option" value="Switzerland">Switzerland</option>
                <option className="form__option" value="Syrian Arab Republic">Syrian Arab Republic</option>
                <option className="form__option" value="Taiwan, Province of China">Taiwan, Province of China</option>
                <option className="form__option" value="Tajikistan">Tajikistan</option>
                <option className="form__option" value="Tanzania, United Republic of">Tanzania, United Republic of
                </option>
                <option className="form__option" value="Thailand">Thailand</option>
                <option className="form__option" value="Timor-leste">Timor-leste</option>
                <option className="form__option" value="Togo">Togo</option>
                <option className="form__option" value="Tokelau">Tokelau</option>
                <option className="form__option" value="Tonga">Tonga</option>
                <option className="form__option" value="Trinidad and Tobago">Trinidad and Tobago</option>
                <option className="form__option" value="Tunisia">Tunisia</option>
                <option className="form__option" value="Turkey">Turkey</option>
                <option className="form__option" value="Turkmenistan">Turkmenistan</option>
                <option className="form__option" value="Turks and Caicos Islands">Turks and Caicos Islands</option>
                <option className="form__option" value="Tuvalu">Tuvalu</option>
                <option className="form__option" value="Uganda">Uganda</option>
                <option className="form__option" value="Ukraine">Ukraine</option>
                <option className="form__option" value="United Arab Emirates">United Arab Emirates</option>
                <option className="form__option" value="United Kingdom">United Kingdom</option>
                <option className="form__option" value="United States">United States</option>
                <option className="form__option" value="United States Minor Outlying Islands">United States Minor
                  Outlying Islands
                </option>
                <option className="form__option" value="Uruguay">Uruguay</option>
                <option className="form__option" value="Uzbekistan">Uzbekistan</option>
                <option className="form__option" value="Vanuatu">Vanuatu</option>
                <option className="form__option" value="Venezuela">Venezuela</option>
                <option className="form__option" value="Viet Nam">Viet Nam</option>
                <option className="form__option" value="Virgin Islands, British">Virgin Islands, British</option>
                <option className="form__option" value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
                <option className="form__option" value="Wallis and Futuna">Wallis and Futuna</option>
                <option className="form__option" value="Western Sahara">Western Sahara</option>
                <option className="form__option" value="Yemen">Yemen</option>
                <option className="form__option" value="Zambia">Zambia</option>
                <option className="form__option" value="Zimbabwe">Zimbabwe</option>
              </select>
              <input
                type="number"
                name="zip"
                className="form__input form__input_type_zip"
                placeholder="ZIP"
                required
                value={values.zip || ''}
                onChange={handleChange}
              />
            </div>
          </label>
          <button
            className="form__button"
            onClick={() => {
              history.push(`${path}/billing`)
            }}>Continue
          </button>
        </div>
      </Route>
      <Route path={`${path}/billing`}>
        <h2 className="form__title">Billing Information</h2>
        <button
          type="button"
          className="form__button-same"
          onClick={handlePastSameInfo}
        >Same as shipping
        </button>
        <div className="form__page-container">
          <label className="form__label">Billing Contact
            <input
              type="text"
              name="billingName"
              className="form__input form__input_top-margin-l"
              placeholder="Full Name"
              required
              value={values.billingName || ''}
              onChange={handleChange}
            />
            <input
              type="email"
              name="billingEmail"
              className="form__input form__input_top-margin-m"
              placeholder="Email Address"
              required
              value={values.billingEmail || ''}
              onChange={handleChange}
            />
          </label>
          <label className="form__label">Billing Address
            <input
              type="text"
              name="billingAddress"
              className="form__input form__input_top-margin-l"
              placeholder="Street Address"
              required
              value={values.billingAddress || ''}
              onChange={handleChange}
            />
            <input
              type="text"
              name="billingAdditionalInfo"
              className="form__input form__input_top-margin-m"
              placeholder="Apt, Suite, Bldg, Gate Code. (optional)"
              value={values.billingAdditionalInfo || ''}
              onChange={handleChange}
            />
            <div className="form__input-container form__input-container_type_inputs">
              <input
                type="text"
                name="billingCity"
                className="form__input form__input_type_city"
                placeholder="City"
                required
                value={values.billingCity || ''}
                onChange={handleChange}
              />
              <button
                type="button"
                className="form__button-inside-input"
                onClick={() => handleClick('billingCity')}
              />
            </div>
            <div className="form__input-container form__input-container_type_inputs">
              <select
                className="form__select"
                name="billingCountry"
                value={values.billingCountry || ''}
                onChange={handleChange}
                required
              >
                <option value="" disabled hidden>Country</option>
                <option className="form__option" value="Afghanistan">Afghanistan</option>
                <option className="form__option" value="Albania">Albania</option>
                <option className="form__option" value="Algeria">Algeria</option>
                <option className="form__option" value="American Samoa">American Samoa</option>
                <option className="form__option" value="Andorra">Andorra</option>
                <option className="form__option" value="Angola">Angola</option>
                <option className="form__option" value="Anguilla">Anguilla</option>
                <option className="form__option" value="Antarctica">Antarctica</option>
                <option className="form__option" value="Antigua and Barbuda">Antigua and Barbuda</option>
                <option className="form__option" value="Argentina">Argentina</option>
                <option className="form__option" value="Armenia">Armenia</option>
                <option className="form__option" value="Aruba">Aruba</option>
                <option className="form__option" value="Australia">Australia</option>
                <option className="form__option" value="Austria">Austria</option>
                <option className="form__option" value="Azerbaijan">Azerbaijan</option>
                <option className="form__option" value="Bahamas">Bahamas</option>
                <option className="form__option" value="Bahrain">Bahrain</option>
                <option className="form__option" value="Bangladesh">Bangladesh</option>
                <option className="form__option" value="Barbados">Barbados</option>
                <option className="form__option" value="Belarus">Belarus</option>
                <option className="form__option" value="Belgium">Belgium</option>
                <option className="form__option" value="Belize">Belize</option>
                <option className="form__option" value="Benin">Benin</option>
                <option className="form__option" value="Bermuda">Bermuda</option>
                <option className="form__option" value="Bhutan">Bhutan</option>
                <option className="form__option" value="Bolivia">Bolivia</option>
                <option className="form__option" value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                <option className="form__option" value="Botswana">Botswana</option>
                <option className="form__option" value="Bouvet Island">Bouvet Island</option>
                <option className="form__option" value="Brazil">Brazil</option>
                <option className="form__option" value="British Indian Ocean Territory">British Indian Ocean Territory
                </option>
                <option className="form__option" value="Brunei Darussalam">Brunei Darussalam</option>
                <option className="form__option" value="Bulgaria">Bulgaria</option>
                <option className="form__option" value="Burkina Faso">Burkina Faso</option>
                <option className="form__option" value="Burundi">Burundi</option>
                <option className="form__option" value="Cambodia">Cambodia</option>
                <option className="form__option" value="Cameroon">Cameroon</option>
                <option className="form__option" value="Canada">Canada</option>
                <option className="form__option" value="Cape Verde">Cape Verde</option>
                <option className="form__option" value="Cayman Islands">Cayman Islands</option>
                <option className="form__option" value="Central African Republic">Central African Republic</option>
                <option className="form__option" value="Chad">Chad</option>
                <option className="form__option" value="Chile">Chile</option>
                <option className="form__option" value="China">China</option>
                <option className="form__option" value="Christmas Island">Christmas Island</option>
                <option className="form__option" value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                <option className="form__option" value="Colombia">Colombia</option>
                <option className="form__option" value="Comoros">Comoros</option>
                <option className="form__option" value="Congo">Congo</option>
                <option className="form__option" value="Congo, The Democratic Republic of The">Congo, The Democratic
                  Republic of The
                </option>
                <option className="form__option" value="Cook Islands">Cook Islands</option>
                <option className="form__option" value="Costa Rica">Costa Rica</option>
                <option className="form__option" value="Cote D'ivoire">Cote D'ivoire</option>
                <option className="form__option" value="Croatia">Croatia</option>
                <option className="form__option" value="Cuba">Cuba</option>
                <option className="form__option" value="Cyprus">Cyprus</option>
                <option className="form__option" value="Czech Republic">Czech Republic</option>
                <option className="form__option" value="Denmark">Denmark</option>
                <option className="form__option" value="Djibouti">Djibouti</option>
                <option className="form__option" value="Dominica">Dominica</option>
                <option className="form__option" value="Dominican Republic">Dominican Republic</option>
                <option className="form__option" value="Ecuador">Ecuador</option>
                <option className="form__option" value="Egypt">Egypt</option>
                <option className="form__option" value="El Salvador">El Salvador</option>
                <option className="form__option" value="Equatorial Guinea">Equatorial Guinea</option>
                <option className="form__option" value="Eritrea">Eritrea</option>
                <option className="form__option" value="Estonia">Estonia</option>
                <option className="form__option" value="Ethiopia">Ethiopia</option>
                <option className="form__option" value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)
                </option>
                <option className="form__option" value="Faroe Islands">Faroe Islands</option>
                <option className="form__option" value="Fiji">Fiji</option>
                <option className="form__option" value="Finland">Finland</option>
                <option className="form__option" value="France">France</option>
                <option className="form__option" value="French Guiana">French Guiana</option>
                <option className="form__option" value="French Polynesia">French Polynesia</option>
                <option className="form__option" value="French Southern Territories">French Southern Territories
                </option>
                <option className="form__option" value="Gabon">Gabon</option>
                <option className="form__option" value="Gambia">Gambia</option>
                <option className="form__option" value="Georgia">Georgia</option>
                <option className="form__option" value="Germany">Germany</option>
                <option className="form__option" value="Ghana">Ghana</option>
                <option className="form__option" value="Gibraltar">Gibraltar</option>
                <option className="form__option" value="Greece">Greece</option>
                <option className="form__option" value="Greenland">Greenland</option>
                <option className="form__option" value="Grenada">Grenada</option>
                <option className="form__option" value="Guadeloupe">Guadeloupe</option>
                <option className="form__option" value="Guam">Guam</option>
                <option className="form__option" value="Guatemala">Guatemala</option>
                <option className="form__option" value="Guinea">Guinea</option>
                <option className="form__option" value="Guinea-bissau">Guinea-bissau</option>
                <option className="form__option" value="Guyana">Guyana</option>
                <option className="form__option" value="Haiti">Haiti</option>
                <option className="form__option" value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald
                  Islands
                </option>
                <option className="form__option" value="Holy See (Vatican City State)">Holy See (Vatican City State)
                </option>
                <option className="form__option" value="Honduras">Honduras</option>
                <option className="form__option" value="Hong Kong">Hong Kong</option>
                <option className="form__option" value="Hungary">Hungary</option>
                <option className="form__option" value="Iceland">Iceland</option>
                <option className="form__option" value="India">India</option>
                <option className="form__option" value="Indonesia">Indonesia</option>
                <option className="form__option" value="Iran, Islamic Republic of">Iran, Islamic Republic of</option>
                <option className="form__option" value="Iraq">Iraq</option>
                <option className="form__option" value="Ireland">Ireland</option>
                <option className="form__option" value="Israel">Israel</option>
                <option className="form__option" value="Italy">Italy</option>
                <option className="form__option" value="Jamaica">Jamaica</option>
                <option className="form__option" value="Japan">Japan</option>
                <option className="form__option" value="Jordan">Jordan</option>
                <option className="form__option" value="Kazakhstan">Kazakhstan</option>
                <option className="form__option" value="Kenya">Kenya</option>
                <option className="form__option" value="Kiribati">Kiribati</option>
                <option className="form__option" value="Korea, Democratic People's Republic of">Korea, Democratic
                  People's Republic of
                </option>
                <option className="form__option" value="Korea, Republic of">Korea, Republic of</option>
                <option className="form__option" value="Kuwait">Kuwait</option>
                <option className="form__option" value="Kyrgyzstan">Kyrgyzstan</option>
                <option className="form__option" value="Lao People's Democratic Republic">Lao People's Democratic
                  Republic
                </option>
                <option className="form__option" value="Latvia">Latvia</option>
                <option className="form__option" value="Lebanon">Lebanon</option>
                <option className="form__option" value="Lesotho">Lesotho</option>
                <option className="form__option" value="Liberia">Liberia</option>
                <option className="form__option" value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
                <option className="form__option" value="Liechtenstein">Liechtenstein</option>
                <option className="form__option" value="Lithuania">Lithuania</option>
                <option className="form__option" value="Luxembourg">Luxembourg</option>
                <option className="form__option" value="Macao">Macao</option>
                <option className="form__option" value="Macedonia, The Former Yugoslav Republic of">Macedonia, The
                  Former Yugoslav Republic of
                </option>
                <option className="form__option" value="Madagascar">Madagascar</option>
                <option className="form__option" value="Malawi">Malawi</option>
                <option className="form__option" value="Malaysia">Malaysia</option>
                <option className="form__option" value="Maldives">Maldives</option>
                <option className="form__option" value="Mali">Mali</option>
                <option className="form__option" value="Malta">Malta</option>
                <option className="form__option" value="Marshall Islands">Marshall Islands</option>
                <option className="form__option" value="Martinique">Martinique</option>
                <option className="form__option" value="Mauritania">Mauritania</option>
                <option className="form__option" value="Mauritius">Mauritius</option>
                <option className="form__option" value="Mayotte">Mayotte</option>
                <option className="form__option" value="Mexico">Mexico</option>
                <option className="form__option" value="Micronesia, Federated States of">Micronesia, Federated States
                  of
                </option>
                <option className="form__option" value="Moldova, Republic of">Moldova, Republic of</option>
                <option className="form__option" value="Monaco">Monaco</option>
                <option className="form__option" value="Mongolia">Mongolia</option>
                <option className="form__option" value="Montserrat">Montserrat</option>
                <option className="form__option" value="Morocco">Morocco</option>
                <option className="form__option" value="Mozambique">Mozambique</option>
                <option className="form__option" value="Myanmar">Myanmar</option>
                <option className="form__option" value="Namibia">Namibia</option>
                <option className="form__option" value="Nauru">Nauru</option>
                <option className="form__option" value="Nepal">Nepal</option>
                <option className="form__option" value="Netherlands">Netherlands</option>
                <option className="form__option" value="Netherlands Antilles">Netherlands Antilles</option>
                <option className="form__option" value="New Caledonia">New Caledonia</option>
                <option className="form__option" value="New Zealand">New Zealand</option>
                <option className="form__option" value="Nicaragua">Nicaragua</option>
                <option className="form__option" value="Niger">Niger</option>
                <option className="form__option" value="Nigeria">Nigeria</option>
                <option className="form__option" value="Niue">Niue</option>
                <option className="form__option" value="Norfolk Island">Norfolk Island</option>
                <option className="form__option" value="Northern Mariana Islands">Northern Mariana Islands</option>
                <option className="form__option" value="Norway">Norway</option>
                <option className="form__option" value="Oman">Oman</option>
                <option className="form__option" value="Pakistan">Pakistan</option>
                <option className="form__option" value="Palau">Palau</option>
                <option className="form__option" value="Palestinian Territory, Occupied">Palestinian Territory,
                  Occupied
                </option>
                <option className="form__option" value="Panama">Panama</option>
                <option className="form__option" value="Papua New Guinea">Papua New Guinea</option>
                <option className="form__option" value="Paraguay">Paraguay</option>
                <option className="form__option" value="Peru">Peru</option>
                <option className="form__option" value="Philippines">Philippines</option>
                <option className="form__option" value="Pitcairn">Pitcairn</option>
                <option className="form__option" value="Poland">Poland</option>
                <option className="form__option" value="Portugal">Portugal</option>
                <option className="form__option" value="Puerto Rico">Puerto Rico</option>
                <option className="form__option" value="Qatar">Qatar</option>
                <option className="form__option" value="Reunion">Reunion</option>
                <option className="form__option" value="Romania">Romania</option>
                <option className="form__option" value="Russian Federation">Russian Federation</option>
                <option className="form__option" value="Rwanda">Rwanda</option>
                <option className="form__option" value="Saint Helena">Saint Helena</option>
                <option className="form__option" value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                <option className="form__option" value="Saint Lucia">Saint Lucia</option>
                <option className="form__option" value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                <option className="form__option" value="Saint Vincent and The Grenadines">Saint Vincent and The
                  Grenadines
                </option>
                <option className="form__option" value="Samoa">Samoa</option>
                <option className="form__option" value="San Marino">San Marino</option>
                <option className="form__option" value="Sao Tome and Principe">Sao Tome and Principe</option>
                <option className="form__option" value="Saudi Arabia">Saudi Arabia</option>
                <option className="form__option" value="Senegal">Senegal</option>
                <option className="form__option" value="Serbia and Montenegro">Serbia and Montenegro</option>
                <option className="form__option" value="Seychelles">Seychelles</option>
                <option className="form__option" value="Sierra Leone">Sierra Leone</option>
                <option className="form__option" value="Singapore">Singapore</option>
                <option className="form__option" value="Slovakia">Slovakia</option>
                <option className="form__option" value="Slovenia">Slovenia</option>
                <option className="form__option" value="Solomon Islands">Solomon Islands</option>
                <option className="form__option" value="Somalia">Somalia</option>
                <option className="form__option" value="South Africa">South Africa</option>
                <option className="form__option" value="South Georgia and The South Sandwich Islands">South Georgia and
                  The South Sandwich
                  Islands
                </option>
                <option className="form__option" value="Spain">Spain</option>
                <option className="form__option" value="Sri Lanka">Sri Lanka</option>
                <option className="form__option" value="Sudan">Sudan</option>
                <option className="form__option" value="Suriname">Suriname</option>
                <option className="form__option" value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
                <option className="form__option" value="Swaziland">Swaziland</option>
                <option className="form__option" value="Sweden">Sweden</option>
                <option className="form__option" value="Switzerland">Switzerland</option>
                <option className="form__option" value="Syrian Arab Republic">Syrian Arab Republic</option>
                <option className="form__option" value="Taiwan, Province of China">Taiwan, Province of China</option>
                <option className="form__option" value="Tajikistan">Tajikistan</option>
                <option className="form__option" value="Tanzania, United Republic of">Tanzania, United Republic of
                </option>
                <option className="form__option" value="Thailand">Thailand</option>
                <option className="form__option" value="Timor-leste">Timor-leste</option>
                <option className="form__option" value="Togo">Togo</option>
                <option className="form__option" value="Tokelau">Tokelau</option>
                <option className="form__option" value="Tonga">Tonga</option>
                <option className="form__option" value="Trinidad and Tobago">Trinidad and Tobago</option>
                <option className="form__option" value="Tunisia">Tunisia</option>
                <option className="form__option" value="Turkey">Turkey</option>
                <option className="form__option" value="Turkmenistan">Turkmenistan</option>
                <option className="form__option" value="Turks and Caicos Islands">Turks and Caicos Islands</option>
                <option className="form__option" value="Tuvalu">Tuvalu</option>
                <option className="form__option" value="Uganda">Uganda</option>
                <option className="form__option" value="Ukraine">Ukraine</option>
                <option className="form__option" value="United Arab Emirates">United Arab Emirates</option>
                <option className="form__option" value="United Kingdom">United Kingdom</option>
                <option className="form__option" value="United States">United States</option>
                <option className="form__option" value="United States Minor Outlying Islands">United States Minor
                  Outlying Islands
                </option>
                <option className="form__option" value="Uruguay">Uruguay</option>
                <option className="form__option" value="Uzbekistan">Uzbekistan</option>
                <option className="form__option" value="Vanuatu">Vanuatu</option>
                <option className="form__option" value="Venezuela">Venezuela</option>
                <option className="form__option" value="Viet Nam">Viet Nam</option>
                <option className="form__option" value="Virgin Islands, British">Virgin Islands, British</option>
                <option className="form__option" value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
                <option className="form__option" value="Wallis and Futuna">Wallis and Futuna</option>
                <option className="form__option" value="Western Sahara">Western Sahara</option>
                <option className="form__option" value="Yemen">Yemen</option>
                <option className="form__option" value="Zambia">Zambia</option>
                <option className="form__option" value="Zimbabwe">Zimbabwe</option>
              </select>
              <input
                type="number"
                name="billingZip"
                className="form__input form__input_type_zip"
                placeholder="ZIP"
                required
                value={values.billingZip || ''}
                onChange={handleChange}
              />
            </div>
          </label>
          <button
            className="form__button"
            type="button"
            onClick={() => {
              history.push(`${path}/payment`)
            }}>Continue
          </button>
        </div>
      </Route>
      <Route path={`${path}/payment`}>
        <div className='form__input-container'>
          <button>Pay Securely</button>
          <p>payment</p>
        </div>
      </Route>
    </form>
  )
}

export default CustomerForm;
