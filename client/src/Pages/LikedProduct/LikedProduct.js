import React from 'react';
import './LikedProduct.css';
import CartProduct from '../../Components/CartProduct';

function LikedProduct() {
  return (
    <div className="liked-product">
      <h2>DANH MỤC YÊU THÍCH</h2>
      <p>2 sản phẩm</p>
      <div className="liked-product__line"></div>
      <CartProduct isLiked={true} />
      <CartProduct isLiked={true} />
      <CartProduct isLiked={true} />
      <CartProduct isLiked={true} />

      <div className="liked-product__buttons">
        <button>XÓA HẾT</button>
        <button>TIẾP TỤC MUA HÀNG</button>
      </div>
    </div>
  )
}

export default LikedProduct