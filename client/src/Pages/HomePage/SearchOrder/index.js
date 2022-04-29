import React from 'react'
import './SearchOrder.css'

function SearchOrder() {
  return (
    <form className="search-order">
      <div className="search-order--title">TRA CỨU ĐƠN HÀNG</div>
      <input type="text" className="search-order--input" placeholder="Mã đơn hàng" /><br />
      <input type="text" className="search-order--input" placeholder="Email / Số điện thoại" /><br />
      <input type="submit" value="TRA CỨU ĐƠN HÀNG" className="search-order--submit" />
    </form>
  )
}

export default SearchOrder
