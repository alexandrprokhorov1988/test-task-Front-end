import React from 'react';
import {useHistory} from 'react-router-dom';
import {useFormValidation} from '../../hooks/useFormValidation';
import Form from '../../components/Form/From';
import {CurrentUserContext} from "../../contexts/CurrentUserContext";

function BillingForm({ onGeolocation, formValid, onHandleValid, data: country, onSingleFormSubmit, path }) {
  const { values, handleChange, errors, isValid, handleChangeValues, handleChangeErrors } = useFormValidation();
  const history = useHistory();
  const currentUser = React.useContext(CurrentUserContext);

  function handleClick(type) {
    onGeolocation()
      .then((res) => {
        handleChangeValues({
            [type]: res.address.state
          }
        );
        handleChangeErrors({
          [type]: ''
        });
      })
      .catch((err) => {
        console.log(err)
      });
  }

  function handlePastSameInfo() {
    handleChangeValues({
      'billingCity': currentUser.city,
      'billingName': currentUser.name,
      'billingAddress': currentUser.address,
      'billingAdditionalInfo': currentUser.additionalInfo,
      'billingCountry': currentUser.country,
      'billingZip': currentUser.zip,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSingleFormSubmit(values);
    onHandleValid({ 'billing': isValid });
    history.push(path);
  }

  return (
    <Form
      onSubmit={handleSubmit}
    >
      <div className="form__title-container">
        <h2 className="form__title">Billing Information</h2>
        <button
          type="button"
          className="form__button-same"
          onClick={handlePastSameInfo}
          title="Add info from first page"
        >Same as shipping
        </button>
      </div>
      <div className="form__page-container">
        <label className="form__label">Billing Contact
          <div className="form__input-err-container">
              <span
                className={`form__error ${!errors.billingName ? 'form__error_hide' : ''}`}>{errors.billingName || ''}</span>
            <input
              type="text"
              name="billingName"
              className="form__input form__input_top-margin-l"
              placeholder="Full Name"
              required
              minLength="2"
              maxLength="200"
              pattern="^[а-яёА-ЯЁa-zA-Z0-9-\s]+$"
              value={values.billingName || ''}
              onChange={handleChange}
            />
          </div>
          <div className="form__input-err-container">
              <span
                className={`form__error ${!errors.billingEmail ? 'form__error_hide' : ''}`}>{errors.billingEmail || ''}</span>
            <input
              type="email"
              name="billingEmail"
              className="form__input form__input_top-margin-m"
              placeholder="Email Address"
              required
              value={values.billingEmail || ''}
              onChange={handleChange}
            />
          </div>
        </label>
        <label className="form__label">Billing Address
          <div className="form__input-err-container">
              <span
                className={`form__error ${!errors.billingAddress ? 'form__error_hide' : ''}`}>{errors.billingAddress || ''}</span>
            <input
              type="text"
              name="billingAddress"
              className="form__input form__input_top-margin-l"
              placeholder="Street Address"
              required
              minLength="2"
              maxLength="200"
              pattern="^[а-яёА-ЯЁa-zA-Z0-9-\s]+$"
              value={values.billingAddress || ''}
              onChange={handleChange}
            />
          </div>
          <div className="form__input-err-container">
              <span
                className={`form__error ${!errors.billingAdditionalInfo ? 'form__error_hide' : ''}`}>{errors.billingAdditionalInfo || ''}</span>
            <input
              type="text"
              name="billingAdditionalInfo"
              minLength="2"
              maxLength="200"
              pattern="^[а-яёА-ЯЁa-zA-Z0-9-\s]+$"
              className="form__input form__input_top-margin-m"
              placeholder="Apt, Suite, Bldg, Gate Code. (optional)"
              value={values.billingAdditionalInfo || ''}
              onChange={handleChange}
            />
          </div>
          <div className="form__input-err-container">
                <span
                  className={`form__error ${!errors.billingCity ? 'form__error_hide' : ''}`}>{errors.billingCity || ''}</span>
            <div className="form__input-container form__input-container_type_inputs">
              <input
                type="text"
                name="billingCity"
                className="form__input form__input_type_city"
                placeholder="City"
                required
                minLength="2"
                maxLength="200"
                pattern="^[а-яёА-ЯЁa-zA-Z0-9-\s]+$"
                value={values.billingCity || ''}
                onChange={handleChange}
              />
            </div>
            <button
              type="button"
              title="Auto city detect"
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
              {
                country.map((item, index) => (
                  <option key={index} className="form__option" value={item.name}>{item.name}</option>
                ))
              }
            </select>
            <div className="form__input-err-container">
                <span
                  className={`form__error ${!errors.billingZip ? 'form__error_hide' : ''}`}>{errors.billingZip || ''}</span>
              <input
                type="number"
                name="billingZip"
                className="form__input form__input_type_zip"
                placeholder="ZIP"
                required
                pattern="^\d+$"
                value={values.billingZip || ''}
                onChange={handleChange}
              />
            </div>
          </div>
        </label>
        <button
          className="form__button"
          type="submit"
          title="Continue"
          disabled={!isValid}
        >Continue
        </button>
      </div>
    </Form>
  )
}

export default BillingForm;
