import React, {useState} from 'react';
import './SignUp.css';
import Logo from '../../Assets/Images/logo.png';
import SignInImg from '../../Assets/Images/Rectangle 383.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import UserApi from '../../Apis/UserApi';

function SignUp({handleShowSignUp2, handleShowSignIn2}) {

  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = () => {
    if(lastName === "" || firstName === "" || email === "" || phoneNumber === "" || phoneNumber === "" || password === "") {
      alert("Còn trường dữ liệu chưa được nhập!")
    } else if(confirmPassword !== password) {
      alert("Mật khẩu xác nhận sai!");
    } else {
      UserApi.register({
        lastName: lastName,
        firstName: firstName,
        email: email,
        phoneNumber: phoneNumber,
        password: password,
        confirmPassword: confirmPassword
      })
      .then(data => console.log('Đăng kí thành công!'))
      .catch(err => console.log("Lỗi hệ thống!"))
    }
    
  }

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
          <div className="signUp_form-name">
            <input type="text" placeholder="Họ (*)" name="lastName" onChange={e => setLastName(e.target.value)}/>
            <input type="text" placeholder="Tên (*)" name="firstName" onChange={e => setFirstName(e.target.value)}/>
          </div>
          {/*<input type="date" name="dob" />*/}
          <input type="text" placeholder="Email (*)" name="dob" onChange={e => setEmail(e.target.value)}/>
          <input type="email" placeholder="Số điện thoại (*)" name="userEmail" onChange={e => setPhoneNumber(e.target.value)}/>
          <input type="password" placeholder="Mật khẩu (*)" name="userPassword" onChange={e => setPassword(e.target.value)} />
          <input type="password" placeholder="Nhập lại mật khẩu (*)" name="userPasswordAgain" onChange={e => setConfirmPassword(e.target.value)}/>
          <div className="signUp_check">
            <input type="checkbox" name="remember" />
            <label htmlFor="remember">Khách hành đồng ý với các <a href="#">điều khoản</a> thành viên của UITWatch</label>
          </div>
          <button onClick={handleRegister}>Đăng ký</button>
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
