import React, {useState} from 'react';
import './Statistic.css';

function Statistic() {

  return (
    <div className="stt">
      <h1>Báo cáo</h1>
      <div className="stt__choose">
        <p>Phạm vi ngày: </p>
        <div className="stt__by-month">
          <select className="stt__list">
            {Array(12).fill().map((_, i) => (
              <option key={i}>{i+1}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="stt__efficiency">
        <p>Hiệu suất: </p>
        <div className="stt__line"></div>
      </div>

      <div className="stt__table">
        <table>
          <tr>
            <td>
              <p><b>Tổng bán</b></p>
              <p>3.800.000.000đ</p>
            </td>
            <td>
              <p><b>Tổng sau chiết khấu</b></p>
              <p>2.900.000.000đ</p>
            </td>
            <td>
              <p><b>Đơn hàng</b></p>
              <p>711</p>
            </td>
            <td>
              <p><b>Sản phẩm đã bán</b></p>
              <p>1152</p>
            </td>
          </tr>
          <tr>
            <td>
              <p><b>Khách hàng</b></p>
              <p>952</p>
            </td>
            <td>
              <p><b>Lượt xem</b></p>
              <p>1.893.234</p>
            </td>
            <td>
              <p><b>Tổng số sản phẩm</b></p>
              <p>420</p>
            </td>
            <td>
              <p><b>Thành viên</b></p>
              <p>45</p>
            </td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default Statistic