import React from 'react'
import './UserManagement.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import { Link } from 'react-router-dom'

function UserManagement() {
  const listUser = [
    {
      lastName: 'Nguyễn',
      firstName: 'Duy An',
      phoneNumber: '132154877',
      birthday: '16-01-2001',
      email: 'duyan@gmail.com',
      address: 'ăbudiuwqdbijhqwjkn',
      role: 'admin'
    },
    {
      lastName: 'Nguyễn',
      firstName: 'Duy An',
      phoneNumber: '132154877',
      birthday: '16-01-2001',
      email: 'duyan@gmail.com',
      address: 'ăbudiuwqdbijhqwjkn',
      role: 'admin'
    },
    {
      lastName: 'Nguyễn',
      firstName: 'Duy An',
      phoneNumber: '132154877',
      birthday: '16-01-2001',
      email: 'duyan@gmail.com',
      address: 'ăbudiuwqdbijhqwjkn',
      role: 'admin'
    },
    {
      lastName: 'Nguyễn',
      firstName: 'Duy An',
      phoneNumber: '132154877',
      birthday: '16-01-2001',
      email: 'duyan@gmail.com',
      address: 'ăbudiuwqdbijhqwjkn',
      role: 'admin'
    },
    {
      lastName: 'Nguyễn',
      firstName: 'Duy An',
      phoneNumber: '132154877',
      birthday: '16-01-2001',
      email: 'duyan@gmail.com',
      address: 'ăbudiuwqdbijhqwjkn',
      role: 'admin'
    },
    {
      lastName: 'Nguyễn',
      firstName: 'Duy An',
      phoneNumber: '132154877',
      birthday: '16-01-2001',
      email: 'duyan@gmail.com',
      address: 'ăbudiuwqdbijhqwjkn',
      role: 'admin'
    }
  ]

  return (
    <div className="user-mng">
      <h1>Quản lý thành viên</h1>
      <div className="user-mng-wrap">
        <Link className="user-mng-create" to='/admin/user-create'>Tạo thành viên</Link>
        <div className="user-mng-search">
          <input type="text" placeholder="Tìm sản phẩm ..." />
          <FontAwesomeIcon className="user-mng-search--icon" icon={solid('search')} />
        </div>
      </div>
      <table>
        <thead>
          <tr>
              <th>Họ</th>
              <th>Tên</th>
              <th>Số điện thoại</th>
              <th>Ngày sinh</th>
              <th>Email</th>
              <th>Địa chỉ</th>
              <th>Vai trò</th>
              <th></th>
          </tr>
        </thead>
        <tbody>
          {listUser.map((user, i) => (
            <tr key={i}>
              <td>{user.lastName}</td>
              <td>{user.firstName}</td>
              <td>{user.phoneNumber}</td>
              <td>{user.birthday}</td>
              <td>{user.email}</td>
              <td>{user.address}</td>
              <td>{user.role}</td>
              <td>
                <FontAwesomeIcon icon={solid('eye')} />{"  "}
                <FontAwesomeIcon icon={solid('pen')} />{"  "}
                <FontAwesomeIcon icon={solid('trash')} />
              </td>
            </tr>
          ))}
          
        </tbody>
      </table>
    </div>
  )
}

export default UserManagement