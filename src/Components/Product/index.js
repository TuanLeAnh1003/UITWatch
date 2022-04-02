import React from 'react';
import './Product.css';

function Product({img, name, type, price}) {
  return (
    <div className="product">
      <img src={img} alt="img" />
      <p>{name}</p>
      <p>{type}</p>
      <p>{price}</p>
    </div>
  )
}

export default Product