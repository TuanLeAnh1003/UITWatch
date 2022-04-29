import React, {useState} from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import watch from '../../Assets/Images/image 1.png';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';
import AdminSignIn from '../AdminSignIn/AdminSignIn';
import { Link } from "react-router-dom";

function Header() {
  const [isSignInShowed, setIsSignInShowed] = useState(false);
  const [isSignUpShowed, setIsSignUpShowed] = useState(false);
  const [isAdminSignInShowed, setIsAdminSignInShowed] = useState(false);

  const handleShowSignIn = () => {
    setIsSignInShowed(true);
  }

  const childShowSignIn1 = (a) => {
    setIsSignInShowed(a);
  }

  const childShowSignUp2 = (a) => {
    setIsSignUpShowed(a);
  }

  const childShowSignUp1 = (a) => {
    if(a) {
      setIsSignUpShowed(a);
      setIsSignInShowed(false);
    }
  }

  const childShowSignIn2 = (a) => {
    if(a) {
      setIsSignInShowed(a);
      setIsSignUpShowed(false);
    }
  }

  const handleShowAdminSignIn = () => {
    setIsAdminSignInShowed(true);
  }

  const childShowAdmSignIn = (a) => {
    setIsAdminSignInShowed(a);
  }

  return (
    <div className="header">
      <div className="header-first">
        <div className="header-first__search">
          <FontAwesomeIcon icon={solid('magnifying-glass')} />
          <input type="text" placeholder="Tìm sản phẩm..." />
        </div>

        <div className="header-first__more">
          <div className="header-first__more-item header-first__more-order">
            <FontAwesomeIcon icon={solid('box')} />
            <Link to="">Tra cứu đơn hàng</Link>
          </div>

          <div className="header-first__more-item header-first__more-like">
            <FontAwesomeIcon icon={solid('heart')} />
            <Link to="/liked-products">Yêu thích</Link>
          </div>

          <div className="header-first__more-item header-first__more-search" onClick={handleShowSignIn}>
            <FontAwesomeIcon icon={solid('user')} />
            <span>Đăng nhập</span>
          </div>

          <div className="header-first__more-item header-first__more-user" onClick={handleShowAdminSignIn}>
            <FontAwesomeIcon icon={solid('circle-user')} />
            <span>Quản lí</span>
          </div>
        </div>
      </div>

      <div className="header-second">
        <Link to="/" className="header-second__logo">
          <img src={watch} alt="watch" />
          <div>
            <h1>UITWatch</h1>
            <span>SINCE 2021</span>
          </div>
        </Link>

        <ul className="header-second__nav">
          <Link to="">GIỚI THIỆU</Link>
          <Link to="/sale">ĐỒNG HỒ</Link>
          <Link to="/saleoff">SALE OFF</Link>
          <Link to="/news">TIN TỨC</Link>
          <Link to="/contact">LIÊN HỆ</Link>
          <Link to="/policy">CHÍNH SÁCH</Link>
        </ul>

        <Link to="/cart" className="header-second__cart">
          <FontAwesomeIcon icon={solid('cart-shopping')}/>
        </Link>
      </div>

      <div className="header-third">
        <FontAwesomeIcon icon={solid('angle-left')} />
        <h2>FREE SHIP VỚI HÓA ĐƠN TỪ 800K</h2>
        <FontAwesomeIcon icon={solid('angle-right')} />
      </div>

      {isSignInShowed && <SignIn handleShowSignIn1={childShowSignIn1} handleShowSignUp1={childShowSignUp1}/>} 
      {isSignUpShowed && <SignUp handleShowSignIn2={childShowSignIn2} handleShowSignUp2={childShowSignUp2}/>}
      {isAdminSignInShowed && <AdminSignIn handleShowAdmSignIn={childShowAdmSignIn} />}
    </div>
  )
}

export default Header