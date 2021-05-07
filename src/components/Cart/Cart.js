import React from 'react';
import './Cart.css';
import CustomerForm from '../../components/CustomerForm/CustomerForm';
import OrderInfo from '../../components/OrderInfo/OrderInfo';

function Cart({ onSubmit, orderComplete }) {

  return (
    <section className="cart">
      {orderComplete ?
        <OrderInfo/> :
        <CustomerForm onSubmit={onSubmit}/>
      }
    </section>
  )
}

export default Cart;
