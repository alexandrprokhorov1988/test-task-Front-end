import React from 'react';
import './Cart.css';
import CustomerForm from '../../components/CustomerForm/CustomerForm';
import OrderInfo from '../../components/OrderInfo/OrderInfo';
import Products from '../../components/Products/Products';

function Cart({ onSubmit, orderComplete, onOrderComplete, onHandleValid, formValid, onGeolocation, onHandlePrint, cart, data, onSingleFormSubmit }) {

  return (
    <section className="cart">
      {orderComplete ?
        <OrderInfo
          onHandlePrint={onHandlePrint}
        /> :
        <CustomerForm
          onSubmit={onSubmit}
          onOrderComplete={onOrderComplete}
          onHandleValid={onHandleValid}
          onGeolocation={onGeolocation}
          formValid={formValid}
          data={data}
          onSingleFormSubmit={onSingleFormSubmit}
        />
      }
      <Products
        orderComplete={orderComplete}
        cart={cart}
      />
    </section>
  )
}

export default Cart;
