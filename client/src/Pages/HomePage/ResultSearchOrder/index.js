import React from 'react'
import OrderDetail from '../../../Components/Order/OrderDetail'
import YourOrder from '../../../Components/Order/YourOrder'
import './ResultSearchOrder.css'


function ResultSearchOrder() {
  const order = {
    // Order
    orderId: "580",
    orderDate: "05/04/2022",
    totalPrice: 332000000,
    // User
    email: "19521179@gm.uit.edu.vn",
    address: "64/15 Nguyên Hồng Phường 1 Gò Vấp Thành Phố Hồ Chí Minh",
    firstName: "Duy An",
    lastName: "Nguyễn",
    phoneNumber: "0938269974",
    // Shipment
    shipment: "Miễn phí",
    // Payment
    payment: "Trả tiền mặt khi giao hàng",
    // Product
    productArray: [
      {
        productName: "Rolex Datejust Rhodium",
        productPrice: 132000000,
        cartQuantity: 1,
      },
      {
        productName: "Rolex Datejust Rhodium 2",
        productPrice: 100000000,
        cartQuantity: 2,
      }
    ],
  }

  return (
    <div className="result-search-order">
      <div className="result-search-order--title">KẾT QUẢ TÌM KIẾM ĐƠN HÀNG</div>

      <hr className="result-search-order--line__solid" />

      <YourOrder 
        id = {order.orderId}
        date = {order.orderDate}
        email = {order.email}
        totalPrice={order.totalPrice}
        payment={order.payment}
      />

      <hr className="result-search-order--line__middle" />

      <OrderDetail 
        productArray={order.productArray}
        shipment={order.shipment}
        payment={order.payment}
        totalPrice={order.totalPrice}
        firstName={order.firstName}
        lastName={order.lastName}
        address={order.address}
        phoneNumber={order.phoneNumber}
        width={690}
      />

      <button className="result-search-order--export">Xuất hóa đơn</button>
    </div>
  )
}

export default ResultSearchOrder