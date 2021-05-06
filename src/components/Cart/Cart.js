import React from 'react';
import {NavLink, Route, useRouteMatch, useHistory} from 'react-router-dom';

function Cart(props) {
  const { path, url } = useRouteMatch();
  const history = useHistory();

  return (
    <section className="cart">
      <nav className="cart__nav">
        <ul className="cart__links">
          <li className="cart__list">
            <NavLink
              className="cart__link"
              activeClassName="cart__link_active"
              to={`${url}/shipping`}>Shipping
            </NavLink>
          </li>
          <li className="cart__list">
            <NavLink
              className="cart__link"
              activeClassName="cart__link_active"
              to={`${url}/billing`}>Billing
            </NavLink>
          </li>
          <li className="cart__list">
            <NavLink
              className="cart__link"
              activeClassName="cart__link_active"
              to={`${url}/payment`}>Payment
            </NavLink>
          </li>
        </ul>
      </nav>
      <form action="#" method="post" className="cart__form" noValidate onSubmit={props.onSubmit}>
        <Route path={`${path}/shipping`}>
          <div className='cart__input-container'>
            <button onClick={()=>{history.push(`${path}/billing`)}}>Далее</button>
            <p>shipping</p>
          </div>
        </Route>
        <Route path={`${path}/billing`}>
          <div className='cart__input-container'>
            <button onClick={()=>{history.push(`${path}/payment`)}}>Далее</button>
            <p>billing</p>
          </div>
        </Route>
        <Route path={`${path}/payment`}>
          <div className='cart__input-container'>
            <button onClick={()=>{history.push(`${path}/complete`)}}>Pay Securely</button>
            <p>payment</p>
          </div>
        </Route>
      </form>
      <Route path={`${path}/complete`}>
        <div className='cart__input-container'>
          <p>Print</p>
          <button>Print Recipe</button>
        </div>
      </Route>
    </section>
  )
}

export default Cart;
