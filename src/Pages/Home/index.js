import React from 'react';
import './Home.css';
import watchImg from '../../Assets/Rectangle 5.png';
import Advertisement from '../../Components/Advertisement';
import adImg1 from '../../Assets/Rectangle 6.png';
import adImg2 from '../../Assets/Rectangle 7.png';
import List from '../../Components/List';
import listImg1 from '../../Assets/Rectangle 8.png';
import listImg2 from '../../Assets/Rectangle 9.png';
import listImg3 from '../../Assets/Rectangle 10.png';
import Product from '../../Components/Product';
import pro1 from '../../Assets/Rectangle 11.png';

const productList = [{
  img: pro1,
  name: "Rolex Oyster Perpetual",
  type: ["silver", "bronze"],
  price: "370.000.000 VNĐ",
}, {
  img: pro1,
  name: "Rolex Oyster ",
  type: ["silver", "bronze"],
  price: "50.000.000 VNĐ",
}, {
  img: pro1,
  name: "Rolex Oyster ",
  type: ["silver", "bronze"],
  price: "50.000.000 VNĐ",
}, {
  img: pro1,
  name: "Rolex Oyster ",
  type: ["silver", "bronze"],
  price: "50.000.000 VNĐ",
}, {
  img: pro1,
  name: "Rolex Oyster ",
  type: ["silver", "bronze"],
  price: "50.000.000 VNĐ",
}, {
  img: pro1,
  name: "Rolex Oyster ",
  type: ["silver", "bronze"],
  price: "50.000.000 VNĐ",
}]

function Home() {
  return (
    <div className="home">
      <img src={watchImg} alt="watch-img" />
      <div className="home__ads">
        <Advertisement 
          img={adImg1}
          title="MẪU ĐỒNG HỒ ĐIỆP VIÊN"
          des="Omega Seamaster đồng hành cùng nhân vật James Bond trong nhiều phần phim. Thiết bị là một trong những sản phẩm bán chạy nhất của thương hiệu."
        />

        <Advertisement 
          img={adImg2}
          title="BLACK FRIDAY"
          des="Nhân sự kiện Black Friday, UITWatch giảm giá đến 50% cho toàn bộ sản phẩm tại hệ thống, mang đến cho khách hàng cơ hội sở hữu những món đồ hiệu với mức giá hấp dẫn."
        />
      </div>

      {/* DANH MỤC MUA HÀNG */}
      <h1>DANH MỤC MUA HÀNG</h1>
      <div className="home__lists">
        <List 
          img={listImg1}
          title="Đồng hồ nam"
          list={{
            item1: "Màu mới",
            item2: "Bán chạy",
            item3: "Ưu đãi",
          }}
        />

        <List 
          img={listImg2}
          title="Đồng hồ nữ"
          list={{
            item1: "Màu mới",
            item2: "Bán chạy",
            item3: "Ưu đãi",
          }}
        />

        <List 
          img={listImg3}
          title="Dòng sản phẩm"
          list={{
            item1: "Casio",
            item2: "Rolex",
            item3: "Daniel Wellington",
          }}
        />
      </div>

      {/* BÁN CHẠY */}
      <h1>BÁN CHẠY</h1>
      <div className="home__products-wrapper">
        <div className="home__products">
          {productList.map((item) => (
            <Product 
              img={item.img}
              name={item.name}
              type={item.type}
              price={item.price}
            />
          )
            
          )}
          
        </div>
      </div>

    </div>
  )
}

export default Home