import React from 'react';
import './Cart.css';
import CartProduct from './../../../Components/CartProduct/index';

function Cart() {
  return (
    <div className="cart">
      <div className="cart__products">
        <h3>GIỎ HÀNG</h3>
        <CartProduct isLiked={false}/>
        <CartProduct isLiked={true}/>
        <div className="cart__buttons">
          <button>XÓA HẾT</button>
          <button>TIẾP TỤC MUA HÀNG</button>
        </div>
      </div>

      <div className="cart__order">
        <h3>ĐƠN HÀNG CỦA BẠN</h3>
        <div className="cart__order-line"></div>

        <div className="cart__order-info cart__order-item">
          <b>Đơn hàng</b>
          <p>132.000.000đ</p>
        </div>

        <div className="cart__order-line"></div>

        <div className="cart__order-temporary cart__order-item">
          <b>Tạm tính</b>
          <h4>132.000.000đ</h4>
        </div>

        <div className="cart__order-line"></div>

        <button>Tiếp tục thanh toán</button>

      </div>
    </div>
  )
}

export default Cart