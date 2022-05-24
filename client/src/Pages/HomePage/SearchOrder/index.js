import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './SearchOrder.css'
import OrderApi from '../../../Apis/OrderApi'
import UserApi from '../../../Apis/UserApi';

function SearchOrder() {
  const [orderId, setOrderId] = useState();
  const [user, setUser] = useState({});

  useEffect(() => {
    UserApi.getMe({id: localStorage.getItem("userid")})
    .then(data => setUser({...data}));
  }, [])

  return (
      <form className="search-order">
        <div className="search-order--title">TRA CỨU ĐƠN HÀNG</div>
        <input type="text" className="search-order--input" placeholder="Mã đơn hàng" onChange={(e) => setOrderId(e.target.value)}/><br />
        <input type="text" className="search-order--input" placeholder="Email" value={user.email}/><br />
        <Link to={`/result-search-order/:${orderId}`} className="search-order--submit" >Tra cứu</Link>
      </form>
  )
}

export default SearchOrder
