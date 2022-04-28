import React, { useEffect, useState } from 'react';
import './SignIn.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import SignInImg from '../../Assets/Images/Rectangle 383.png';
import Logo from '../../Assets/Images/logo.png';
import Facebook from '../../Assets/Images/SignIn_fb.png';
import Google from '../../Assets/Images/SignIn_gg+.png';


function SignIn({handleShowSignIn1, handleShowSignUp1}) {
  const [show, setShow] = useState(false);

  const handleExitSignIn = () => {   
    handleShowSignIn1(false);
  }

  const handleShowSignUpBySignIn = () => {
    handleShowSignUp1(true);
  }

  const handleEye = () => {
    setShow(!show);
  }

  return (
    <div className="signInWrap" onClick={handleExitSignIn}>
      <div className="signIn" onClick={e => e.stopPropagation()}>

        <div></div>

        <div className="signIn_form">
          <FontAwesomeIcon icon={solid('circle-xmark')} onClick={handleExitSignIn}/><br />
          <img src={Logo} alt="Logo" />
          <h1>KHÁCH HÀNG ĐĂNG NHẬP</h1>
          <input type="email" placeholder="Email hoặc số điện thoại" />
          <div className="signIn_password">
            <input type={show ? "text" : "password"} placeholder="Mật khẩu" />
            {!show &&  <div onClick={handleEye}><FontAwesomeIcon icon={solid('eye')} /></div>}
            {show && <div onClick={handleEye}><FontAwesomeIcon icon={solid('eye-slash')} /></div>}
          </div>
          <div className="signIn_check">
            <input type="checkbox" name="remember" />
            <label htmlFor="remember">Ghi nhớ</label>
          </div>
          <button>Đăng nhập</button>
          <a href="#">Quên mật khẩu?</a>
          <div className="signIn_method">
            <span className="line"></span>
            <span>Bạn có thể đăng nhập bằng</span>
            <span className="line"></span>
          </div>
          <div className="signIn_media">
            <img src={Facebook} alt="facebook" />
            <img src={Google} alt="google" />
          </div>
          <div className="signIn_toSignUp">
            <span>Chưa có tài khoản?</span>
            <button onClick={handleShowSignUpBySignIn}>Đăng ký</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn
