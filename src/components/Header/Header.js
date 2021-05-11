import React from 'react';
import './Header.css';
import headerLogo from '../../images/header-img.svg';
import buttonImg from '../../images/cart-icon.svg';

function Header({ cart }) {

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__title-container">
          <a className="header__link" href="./">
            <img src={headerLogo} className="header__logo" alt="Logo"/>
            <p className="header__title">Front-end Developer Test Task</p>
          </a>
        </div>
        <button className="header__button">cart
          <img src={buttonImg} alt="Cart"/>
          <span className="header__cart-item-count">{cart.length}</span>
        </button>
      </div>
    </header>
  )
}

export default Header;
