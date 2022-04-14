import React from 'react';
import './CartProduct.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import prod from '../../Assets/Images/Rectangle 32.png';

function CartProduct({isLiked}) {
  return (
    <div className="cart-product__wapper">
      <div className="cart-product">
        <div className="cart-product__col-1">
          <img src={prod} alt="cart-product" />

          <div className="cart-product__info">
            <div className="cart-product__name">
              <h4>Rolex Oyster Perpetual - Bronze</h4>
              <p><b>Giá:</b> 132.000.000đ</p>
            </div>

            <div className="cart-product__quantity">
              <p><b>Số lượng</b></p>
              <p>1</p>
            </div>
          </div>
        </div>

        <div className="cart-product__col-2">
          <h3>132.000.000đ</h3>
          <p>Còn hàng</p>    
          <button>{isLiked ? <FontAwesomeIcon icon={solid('cart-shopping')} /> : <FontAwesomeIcon icon={regular('heart')} />}</button>
          <button><FontAwesomeIcon icon={regular('trash-can')} /></button>
        </div>
      </div>

      <div className="cart-product__line"></div>
    </div>
    
  )
}

export default CartProduct