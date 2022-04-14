import React, { forwardRef } from 'react';
import './Product.css';

function Product({img, name, type, price, discount}, ref) {
  return (
    <div className="product" ref={ref}>
      <img src={img} alt="img" />
      <h3>{name}</h3>
      <p>{type}</p>
      <div className="product__price" style={{display: discount ? "flex" : ""}}>
        <p>{price}</p>
        <p>{discount}</p>
      </div>
      
    </div>
  )
}

export default forwardRef(Product)