import React from 'react';
import './SaleOff.css';
import Product from '../../../Components/Product';
import rolex1 from './../../../Assets/Images/rolex 1.png';
import banner from './../../../Assets/Images/Clearance-Sale-Desktop 1.png';

function SaleOff() {

  const productList = [{
    img: rolex1,
    name: "Rolex Oyster Perpetual",
    type: ["silver", "bronze"],
    price: "132.000.000 VNĐ",
    discount: "165.000.000 VNĐ",
  }, {
    img: rolex1,
    name: "Rolex Oyster Perpetual",
    type: ["silver", "bronze"],
    price: "132.000.000 VNĐ",
    discount: "165.000.000 VNĐ",
  },{
    img: rolex1,
    name: "Rolex Oyster Perpetual",
    type: ["silver", "bronze"],
    price: "132.000.000 VNĐ",
    discount: "165.000.000 VNĐ",
  }, {
    img: rolex1,
    name: "Rolex Oyster Perpetual",
    type: ["silver", "bronze"],
    price: "132.000.000 VNĐ",
    discount: "165.000.000 VNĐ",
  }, {
    img: rolex1,
    name: "Rolex Oyster Perpetual",
    type: ["silver", "bronze"],
    price: "132.000.000 VNĐ",
    discount: "165.000.000 VNĐ",
  }, {
    img: rolex1,
    name: "Rolex Oyster Perpetual",
    type: ["silver", "bronze"],
    price: "132.000.000 VNĐ",
    discount: "165.000.000 VNĐ",
  }, {
    img: rolex1,
    name: "Rolex Oyster Perpetual",
    type: ["silver", "bronze"],
    price: "132.000.000 VNĐ",
    discount: "165.000.000 VNĐ",
  }, {
    img: rolex1,
    name: "Rolex Oyster Perpetual",
    type: ["silver", "bronze"],
    price: "132.000.000 VNĐ",
    discount: "165.000.000 VNĐ",
  }, {
    img: rolex1,
    name: "Rolex Oyster Perpetual",
    type: ["silver", "bronze"],
    price: "132.000.000 VNĐ",
    discount: "165.000.000 VNĐ",
  }, {
    img: rolex1,
    name: "Rolex Oyster Perpetual",
    type: ["silver", "bronze"],
    price: "132.000.000 VNĐ",
    discount: "165.000.000 VNĐ",
  }, {
    img: rolex1,
    name: "Rolex Oyster Perpetual",
    type: ["silver", "bronze"],
    price: "132.000.000 VNĐ",
    discount: "165.000.000 VNĐ",
  }, {
    img: rolex1,
    name: "Rolex Oyster Perpetual",
    type: ["silver", "bronze"],
    price: "132.000.000 VNĐ",
    discount: "165.000.000 VNĐ",
  }, {
    img: rolex1,
    name: "Rolex Oyster Perpetual",
    type: ["silver", "bronze"],
    price: "132.000.000 VNĐ",
    discount: "165.000.000 VNĐ",
  }, {
    img: rolex1,
    name: "Rolex Oyster Perpetual",
    type: ["silver", "bronze"],
    price: "132.000.000 VNĐ",
    discount: "165.000.000 VNĐ",
  }, {
    img: rolex1,
    name: "Rolex Oyster Perpetual",
    type: ["silver", "bronze"],
    price: "132.000.000 VNĐ",
    discount: "165.000.000 VNĐ",
  }, {
    img: rolex1,
    name: "Rolex Oyster Perpetual",
    type: ["silver", "bronze"],
    price: "132.000.000 VNĐ",
    discount: "165.000.000 VNĐ",
  }];

  return (
    <div className="saleoff">
      <img src={banner} alt="banner" />
      {productList.map((item, index) => (
        <div className="saleoff__product" key={index}>
          <Product 
            img={item.img}
            name={item.name}
            type={item.type}
            price={item.price}
            discount={item.discount}
          />
        </div>
      ))}
      
    </div>
  )
}

export default SaleOff