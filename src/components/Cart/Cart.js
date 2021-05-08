import React from 'react';
import './Cart.css';
import CustomerForm from '../../components/CustomerForm/CustomerForm';
import OrderInfo from '../../components/OrderInfo/OrderInfo';

function Cart({ onSubmit, orderComplete, onGeolocation, city, onHandlePrint }) {

  return (
    <section className="cart">
      {orderComplete ?
        <OrderInfo
          onHandlePrint={onHandlePrint}
        /> :
        <CustomerForm
          onSubmit={onSubmit}
          onGeolocation={onGeolocation}
          city={city}
        />
      }
    </section>
  )
}

export default Cart;
