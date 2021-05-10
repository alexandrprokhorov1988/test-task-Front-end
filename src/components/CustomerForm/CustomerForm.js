import React from 'react';
import './CustomerForm.css';
import {NavLink, useLocation, useRouteMatch} from 'react-router-dom';
import ShippingForm from '../../components/ShippingForm/ShippingForm';
import BillingForm from '../../components/BillingForm/BillingForm';
import PaymentForm from '../../components/PaymentForm/PaymentForm';

function CustomerForm({ onSubmit, formValid, onOrderComplete, onHandleValid, onGeolocation, data: country, onSingleFormSubmit }) {
  const { path, url } = useRouteMatch();
  const location = useLocation();

  return (
    <div className="customer-form">
      <nav className="customer-form__nav">
        <ul className="customer-form__links">
          <li className="customer-form__list">
            <NavLink
              className="customer-form__link"
              activeClassName="customer-form__link_active"
              to={`${url}/shipping`}>Shipping
            </NavLink>
          </li>
          <li className="customer-form__list">
            <NavLink
              onClick={(e) => !formValid.shipping && e.preventDefault()}
              className="customer-form__link"
              activeClassName="customer-form__link_active"
              to={`${url}/billing`}>Billing
            </NavLink>
          </li>
          <li className="customer-form__list">
            <NavLink
              onClick={(e) => !formValid.billing && e.preventDefault()}
              className="customer-form__link"
              activeClassName="customer-form__link_active"
              to={`${url}/payment`}>Payment
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className={location.pathname === `${path}/shipping` ? '' : 'customer-form_type_hide'}>
        <ShippingForm
          formValid={formValid}
          data={country}
          onGeolocation={onGeolocation}
          onSingleFormSubmit={onSingleFormSubmit}
          path={`${path}/billing`}
          onHandleValid={onHandleValid}
        />
      </div>
      <div className={location.pathname === `${path}/billing` ? '' : 'customer-form_type_hide'}>
        <BillingForm
          formValid={formValid}
          data={country}
          onGeolocation={onGeolocation}
          onSingleFormSubmit={onSingleFormSubmit}
          path={`${path}/payment`}
          onHandleValid={onHandleValid}
        />
      </div>
      <div className={location.pathname === `${path}/payment` ? '' : 'customer-form_type_hide'}>
        <PaymentForm
          onOrderComplete={onOrderComplete}
          formValid={formValid}
          data={country}
          onSingleFormSubmit={onSingleFormSubmit}
          path={`${path}/print`}
          onHandleValid={onHandleValid}
        />
      </div>
    </div>
  )
}

export default CustomerForm;


