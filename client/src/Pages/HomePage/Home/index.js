import React, { useState, useRef, useEffect } from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import watchImg from './../../../Assets/Images/Rectangle 5.png';
import Advertisement from '../../../Components/Advertisement';
import adImg1 from './../../../Assets/Images/Rectangle 6.png';
import adImg2 from './../../../Assets/Images/Rectangle 7.png';
import List from '../../../Components/List';
import listImg1 from './../../../Assets/Images/Rectangle 8.png';
import listImg2 from './../../../Assets/Images/Rectangle 9.png';
import listImg3 from './../../../Assets/Images/Rectangle 10.png';
import Product from '../../../Components/Product';
import pro1 from './../../../Assets/Images/Rectangle 11.png';
import ContactItem from '../../../Components/ContactItem/index';
import newsItemImg1 from './../../../Assets/Images/news-item-1.svg';
import newsItemImg2 from './../../../Assets/Images/news-item-2.svg';
import newsItemImg3 from './../../../Assets/Images/news-item-3.svg';
import newsItemImg4 from './../../../Assets/Images/news-item-4.svg';
import NewsItem from '../../../Components/NewsItem';
import poster from './../../../Assets/Images/image 2.png';

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

const contactList = [
  {
    title: "ĐỊA CHỈ",
    icon: "location-dot",
    content: ["64/15 Nguyên Hồng", "Phường 1, Quận Gò Vấp", "Thành phố Hồ Chí Minh"]
  },
  {
    title: "GIỜ MỞ CỬA",
    icon: "clock",
    content: ["Thứ 2 - Thứ 6: 8h00 - 20h00", "Thứ 7: 8h00 - 21h00", "Chủ nhật: 8h00 - 21h30"]
  },
  {
    title: "EMAIL",
    icon: "envelope",
    content: ["uitwatch@gmail.com", "19522009@gm.uit.edu.vn", "nduyan1601@gmail.com"]
  },
  {
    title: "ĐIỆN THOẠI",
    icon: "phone",
    content: ["Anh An - 0938269974", "Anh Phong - 093569712", "Anh Hưng - 0908926975"]
  }
]

const newsList = [
  {
    img: newsItemImg1,
    title: "Phillipe Auguste",
    desc: "Phillipe Auguste mang phong cách cổ điển, sang trọng với những thiết kế đồng hồ dành riêng cho thị trường. Mức giá vô cùng hợp lý...."
  },
  {
    img: newsItemImg2,
    title: "EPOS - Thụy Sĩ",
    desc: "Epos nằm trong trong top 10 hãng đồng hồ độc lập uy tín nhất trong ngành đồng hồ Thụy Sĩ. Những chiếc đồng hồ được sản xuất..."
  },
  {
    img: newsItemImg3,
    title: "Aries Gold",
    desc: "Các sản phẩm của hãng luôn hướng đến phong cách, thời trang và xu hướng mới nhất của thế giới với giá cả hợp lý..."
  },
  {
    img: newsItemImg4,
    title: "Stuhrling Original",
    desc: "Chiếc đồng hồ cơ với các chi tiết phức tạp luôn là niềm đam mê của những ai yêu đồng hồ. Một bộ máy cơ khí thường có 5 bộ phận..."
  }
]

function Home() {
  const [trans, setTrans] = useState(0);
  const [num, setNum] = useState(0);

  const move = useRef();
  const product = useRef()

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
            {productList.map((item, index) => (
              <li key={index}>
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

      <img src={poster} alt="image-poster" style={{margin: "20px 0"}}/>

      <div className="home__bottom">
        <div className="home__bottom-contact">
            <div className="home__bottom-contact-title">THÔNG TIN LIÊN LẠC</div>
            <div className="home__bottom-contact-desc">Nếu bạn có bất kì phản hồi gì về tiệm bánh HachatMacaron, hãy liên hệ ở các thông tin bên dưới:</div>
            <div className="home__bottom-contact-list">
            {
              contactList.map((element, index) => (
                <ContactItem
                  key={index}
                  title={element.title}
                  icon={element.icon}
                  content={element.content}
                ></ContactItem>
              ))
            }
            </div>
        </div>

        <div className="home__bottom-line"></div>

        <div className="home__bottom-news">
          <div className="home__bottom-news-title">TIN TỨC VÀ BÀI VIẾT</div>
          <div className="home__bottom-news-list">
            {
              newsList.map((element, index) => (
                <NewsItem
                  key={index}
                  img={element.img}
                  title={element.title}
                  desc={element.desc}
                ></NewsItem>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home