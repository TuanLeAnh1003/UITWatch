import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import watch from '../../Assets/image 1.png';

function Header() {
  return (
    <div className="header">
      <div className="header-first">
        <div className="header-first__search">
          <FontAwesomeIcon icon={solid('magnifying-glass')} />
          <input type="text" placeholder="Tìm sản phẩm..." />
        </div>

        <div className="header-first__more">
          <div className="header-first__more-item header-first__more-search">
            <FontAwesomeIcon icon={solid('box')} />
            <span>Tra cứu đơn hàng</span>
          </div>

          <div className="header-first__more-item header-first__more-like">
            <FontAwesomeIcon icon={solid('heart')} />
            <span>Yêu thích</span>
          </div>

          <div className="header-first__more-item header-first__more-search">
            <FontAwesomeIcon icon={solid('user')} />
            <span>Đăng nhập</span>
          </div>
        </div>
      </div>

      <div className="header-second">
        <div className="header-second__logo">
          <img src={watch} alt="watch" />
          <div>
            <h1>UITWatch</h1>
            <span>SINCE 2021</span>
          </div>
        </div>

        <ul className="header-second__nav">
          <li>THƯƠNG HIỆU<FontAwesomeIcon icon={solid('angle-down')}/></li>
          <li>NAM</li>
          <li>NỮ</li>
          <li>SALE OFF<FontAwesomeIcon icon={solid('angle-down')}/></li>
          <li>LIÊN HỆ</li>
        </ul>

        <div className="header-second__cart">
          <FontAwesomeIcon icon={solid('cart-shopping')}/>
        </div>
      </div>

      <div className="header-third">
        <FontAwesomeIcon icon={solid('angle-left')} />
        <h2>FREE SHIP VỚI HÓA ĐƠN TỪ 800K</h2>
        <FontAwesomeIcon icon={solid('angle-right')} />
      </div>
    </div>
  )
}

export default Header