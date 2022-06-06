import React, { forwardRef } from 'react';
import './Product.css';
import { Link } from 'react-router-dom'

function Product({productId, img, name, type, price, discount}, ref) {
  const numberFormat = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });
  
  return (
    <Link to={`/product/${productId}`} className="product" ref={ref}>
      <div>
        <img src={img} alt="img" />
      </div>
      <h3>{name}</h3>
      <p>{type.brand}</p>
      <div className="product__price" style={{display: discount ? "flex" : ""}}>
        <p>{numberFormat.format(price)}</p>
        <p>{discount && numberFormat.format(discount)}</p>
      </div>
      
    </Link>
  )
}

export default forwardRef(Product)