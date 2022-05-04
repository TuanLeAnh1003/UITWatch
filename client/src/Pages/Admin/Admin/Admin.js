import React from 'react';
import './Admin.css';
import {Routes, Route} from 'react-router-dom';

import Statistic from '../Statistic/Statistic';
import SettingOptions from '../SettingOptions/SettingOptions';
import AdminProfile from '../AdminProfile/AdminProfile';
import OrderManagement from '../OrderManagement/OrderManagement';
import ResponseManagement from '../ResponseManagement/ResponseManagement';
import AdminHeader from './../../../Components/Header/AdminHeader';
import AdminSideBar from './../../../Components/AdminSideBar/AdminSideBar';
import AdminFooter from './../../../Components/Footer/AdminFooter';
import UserManagement from '../UserManagement';
import UserCreate from '../UserManagement/UserCreate';

function Admin() {
  return (
    <div className='admin'>
      <AdminHeader />
      <div className='admin__cols'>
        <AdminSideBar />
        <div className='admin__col'>
          <div>
            <Routes>
              <Route path='statistic' element={<Statistic />} />
              <Route path='settings' element={<SettingOptions />} />
              <Route path='admin-profile' element={<AdminProfile />} />
              <Route path='order-management' element={<OrderManagement />} />
              <Route path='user-management' element={<UserManagement />} />
              <Route path='user-create' element={<UserCreate />} />
              <Route
                path='response-management'
                element={<ResponseManagement />}
              />
            </Routes>
          </div>

          <AdminFooter />
        </div>
      </div>
    </div>
  );
}

export default Admin