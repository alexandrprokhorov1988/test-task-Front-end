import React from 'react';
import './Cart.css';
import CustomerForm from '../../components/CustomerForm/CustomerForm';
import OrderInfo from '../../components/OrderInfo/OrderInfo';
import Products from '../../components/Products/Products';

function Cart({ onSubmit, orderComplete, onGeolocation, onHandlePrint, cart }) {

  return (
    <section className="cart">
      {orderComplete ?
        <OrderInfo
          onHandlePrint={onHandlePrint}
        /> :
        <>
          <CustomerForm
            onSubmit={onSubmit}
            onGeolocation={onGeolocation}
          />
          <Products
            cart={cart}
          />
        </>
      }
    </section>
  )
}

export default Cart;
