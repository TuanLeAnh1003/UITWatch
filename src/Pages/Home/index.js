import React from 'react';
import './Home.css';
import watchImg from '../../Assets/Rectangle 5.png';
import Advertisement from '../../Components/Advertisement';
import adImg1 from '../../Assets/Rectangle 6.png';
import adImg2 from '../../Assets/Rectangle 7.png';
import List from '../../Components/List';
import listImg1 from '../../Assets/Rectangle 8.png';

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
      </div>

    </div>
  )
}

export default Home