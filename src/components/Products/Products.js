import React from 'react';
import './Products.css';
import Product from '../../components/Product/Product';

function Products({ cart, orderComplete }) {
  const totalPrice = cart.reduce((acc, cur) => acc + cur.price, 0);

  return (
    <section className={`products ${orderComplete ? 'products_type_complete' : ''}`}>
      <div className="products__container">
        <div className="products__title-container">
          <h2 className="products__title">Order Summary</h2>
          <button className="products__button">edit order</button>
        </div>

        <div className="products__items-container">
          {
            cart.map((item) => (
              <Product
                key={item.id}
                {...item}
              />
            ))
          }
        </div>
        <div className="products__info-container">
          <div className="products__text-container">
            <p className="products__text">Subtotal</p>
            <p className="products__text">${totalPrice - 12.12}</p>
          </div>
          <div className="products__text-container">
            <p className="products__text">Shipping</p>
            <p className="products__text">Free</p>
          </div>
          <div className="products__text-container">
            <p className="products__text">Taxes</p>
            <p className="products__text">$12.12</p>
          </div>
        </div>
        <div className="products__text-container products__text-container_type_total">
          <p className="products__text products__text_type_total">Total</p>
          <p className="products__text products__text_type_total">${totalPrice}</p>
        </div>
      </div>
      <p className="products__text products__text_type_footer">All purchases are subject to our Terms and Conditions.
      </p>
    </section>
  )
}

export default Products;
