import React from 'react';
import './ProductManagement.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import img from '../../../Assets/Images/image 1.png';

function ProductManagement() {
  return (
    <div className="prod-mng">
      <h1>Quản lí khách hàng</h1>
      <div className="prod-title">
        <button><b>TẠO SẢN PHẨM</b></button>
        <div className="prod-search">
          <input type="text" placeholder='Tìm sản phẩm ...'/>
          <div className="prod-icon">
            <FontAwesomeIcon icon={solid('magnifying-glass')} />
          </div>
          
        </div>

      </div>
      
      <table>
        <thead>
          <tr>
              <th>Mã sản phẩm</th>
              <th>Đồng hồ</th>
              <th>Hình ảnh</th>
              <th>Giá</th>
              <th>Kho</th>
              <th>Xuất xứ</th>
              <th>Loại</th>
              <th>Ngày sản xuất</th>
              <th>Giảm giá</th>
              <th></th>
          </tr>
        </thead>
        <tbody>
          {Array(20).fill().map((_, i) => (
            <tr>
              <td>Tiger Nixon</td>
              <td>Edinburgh</td>
              <td><img src={img} alt="watch-img"/></td>
              <td>370.000.000đ</td>
              <td style={{width: "150px"}}>
                64/15 Nguyên Hồng, Phường 1 Gò Vấp
              </td>
              <td>Tiger Nixon</td>
              <td>Edinburgh</td>
              <td>System Architect</td>
              <td>System Architect</td>
              <td>
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

export default ProductManagement