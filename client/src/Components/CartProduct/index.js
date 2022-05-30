import React, { useState, useEffect } from 'react';
import './CartProduct.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import UserApi from '../../Apis/UserApi';
import Swal from "sweetalert2";


function CartProduct({index, productId, image, name, price, isOnLikePage}) {
  const [productCount, setProductCount] = useState(1)

  const [isLiked, setIsLiked] = useState()
  
  const userId = localStorage.getItem('userid')

  useEffect(() => {
    UserApi.isLiked({
      userId: userId,
      productId: productId
    })
    .then((res) => {
      setIsLiked(res.isLiked);
    })
  }, [])

  const handleLikeButton = () => {
    setIsLiked(!isLiked);
    if (isLiked) {
      UserApi.removeLikeProduct({
        userId: userId,
        productId: productId
      })
      .then((res) => {
        console.log(res)
        Swal.fire({
          position: 'top',
          icon: 'success',
          title: 'Bỏ thích sản phẩm thành công',
          showConfirmButton: false,
          timer: 2000
        })
      })
    } else {
      UserApi.likeProduct({
        userId: userId,
        productId: productId
      })
      .then((res) => {
        console.log(res)
        Swal.fire({
          position: 'top',
          icon: 'success',
          title: 'Thích sản phẩm thành công',
          showConfirmButton: false,
          timer: 2000
        })
      })
    }
  }

  const handleAddToCartButton = () => {
    UserApi.addToCart({
      userId: userId,
      productId: productId,
      quantity: productCount
    })
    .then((res) => {
      console.log(res);
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'Thêm sản phẩm vào giỏ hàng thành công',
        showConfirmButton: false,
        timer: 1000
      })
      window.location.reload();
    })
  }

  const handleRemoveCart = () => {
    UserApi.removeCart({
      userId: userId,
      productId: productId
    })
    .then((res) => {
      console.log(res);
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'Xóa sản phẩm khỏi giỏ hàng thành công',
        showConfirmButton: false,
        timer: 2000
      })
      window.location.reload();
    })
  }

  const handleRemoveLiked = () => {
    UserApi.removeLikeProduct({
      userId: userId,
      productId: productId
    })
    .then((res) => {
      console.log(res);
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'Xóa sản phẩm khỏi danh sách yêu thích thành công',
        showConfirmButton: false,
        timer: 1000
      })
      window.location.reload();
    })
  }

  const handleModifyQuantity = (e) => {
    if (isOnLikePage) {
      setProductCount(e.target.value);
    }
  }

  return (
    <div className="cart-product__wrapper" key={index}>
      <div className="cart-product">
        <div className="cart-product__col-1">
          <img src={image} alt="cart-product" />

          <div className="cart-product__info">
            <div className="cart-product__name">
              <a href={`/product/${productId}`}>
                <h4>{name}</h4>
              </a>
              <p><b>Giá:</b> {price}đ</p>
            </div>

            <div className="cart-product__quantity">
              <p><b>Số lượng</b></p>
              <div className="cart-product__input">
                <select value={productCount} onChange={handleModifyQuantity} className="cart-product__list">
                  {Array(20).fill().map((_, i) => (
                    <option key={i}>{i+1}</option>
                  ))}
                </select>
              </div>

            </div>
          </div>
        </div>

        <div className="cart-product__col-2">
          <h3>{price}đ</h3>
          <p>Còn hàng</p>    
          <button style={{cursor: 'pointer'}} onClick={isOnLikePage ? handleAddToCartButton : handleLikeButton}>{isOnLikePage ? <FontAwesomeIcon icon={solid('cart-shopping')} /> : (isLiked ? <FontAwesomeIcon icon={solid('heart')} />: <FontAwesomeIcon icon={regular('heart')} />)}</button>
          <button style={{cursor: 'pointer'}} onClick={isOnLikePage ? handleRemoveLiked : handleRemoveCart}><FontAwesomeIcon icon={regular('trash-can')} /></button>
        </div>
      </div>

      <div className="cart-product__line"></div>
    </div>
    
  )
}

export default CartProduct