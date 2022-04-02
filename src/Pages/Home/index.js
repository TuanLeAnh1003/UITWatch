import React, { useState, useRef, useEffect } from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
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
  const [trans, setTrans] = useState(0);
  const [num, setNum] = useState(0);

  const move = useRef();
  const product = useRef()

  console.log(move, product, window);

  useEffect(() =>{
    // console.log(Math.floor(move.current.childNodes.length/6));
    // console.log(movie);
    // console.log(num, "effect");
    setTrans(-(window.innerWidth-170)*num);

  }, [num]);

  const handleRightClick = () => {
    if(num < Math.floor(move.current.childNodes.length/4)) setNum((num) => num + 1);
    // console.log(num, "click");
  }

  const handleLeftClick = () => {
    if(num > 0) setNum((num) => num - 1);
    // console.log(num);
  }

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
        <FontAwesomeIcon icon={solid('angle-left')} onClick={handleLeftClick}/>
        
        <div className="home__products">
          <ul 
            className="home__product-wrap"
            style={{left: trans + "px"}}
            ref={move}
          >
            {productList.map((item) => (
              <li>
                <div className="home__product-frame">
                  <div className="home__product">
                    <Product 
                      ref={product}
                      img={item.img}
                      name={item.name}
                      type={item.type}
                      price={item.price}
                    />
                  </div>    
                </div>
              </li>
            ))}
          </ul>
        </div>

        <FontAwesomeIcon icon={solid('angle-right')} onClick={handleRightClick}/>
      </div>

    </div>
  )
}

export default Home