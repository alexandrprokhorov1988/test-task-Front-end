import React from 'react';
import './Product.css';

function Product({ img, title, imgUrl, alt, color, quantity, price }) {

  return (
    <article className="product">
      <img src={imgUrl || ''} className="product__img" alt={alt || ''}/>
      <div className="product__column">
        <div className="product__container">
          <p className="product__text product__text_type_h">{title || ''}</p>
          <p className="product__text product__text_padding">{color || ''}</p>
          <p className="product__text">Quantity: {quantity || ''}</p>
        </div>
        <p className="product__text product__text_type_h">${price || ''}</p>
      </div>
    </article>
  )
}

export default Product;
