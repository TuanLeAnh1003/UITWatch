import React, { useEffect, useState } from 'react'
import Product from '../../../Components/Product'
import RolexImg from './../../../Assets/Images/rolex-img.svg'
import './Search.css';
import { actions, useStore } from '../../../Store';
import ProductApi from '../../../Apis/ProductApi';

function Search() {

  const [state, dispatch] = useStore();

  const [productList, setProductList] = useState([]);

  useEffect(() => {
    ProductApi.getProducts(state.searchInput)
    .then(data => setProductList([...data]))
  }, [state.searchInput])

  return (
    <div className="search">
      <div className="search-title">TÌM THẤY {productList.length} KẾT QUẢ CHO "{state.searchInput}"</div>
      <div className="search-cate">
        <div className="search-cate-product">
          <input className="search-cate-product-input" type="checkbox" id="product"/>
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
            <div className="search-list-item" key={index}>
              <Product 
                 
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