import React, {useState} from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import watch from '../../Assets/Images/image 1.png';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';
import AdminSignIn from '../AdminSignIn/AdminSignIn';

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
            <span>Tra cứu đơn hàng</span>
          </div>

          <div className="header-first__more-item header-first__more-like">
            <FontAwesomeIcon icon={solid('heart')} />
            <span>Yêu thích</span>
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
        <div className="header-second__logo">
          <img src={watch} alt="watch" />
          <div>
            <h1>UITWatch</h1>
            <span>SINCE 2021</span>
          </div>
        </div>

        <ul className="header-second__nav">
          <li>GIỚI THIỆU</li>
          <li>ĐỒNG HỒ</li>
          <li>SALE OFF</li>
          <li>TIN TỨC</li>
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

      {isSignInShowed && <SignIn handleShowSignIn1={childShowSignIn1} handleShowSignUp1={childShowSignUp1}/>} 
      {isSignUpShowed && <SignUp handleShowSignIn2={childShowSignIn2} handleShowSignUp2={childShowSignUp2}/>}
      {isAdminSignInShowed && <AdminSignIn handleShowAdmSignIn={childShowAdmSignIn} />}
    </div>


  )
}

export default Header