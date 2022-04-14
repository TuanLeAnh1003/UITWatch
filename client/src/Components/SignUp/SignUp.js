import React from 'react';
import './SignUp.css';
import Logo from '../../Assets/Images/logo.png';
import SignInImg from '../../Assets/Images/Rectangle 383.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';

function SignUp({handleShowSignUp2, handleShowSignIn2}) {
  const handleExitSignUp = () => {   
    handleShowSignUp2(false);
  }

  const handleShowSignInBySignUp = () => {
    handleShowSignIn2(true)
  }

  return (
    <div className="signUpWrap" onClick={handleExitSignUp}>
      <div className="signUp" onClick={e => e.stopPropagation()}>

        <div></div>

        <div className="signUp_form">
          <FontAwesomeIcon icon={solid('circle-xmark')} onClick={handleExitSignUp}/><br />
          <img src={Logo} alt="Logo" />
          <h1>ĐĂNG KÍ THÀNH VIÊN</h1>
          <input type="text" placeholder="Họ và tên (*)" name="userName"/>
          {/*<input type="date" name="dob" />*/}
          <input type="text" placeholder="Email (*)" name="dob" />
          <input type="email" placeholder="Số điện thoại (*)" name="userEmail"/>
          <input type="password" placeholder="Mật khẩu (*)" name="userPassword"/>
          <input type="password" placeholder="Nhập lại mật khẩu (*)" name="userPasswordAgain"/>
          <div className="signUp_check">
            <input type="checkbox" name="remember" />
            <label htmlFor="remember">Khách hành đồng ý với các <a href="#">điều khoản</a> thành viên của UITheater</label>
          </div>
          <button>Đăng ký</button>
          <div className="signUp_toSignUp">
            <span>Đã có tài khoản?</span>
            <button onClick={handleShowSignInBySignUp}>Đăng nhập</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
