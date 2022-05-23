import React, { forwardRef } from 'react';
import './Product.css';
import { Link } from 'react-router-dom'

function Product({productId, img, name, type, price, discount}, ref) {
  return (
    <Link to={`/product/${productId}`} className="product" ref={ref}>
      <img src={img} alt="img" />
      <h3>{name}</h3>
      <p>{type.brand}</p>
      <div className="product__price" style={{display: discount ? "flex" : ""}}>
        <p>{price}đ</p>
        <p>{discount}</p>
      </div>
      
    </Link>
  )
}

export default forwardRef(Product)