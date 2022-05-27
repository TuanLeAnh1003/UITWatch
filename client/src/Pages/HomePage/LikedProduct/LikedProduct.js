import React, { useState, useEffect } from 'react';
import CartProduct from '../../../Components/CartProduct';
import './LikedProduct.css';
import UserApi from '../../../Apis/UserApi';
import { Link } from 'react-router-dom'

function LikedProduct() {
  const [likedProductList, setLikedProductList] = useState([])
  const userId = localStorage.getItem('userid')

  useEffect(() => {
    UserApi.getLikedProducts({userId: userId})
    .then((res) => {
      setLikedProductList(res);
    })
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="liked-product">
      <h2>DANH MỤC YÊU THÍCH</h2>
      <p>{likedProductList.length} sản phẩm</p>
      <div className="liked-product__line"></div>
      {
        likedProductList?.map((item, index) => (
          <CartProduct 
            index={index}
            image={item.image}
            name={item.name}
            price={item.price}
            productId={item._id}
          />
        ))
      }
      <div className="liked-product__buttons">
        <button>XÓA HẾT</button>
        <Link to='/sale'>TIẾP TỤC MUA HÀNG</Link>
      </div>
    </div>
  )
}

export default LikedProduct