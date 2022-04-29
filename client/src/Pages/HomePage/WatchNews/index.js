import React from 'react'
import { useParams } from 'react-router-dom'
import './WatchNews.css'

import NewsPopularImage from './../../../Assets/Images/news-popular-image.svg'
import NewsImageItem from './../../../Assets/Images/news-item.svg'
import NewsItem from '../News/NewsItem'

function WatchNews() {
  const index = useParams()
  const news = [
    {
      title: "Phillipe Auguste",
      subHeader: "Phillipe Auguste mang phong cách cổ điển, sang trọng với những thiết kế đồng hồ dành riêng cho thị trường. Mức giá vô cùng hợp lý, chỉ từ 4 triệu đồng, khách hàng đã có thể lên tay những chiếc đồng hồ lịch lãm và đẳng cấp như những quý ông Châu Âu.",
      image: NewsPopularImage,
      date: "04/04/2022",
      content: "Bắt nguồn từ câu chuyện về hoàng đế Philippe Auguste (Philipe II) - Quốc vương đầu tiên của nước Pháp với tham vọng gây dựng đế chế cho riêng mình. Ông đã trải qua hơn hai thập kỷ chiến đấu, mở rộng lãnh thổ nhằm củng cố vương vị, quyền lực và sức mạnh. Nhờ tài trí, mưu lược, Philippe Auguste đã biến Pháp từ một đất nước phong kiến nhỏ bé trở thành quốc gia thịnh vượng và hùng mạnh ở châu Âu."
    },
    {
      title: "EPOS - Thụy Sĩ",
      subHeader: "Epos nằm trong trong top 10 hãng đồng hồ độc lập uy tín nhất trong ngành đồng hồ Thụy Sĩ. Những chiếc đồng hồ được sản xuất thủ công với bí quyết lâu đời đã tạo ra những chiếc đồng hồ tuyệt vời.",
      image: NewsPopularImage,
      date: "03/04/2022",
      content: "Bắt nguồn từ câu chuyện về hoàng đế Philippe Auguste (Philipe II) - Quốc vương đầu tiên của nước Pháp với tham vọng gây dựng đế chế cho riêng mình. Ông đã trải qua hơn hai thập kỷ chiến đấu, mở rộng lãnh thổ nhằm củng cố vương vị, quyền lực và sức mạnh. Nhờ tài trí, mưu lược, Philippe Auguste đã biến Pháp từ một đất nước phong kiến nhỏ bé trở thành quốc gia thịnh vượng và hùng mạnh ở châu Âu."
    },
    {
      title: "Aries Gold",
      subHeader: "Các sản phẩm của hãng luôn hướng đến phong cách, thời trang và xu hướng mới nhất của thế giới với giá cả hợp lý. Thương hiệu Aries Gold do CK Woo sáng lập năm 1970 tại Singapore, chuyên cung cấp đồng hồ và phụ kiện cao cấp với giá phù hợp với người tiêu dùng.",
      image: NewsImageItem,
      date: "02/04/2022",
      content: "Bắt nguồn từ câu chuyện về hoàng đế Philippe Auguste (Philipe II) - Quốc vương đầu tiên của nước Pháp với tham vọng gây dựng đế chế cho riêng mình. Ông đã trải qua hơn hai thập kỷ chiến đấu, mở rộng lãnh thổ nhằm củng cố vương vị, quyền lực và sức mạnh. Nhờ tài trí, mưu lược, Philippe Auguste đã biến Pháp từ một đất nước phong kiến nhỏ bé trở thành quốc gia thịnh vượng và hùng mạnh ở châu Âu."
    },
    {
      title: "Stuhrling Original",
      subHeader: "Chiếc đồng hồ cơ với các chi tiết phức tạp luôn là niềm đam mê của những ai yêu đồng hồ. Một bộ máy cơ khí thường có 5 bộ phận cơ bản: bộ phận tạo năng lượng, các bánh răng, bộ thoát, phần điều khiển và bộ phận hiển thị thời gian. Năng lượng được nạp vào đồng hồ bằng cách vặn cót bằng tay hoặc lên dây tự động.",
      image: NewsImageItem,
      date: "01/04/2022",
      content: "Bắt nguồn từ câu chuyện về hoàng đế Philippe Auguste (Philipe II) - Quốc vương đầu tiên của nước Pháp với tham vọng gây dựng đế chế cho riêng mình. Ông đã trải qua hơn hai thập kỷ chiến đấu, mở rộng lãnh thổ nhằm củng cố vương vị, quyền lực và sức mạnh. Nhờ tài trí, mưu lược, Philippe Auguste đã biến Pháp từ một đất nước phong kiến nhỏ bé trở thành quốc gia thịnh vượng và hùng mạnh ở châu Âu."
    }
  ]

  return (
    <div className="watch-news">
      <div className="watch-news-img-wrapper">
        <img src={news[index.id].image} alt="img" className="watch-news-img"/>
      </div>

      <div className="watch-news-main">
        <div className="watch-news-main-title">{news[index.id].title}</div>
        <div className="watch-news-main-wrapper">
          <div className="watch-news-main-date">{news[index.id].date}</div>
          <div className="watch-news-main-author">admin</div>
        </div>
        <div className="watch-news-main-subheader">{news[index.id].subHeader}</div>
        <div className="watch-news-main-content">
          <div className="watch-news-main-content-word">{news[index.id].content}</div>
          <div className="watch-news-main-content-img-wrapper">
            <img className="watch-news-main-content-img" src={news[index.id].image} alt="img" />
          </div>
          <div className="watch-news-main-content-word">{news[index.id].content}</div>
          <div className="watch-news-main-content-img-wrapper">
            <img className="watch-news-main-content-img" src={news[index.id].image} alt="img" />
          </div>
          <div className="watch-news-main-content-word">{news[index.id].content}</div>
          <div className="watch-news-main-content-img-wrapper">
            <img className="watch-news-main-content-img" src={news[index.id].image} alt="img" />
          </div>
          <div className="watch-news-main-content-word">{news[index.id].content}</div>
          <div className="watch-news-main-content-img-wrapper">
            <img className="watch-news-main-content-img" src={news[index.id].image} alt="img" />
          </div>
        </div>
        <div className="watch-news-main-wrapper">
          <div className="watch-news-main-date">{news[index.id].date}</div>
          <div className="watch-news-main-author">admin</div>
        </div>
      </div>

      <div className="watch-news-other">
        <div className="watch-news-other-title">BÀI VIẾT KHÁC</div>
        <ul className="watch-news-other-wrapper">
          {
            news.map((element, ind) => 
            ind != index.id && 
            (
              <NewsItem 
                index={ind}
                title={element.title}
                subHeader={element.subHeader}
                img={element.image}
                date={element.date}
                width={360}
                height={400}
            />
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default WatchNews