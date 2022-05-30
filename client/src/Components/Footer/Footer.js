import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import { Link } from 'react-router-dom'
import logo from '../../Assets/Images/logo.png'

function Footer() {
  return (
    <div className="footer">
      <div className="footer-first">
        <div className="footer-first__wrapper">
          <div className="footer-first__icon">
            {/* <FontAwesomeIcon icon={solid('sack-dollar')} /> */}
            <img src={logo} alt="logo" />
          </div>

          <ul className="footer-first__about-us">
            <li><h2>VỀ CHÚNG TÔI</h2></li>
            <li></li>
            <li>
              <Link to='/about'>Giới thiệu</Link>
            </li>
            <li>Chi nhánh cửa hàng</li>
            <li>Tuyển dụng</li>
          </ul>

          <ul className="footer-first__product">
            <li><h2>SẢN PHẨM</h2></li>
            <li></li>
            <li>Đồng hồ nam</li>
            <li>Đồng hồ nữ</li>
            <li>Phụ kiện</li>
            <li>
              <Link to='/saleoff'>Sale-off</Link>
            </li>
          </ul>

          <ul className="footer-first__help">
            <li><h2>HỖ TRỢ</h2></li>
            <li></li>
            <li>
              <Link to='/contact'>Liên hệ</Link>
            </li>
            <li>
              <Link to='/policy'>Chính sách chung</Link>
            </li>
            <li>
              <Link to='/search-order'>Tra cứu đơn hàng</Link>
            </li>
            <li>
              <Link to='/consult'>Tư vấn khách hàng </Link>
            </li>

          </ul>

          <ul className="footer-first__social-media">
            <li><h2>LIÊN KẾT MẠNG XÃ HỘI</h2></li>
            <li>
              <a href="https://www.facebook.com/">
                <FontAwesomeIcon icon={brands('facebook-square')} />
              </a>
              <a href="https://www.facebook.com/">
                <FontAwesomeIcon icon={brands('instagram-square')} />
              </a>
              <a href="https://www.facebook.com/">
                <FontAwesomeIcon icon={brands('youtube-square')} />
              </a>
            </li>

          </ul>
        </div>
      </div>

      <div className="footer-second">
        <p>Copyright 2022 © UITWatch.com</p>
        <div className="footer-second__payment-methods">
          <FontAwesomeIcon icon={brands('cc-visa')} />
          <FontAwesomeIcon icon={brands('cc-paypal')} />
          <FontAwesomeIcon icon={brands('cc-mastercard')} />
          <FontAwesomeIcon icon={solid('truck-moving')} />
        </div>
      </div>
    </div>
  )
}

export default Footer