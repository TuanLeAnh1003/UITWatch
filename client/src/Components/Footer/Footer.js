import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';

function Footer() {
  return (
    <div className="footer">
      <div className="footer-first">
        <div className="footer-first__wrapper">
          <div className="footer-first__icon">
            <FontAwesomeIcon icon={solid('sack-dollar')} />
          </div>

          <ul className="footer-first__about-us">
            <li><h2>VỀ CHÚNG TÔI</h2></li>
            <li></li>
            <li>Giới thiệu</li>
            <li>Chi nhánh cửa hàng</li>
            <li>Tuyển dụng</li>
          </ul>

          <ul className="footer-first__product">
            <li><h2>SẢN PHẨM</h2></li>
            <li></li>
            <li>Đồng hồ nam</li>
            <li>Đồng hồ nữ</li>
            <li>Phụ kiện</li>
            <li>Sale-off</li>
          </ul>

          <ul className="footer-first__help">
            <li><h2>HỖ TRỢ</h2></li>
            <li></li>
            <li>Liên hệ</li>
            <li>Chính sách chung</li>
            <li>Tra cứu đơn hàng</li>
            <li>Tư vấn khách hàng</li>
          </ul>

          <ul className="footer-first__social-media">
            <li><h2>LIÊN KẾT MẠNG XÃ HỘI</h2></li>
            <li>
              <FontAwesomeIcon icon={brands('facebook-square')} />
              <FontAwesomeIcon icon={brands('instagram-square')} />
              <FontAwesomeIcon icon={brands('youtube-square')} />
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