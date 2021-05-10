import React from 'react';
import './OrderInfo.css';
import {CurrentUserContext} from "../../contexts/CurrentUserContext";

function OrderInfo({ onHandlePrint }) {
  const currentUser = React.useContext(CurrentUserContext);
  const date = new Date();
  const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date);
  const weekday = new Intl.DateTimeFormat('en', { weekday: 'long' }).format(date);
  const day = new Intl.DateTimeFormat('en', { day: 'numeric' }).format(date);
  const month = new Intl.DateTimeFormat('en', { month: 'long' }).format(date);

  return (
    <section className="order-info">
      <h3 className="order-info__title">Thank you for your order!</h3>
      <p className="order-info__order-number">Order number is: 188787788</p>
      <p className="order-info__text order-info__text_type_email">
        Your will recieve an email confirmation shortly to
        <span className="order-info__text order-info__text-accent_type_email"> {currentUser.billingEmail}</span>
      </p>
      <p className="order-info__text order-info__text_type_delivery">
        Estimated delivery Day is
        <span className="order-info__text order-info__text-accent_type_delivery"> {`${weekday} ${day} ${month} ${year} `}</span>
      </p>
      <button className="order-info__print-button" type="button" onClick={onHandlePrint}>Print Recipe</button>
    </section>
  )
}

export default OrderInfo;
