import React from 'react';
import './SettingOptions.css';

function SettingOptions() {
  return (
    <div className="setting">
      <h1>Tùy chọn tổng quan</h1>
      <div className="setting__option">
        <p>Ngôn ngữ của trang:</p>
        <select name="language" id="language">
          <option value="Vietnamese">Tiếng Việt</option>
          <option value="English">Tiếng Anh</option>
        </select>
      </div>
      <div className="setting__option">
        <p>Múi giờ:</p>
        <select name="time" id="time">
          <option value="utc+7">UTC + 7</option>
        </select>
      </div>
      <div className="setting__option">
        <p>Định dạng ngày tháng:</p>
        <select name="date-format" id="date-format">
          <option value="dmy">dd/mm/yyyy</option>
        </select>
      </div>
      <div className="setting__option">
        <p>Định dạng thời gian:</p>
        <select name="time-format" id="time-format">
          <option value="hms">hh:mm:ss</option>
        </select>
      </div>
    </div>
  )
}

export default SettingOptions