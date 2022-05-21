import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './SearchOrder.css'

function SearchOrder() {
  const [orderId, setOrderId] = useState()



  return (
    <>
      <form className="search-order">
        <div className="search-order--title">TRA CỨU ĐƠN HÀNG</div>
        <input type="text" className="search-order--input" placeholder="Mã đơn hàng" onChange={(e) => setOrderId(e.target.value)}/><br />
        <input type="text" className="search-order--input" placeholder="Email / Số điện thoại" /><br />
        <Link to={`/result-search-order/${orderId}`} className="search-order--submit">Tra cứu</Link>
      </form>
    </>
  )
}

export default SearchOrder
