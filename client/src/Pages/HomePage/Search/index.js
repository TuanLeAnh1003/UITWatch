import React from 'react'
import Product from '../../../Components/Product'
import RolexImg from './../../../Assets/Images/rolex-img.svg'
import './Search.css'

function Search() {
  const productList = [{
    img: RolexImg,
    name: "Rolex Oyster Perpetual",
    type: ["silver", "bronze"],
    price: "165.000.000 VNĐ",
    discount: "132.000.000 VNĐ"
  }, {
    img: RolexImg,
    name: "Rolex Oyster ",
    type: ["silver", "bronze"],
    price: "165.000.000 VNĐ",
    discount: "132.000.000 VNĐ"
  }, {
    img: RolexImg,
    name: "Rolex Oyster ",
    type: ["silver", "bronze"],
    price: "165.000.000 VNĐ",
    discount: "132.000.000 VNĐ"
  }, {
    img: RolexImg,
    name: "Rolex Oyster ",
    type: ["silver", "bronze"],
    price: "165.000.000 VNĐ",
    discount: "132.000.000 VNĐ"
  }, {
    img: RolexImg,
    name: "Rolex Oyster ",
    type: ["silver", "bronze"],
    price: "165.000.000 VNĐ",
    discount: "132.000.000 VNĐ"
  }, {
    img: RolexImg,
    name: "Rolex Oyster ",
    type: ["silver", "bronze"],
    price: "165.000.000 VNĐ",
    discount: "132.000.000 VNĐ"
  }, {
    img: RolexImg,
    name: "Rolex Oyster ",
    type: ["silver", "bronze"],
    price: "165.000.000 VNĐ",
    discount: "132.000.000 VNĐ"
  }, {
    img: RolexImg,
    name: "Rolex Oyster ",
    type: ["silver", "bronze"],
    price: "165.000.000 VNĐ",
    discount: "132.000.000 VNĐ"
  }, {
    img: RolexImg,
    name: "Rolex Oyster ",
    type: ["silver", "bronze"],
    price: "165.000.000 VNĐ",
    discount: "132.000.000 VNĐ"
  }, {
    img: RolexImg,
    name: "Rolex Oyster ",
    type: ["silver", "bronze"],
    price: "165.000.000 VNĐ",
    discount: "132.000.000 VNĐ"
  }]

  return (
    <div className="search">
      <div className="search-title">TÌM THẤY {productList.length} KẾT QUẢ CHO "{"Rolex"}"</div>
      <div className="search-cate">
        <div className="search-cate-product">
          <input className="search-cate-product-input" type="checkbox" id="product" checked/>
          <label className="search-cate-product-label">Sản phẩm</label>
        </div>
        <div className="search-cate-post">
          <input className="search-cate-post-input" type="checkbox" id="post"/>
          <label className="search-cate-post-label">Bài viết</label>
        </div>
      </div>

      <div className="search-list">
        {
          productList.map((product, index) => (
            <div className="search-list-item">
              <Product 
                key={index} 
                img={product.img}
                name={product.name}
                type={product.type}
                price={product.price}
                discount={product.discount}
              />
            </div>
          ))
        }
      </div>

      <button className="search-view-all">XEM TẤT CẢ SẢN PHẨM</button>
    </div>
  )
}

export default Search