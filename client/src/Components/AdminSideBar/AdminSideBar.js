import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react';
import './AdminSideBar.css';

function AdminSideBar() {
  return (
    <div className="ad-sidebar">
      <div className="ad-sidebar__info">
        <img src alt="avatar" />
        <h4>Duy An</h4>
      </div>

      <ul className="ad-sidebar__items">
        <li>
          <FontAwesomeIcon icon={solid("pen")} />
          <p>Sửa hồ sơ</p>
        </li>
        <li className="ad-sidebar__line">
        </li>
        <li>
          <FontAwesomeIcon icon={solid("file")} />
          <p>Bài viết</p>
        </li>
        <li>
          <FontAwesomeIcon icon={solid("message")} />
          <p>Phản hồi</p>
        </li>        
        <li>
          <FontAwesomeIcon icon={solid("swatchbook")} />
          <p>Sản phẩm</p>
        </li>
        <li>
          <FontAwesomeIcon icon={solid("user")} />
          <p>Khách hàng</p>
        </li>
        <li>
          <FontAwesomeIcon icon={solid("basket-shopping")} />
          <p>Đơn hàng</p>
        </li>
        <li>
          <FontAwesomeIcon icon={solid("book-bookmark")} />
          <p>Báo cáo</p>
        </li>
        <li>
          <FontAwesomeIcon icon={solid("gear")} />
          <p>Cài đặt</p>
        </li>
      </ul>
    </div>
  )
}

export default AdminSideBar