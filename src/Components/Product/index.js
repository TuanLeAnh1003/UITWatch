import React, { forwardRef } from 'react';
import './Product.css';

function Product({img, name, type, price}, ref) {
  return (
    <div className="product" ref={ref}>
      <img src={img} alt="img" />
      <h3>{name}</h3>
      <p>{type}</p>
      <p>{price}</p>
    </div>
  )
}

export default forwardRef(Product)