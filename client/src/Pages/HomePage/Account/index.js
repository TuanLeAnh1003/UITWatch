import React, { useState } from 'react'
import './Account.css'
import DuyAnAvatar from '../../../Assets/Images/DuyAnAvatar.jpg'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Account() {
  var user = {
    firstName: "Duy An",
    lastName: "Nguyễn",
    email: "nduyan1601@gmail.com",
    phoneNumber: "0938269974",
    gender: "male",
    birthday: new Date("2001-01-16").toLocaleDateString('pt-PT'),
    avatar: DuyAnAvatar,
  }

  const [selectedImage, setSelectedImage] = useState(null)

  const handleSubmit = () => {

  }

  return (
    <div className="account">
      <div className="account-nav">
        <div className="account-nav-name">{user.firstName}</div>
        <div className="account-nav-update">
          <FontAwesomeIcon className="account-nav-update--icon" icon={solid("pen")} />
          <div className="account-nav-update--title">Sửa hồ sơ</div>
        </div>
      </div>

      <form className="account-info">
        <div className="account-info-title">HỒ SƠ CỦA TÔI</div>
        <div className="account-info-desc">Quản lý thông tin hồ sơ để bảo mật tài khoản</div>
        <div className="account-info-wrap">
          <div className="account-info-left">
            <div className="account-info-left-item">
              <label>Họ:</label>
              <input type="text" placeholder={user.lastName} name="lastName"/>
            </div>
            <div className="account-info-left-item">
              <label>Tên:</label>
              <input type="text" placeholder={user.firstName} name="firstName"/>
            </div>
            <div className="account-info-left-item">
              <label>Email:</label>
              <input type="email" placeholder={user.email} name="email"/>
            </div>
            <div className="account-info-left-item">
              <label>Số điện thoại:</label>
              <input type="text" placeholder={user.phoneNumber} name="phoneNumber"/>
            </div>
            <div className="account-info-left-item">
              <label>Giới tính:</label>
              <div className="account-info-left-item-gender">
                <input type="radio" name="gender" value="male"/><label> Nam</label>
                <input type="radio" name="gender" value="female"/><label> Nữ</label>
                <input type="radio" name="gender" value="other"/><label> Khác</label>
              </div>
            </div>
            <div className="account-info-left-item">
              <label>Ngày sinh:</label>
              <input 
                type="text" 
                max={Date.now()} 
                placeholder={user.birthday} 
                onBlur={e => e.target.type='text'} 
                onFocus={e => e.target.type='date'}
              />
            </div>
          </div>

          <div className="account-info-right">
            {
              (selectedImage === null) ? (
                <img className="account-info-right-image" src={user.avatar} alt="" />
              ) : (
                <img className="account-info-right-image" src={window.URL.createObjectURL(selectedImage)} alt="" />
              )
            }
            <input type="file" name="Chọn ảnh" onChange={e => setSelectedImage(e.target.files[0])} />
          </div>
        </div>
        <input className="account-info-submit" type="submit" onClick={handleSubmit} value="LƯU"/>
      </form>  
    </div>
  )
}

export default Account