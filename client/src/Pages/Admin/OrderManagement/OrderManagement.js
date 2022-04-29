import React from 'react';
import './OrderManagement.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';

function OrderManagement() {
  return (
    <div className="ord-mng">
      <h1>Quản lí đơn hàng</h1>
      <table>
        <thead>
          <tr>
              <th>Mã đơn hàng</th>
              <th>Khách hàng</th>
              <th>Ngày</th>
              <th>Tình trạng</th>
              <th>Tổng</th>
              <th></th>
          </tr>
        </thead>
        <tbody>
          {Array(20).fill().map((_, i) => (
            <tr>
              <td>Tiger Nixon</td>
              <td>System Architect</td>
              <td>Edinburgh</td>
              <td>61</td>
              <td>2011/04/25</td>
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

export default OrderManagement