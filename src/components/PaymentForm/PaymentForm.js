import React from 'react';
import {useHistory} from 'react-router-dom';
import {useFormValidation} from '../../hooks/useFormValidation';
import Form from '../../components/Form/From';
import {CurrentUserContext} from "../../contexts/CurrentUserContext";

function PaymentForm({ formValid, onHandleValid, onOrderComplete, onSingleFormSubmit, path }) {
  const { values, handleChange, errors, isValid } = useFormValidation();
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    if(isValid && formValid.shipping && formValid.billing){
      onSingleFormSubmit(values);
      onOrderComplete();
      history.push(path);
    }
  }

  return (
    <Form
      onSubmit={handleSubmit}
    >
      <h2 className="form__title">Payment</h2>
      <p className="form__subtitle">This is a secure 128-bit SSL encrypted payment</p>
      <div className='form__page-container'>
        <label className="form__label">Cardholder Name
          <div className="form__input-err-container">
              <span
                className={`form__error ${!errors.cardHolderName ? 'form__error_hide' : ''}`}>{errors.cardHolderName || ''}</span>
            <input
              type="text"
              name="cardHolderName"
              className="form__input form__input_top-margin-l"
              placeholder="Name as it appears on your card"
              required
              minLength="2"
              maxLength="200"
              pattern="^[а-яёА-ЯЁa-zA-Z\s]+$"
              value={values.cardHolderName || ''}
              onChange={handleChange}
            />
          </div>
        </label>
        <label className="form__label">Card Number
          <div className="form__input-err-container">
              <span
                className={`form__error ${!errors.cardNumber ? 'form__error_hide' : ''}`}>{errors.cardNumber || ''}</span>
            <input
              type="number"
              name="cardNumber"
              className="form__input form__input_top-margin-l"
              placeholder="XXXX XXXX XXXX XXXX XXXX"
              required
              minLength="2"
              maxLength="25"
              pattern="^\d+$"
              value={values.cardNumber || ''}
              onChange={handleChange}
            />
          </div>
        </label>
        <div className="form__input-container">
          <label className="form__label">Expire Date
            <div className="form__input-err-container">
                <span
                  className={`form__error ${!errors.cardExpiresDate ? 'form__error_hide' : ''}`}>{errors.cardExpiresDate || ''}</span>
              <input
                type="text"
                name="cardExpiresDate"
                className="form__input form__input_top-margin-l form__input_width_l form__input_right-margin_l"
                placeholder="MM / YY"
                required
                minLength="2"
                maxLength="25"
                pattern="^[\d\/]+$"
                value={values.cardExpiresDate || ''}
                onChange={handleChange}
              />
            </div>
          </label>
          <label className="form__label">Security Code
            <div className="form__input-err-container">
                <span
                  className={`form__error ${!errors.securityCode ? 'form__error_hide' : ''}`}>{errors.securityCode || ''}</span>
              <input
                type="text"
                name="securityCode"
                className="form__input form__input_top-margin-l form__input_width_l"
                required
                value={values.securityCode || ''}
                onChange={handleChange}
              />
            </div>
          </label>
        </div>
        <button
          type="submit"
          disabled={!isValid}
          className="form__button"
          name="submit"
        >Pay Securely
        </button>
      </div>

    </Form>
  )
}

export default PaymentForm;
