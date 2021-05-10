import React from 'react';
import {useHistory} from 'react-router-dom';
import {useFormValidation} from '../../hooks/useFormValidation';
import Form from '../../components/Form/From';

function ShippingForm({ onGeolocation, formValid, onHandleValid, data: country, onSingleFormSubmit, path }) {
  const { values, handleChange, errors, isValid, handleChangeValues, handleChangeErrors } = useFormValidation();
  const history = useHistory();

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

  function handleSubmit(e) {
    e.preventDefault();
    onSingleFormSubmit(values);
    onHandleValid({ 'shipping': isValid });
    history.push(path);
  }

  return (
    <Form
      onSubmit={handleSubmit}
    >
      <h2 className="form__title">Shipping Info</h2>
      <div className="form__page-container">
        <label className="form__label">Recipient
          <div className="form__input-err-container">
            <span className={`form__error ${!errors.name ? 'form__error_hide' : ''}`}>{errors.name || ''}</span>
            <input
              type="text"
              name="name"
              className="form__input form__input_top-margin-l"
              placeholder="Full Name"
              required
              minLength="2"
              maxLength="200"
              pattern="^[а-яёА-ЯЁa-zA-Z0-9-\s]+$"
              value={values.name || ''}
              onChange={handleChange}
            />
          </div>
          <div className="form__input-container form__input-container_type_text">
            <div className="form__input-err-container">
              <span className={`form__error ${!errors.tel ? 'form__error_hide' : ''}`}>{errors.tel || ''}</span>
              <input
                type="tel"
                name="tel"
                className="form__input"
                placeholder="Daytime Phone"
                required
                minLength="2"
                maxLength="200"
                pattern="^\d+$"
                value={values.tel || ''}
                onChange={handleChange}
              />
            </div>
            <p className="form__input-description">For delivery questions only</p>
          </div>
        </label>
        <label className="form__label">Address
          <div className="form__input-err-container">
            <span className={`form__error ${!errors.address ? 'form__error_hide' : ''}`}>{errors.address || ''}</span>
            <input
              type="text"
              name="address"
              className="form__input form__input_top-margin-l"
              placeholder="Street Address"
              required
              minLength="2"
              maxLength="200"
              pattern="^[а-яёА-ЯЁa-zA-Z0-9-\s]+$"
              value={values.address || ''}
              onChange={handleChange}
            />
          </div>
          <div className="form__input-err-container">
              <span
                className={`form__error ${!errors.additionalInfo ? 'form__error_hide' : ''}`}>{errors.additionalInfo || ''}</span>
            <input
              type="text"
              name="additionalInfo"
              className="form__input form__input_top-margin-m"
              placeholder="Apt, Suite, Bldg, Gate Code. (optional)"
              minLength="2"
              maxLength="200"
              pattern="^[а-яёА-ЯЁa-zA-Z0-9-\s,\.]+$"
              value={values.additionalInfo || ''}
              onChange={handleChange}
            />
          </div>
          <div className="form__input-err-container">
            <span className={`form__error ${!errors.city ? 'form__error_hide' : ''}`}>{errors.city || ''}</span>
            <div className="form__input-container form__input-container_type_inputs">
              <input
                type="text"
                name="city"
                className="form__input form__input_type_city"
                placeholder="City"
                required
                minLength="2"
                maxLength="200"
                pattern="^[а-яёА-ЯЁa-zA-Z0-9-\s,\.]+$"
                value={values.city || ''}
                onChange={handleChange}
              />
              <button
                type="button"
                title="Auto city detect"
                className="form__button-inside-input"
                onClick={() => handleClick('city')}
              />
            </div>
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
              {
                country.map((item, index) => (
                  <option key={index} className="form__option" value={item.name}>{item.name}</option>
                ))
              }
            </select>
            <div className="form__input-err-container">
              <span className={`form__error ${!errors.zip ? 'form__error_hide' : ''}`}>{errors.zip || ''}</span>
              <input
                type="number"
                name="zip"
                className="form__input form__input_type_zip"
                placeholder="ZIP"
                required
                pattern="^\d+$"
                value={values.zip || ''}
                onChange={handleChange}
              />
            </div>
          </div>
        </label>
        <button
          type="submit"
          className="form__button"
          title="Continue"
          disabled={!isValid}
        >Continue
        </button>
      </div>
    </Form>
  )
}

export default ShippingForm;
