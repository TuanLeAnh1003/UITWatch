import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react';
import { Link } from 'react-router-dom';
import './AdminSideBar.css';

function AdminSideBar() {
  return (
    <div className="ad-sidebar">
      <div className="ad-sidebar__info">
        <img src="" alt="avatar" />
        <h4>Duy An</h4>
      </div>

      <div className="ad-sidebar__items">
        <Link to="/admin/admin-profile">
          <FontAwesomeIcon icon={solid("pen")} />
          <p>Sửa hồ sơ</p>
        </Link>
        <Link to="/admin" className="ad-sidebar__line">
        </Link>
        <Link to="/admin">
          <FontAwesomeIcon icon={solid("file")} />
          <p>Bài viết</p>
        </Link>
        <Link to="/admin/response-management">
          <FontAwesomeIcon icon={solid("message")} />
          <p>Phản hồi</p>
        </Link>        
        <Link to="/admin/product-management">
          <FontAwesomeIcon icon={solid("swatchbook")} />
          <p>Sản phẩm</p>
        </Link>
        <Link to="/admin/customer-management">
          <FontAwesomeIcon icon={solid("user")} />
          <p>Khách hàng</p>
        </Link>
        <Link to="/admin/order-management">
          <FontAwesomeIcon icon={solid("basket-shopping")} />
          <p>Đơn hàng</p>
        </Link>
        <Link to="/admin/statistic">
          <FontAwesomeIcon icon={solid("book-bookmark")} />
          <p>Báo cáo</p>
        </Link>
        <Link to="/admin/settings">
          <FontAwesomeIcon icon={solid("gear")} />
          <p>Cài đặt</p>
        </Link>
      </div>
    </div>
  )
}

export default AdminSideBar