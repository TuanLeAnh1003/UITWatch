import React from 'react';
import './AdminHeader.css';
import watch from '../../Assets/Images/image 1.png';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';


function AdminHeader() {
  return (
    <div className="ad-header">
      <Link to="/" className="ad-header__logo">
        <img src={watch} alt="watch" />
        <div>
          <h1>UITWatch</h1>
          <span>SINCE 2021</span>
        </div>
      </Link>

      <div className="ad-header__item">
        <FontAwesomeIcon icon={solid('house')} />
        <h3>UIT WATCH</h3>
      </div>

      <div className="ad-header__item">
        <FontAwesomeIcon icon={solid('house')} />
        <h3>BÁN HÀNG</h3>
      </div>

      <div className="ad-header__item">
        <FontAwesomeIcon icon={solid('house')} />
        <p>Chào, Nguyễn Duy An</p>
        <img src="" alt="avatar"/>
      </div>
    </div>
  )
}

export default AdminHeader