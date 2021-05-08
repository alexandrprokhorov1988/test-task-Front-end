import React from 'react';
import './Product.css';
import img1 from '../../images/cartImg1.png';
function Product({ img, title, alt, color, quantity, price }) {

  return (
    <article className="product">
      <img src={img1 || ''} className="product__img" alt={alt || ''}/>
      <div className="product__container">
        <p className="product__title">{title || ''}</p>
        <p className="product__text">{color || ''}</p>
        <p className="product__text">{quantity || ''}</p>
      </div>
      <p className="product__price">{price || ''}</p>
    </article>
  )
}

export default Product;
