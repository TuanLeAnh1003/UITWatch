import React from 'react'
import './News.css'
import NewsItem from './NewsItem'

import NewsPopularImage from './../../../Assets/Images/news-popular-image.svg'
import NewsImageItem from './../../../Assets/Images/news-item.svg'

function News() {
  const news = [
    {
      title: "Phillipe Auguste",
      subHeader: "Phillipe Auguste mang phong cách cổ điển, sang trọng với những thiết kế đồng hồ dành riêng cho thị trường. Mức giá vô cùng hợp lý, chỉ từ 4 triệu đồng, khách hàng đã có thể lên tay những chiếc đồng hồ lịch lãm và đẳng cấp như những quý ông Châu Âu.",
      image: NewsPopularImage,
      date: "04/04/2022"
    },
    {
      title: "EPOS - Thụy Sĩ",
      subHeader: "Epos nằm trong trong top 10 hãng đồng hồ độc lập uy tín nhất trong ngành đồng hồ Thụy Sĩ. Những chiếc đồng hồ được sản xuất thủ công với bí quyết lâu đời đã tạo ra những chiếc đồng hồ tuyệt vời.",
      image: NewsPopularImage,
      date: "03/04/2022"
    },
    {
      title: "Aries Gold",
      subHeader: "Các sản phẩm của hãng luôn hướng đến phong cách, thời trang và xu hướng mới nhất của thế giới với giá cả hợp lý. Thương hiệu Aries Gold do CK Woo sáng lập năm 1970 tại Singapore, chuyên cung cấp đồng hồ và phụ kiện cao cấp với giá phù hợp với người tiêu dùng.",
      image: NewsImageItem,
      date: "02/04/2022"
    },
    {
      title: "Stuhrling Original",
      subHeader: "Chiếc đồng hồ cơ với các chi tiết phức tạp luôn là niềm đam mê của những ai yêu đồng hồ. Một bộ máy cơ khí thường có 5 bộ phận cơ bản: bộ phận tạo năng lượng, các bánh răng, bộ thoát, phần điều khiển và bộ phận hiển thị thời gian. Năng lượng được nạp vào đồng hồ bằng cách vặn cót bằng tay hoặc lên dây tự động.",
      image: NewsImageItem,
      date: "01/04/2022"
    }
  ]

  return (
    <div className="news">
      <div className="news-title">TIN TỨC VÀ BÀI VIẾT</div>

      <div className="news-popular">
        <div className="news-popular-image-wrapper">
          <img className="news-popular-image" src={news[0].image} alt="news-img" />
        </div>
        <div className="news-popular-right">
          <div className="news-popular-right-title">{news[0].title}</div>
          <div className="news-popular-right-sub-header">{news[0].subHeader}</div>
          <div className="news-popular-right-bottom">
            <a href="/" className="news-popular-right-bottom-more">Đọc thêm</a>
            <div className="news-popular-right-bottom-date">{news[0].date}</div>
          </div>
        </div>
      </div>

      <ul className="news-item-list">
        {
          news.map((element, index) => 
          index > 0 &&
          (
            <NewsItem 
              index={index}
              title={element.title}
              subHeader={element.subHeader}
              img={element.image}
              date={element.date}
              width={570}
              height={500}
            />
          ))
        }
      </ul>
    </div>
  )
}

export default News