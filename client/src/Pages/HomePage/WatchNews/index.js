import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './WatchNews.css'
import NewsApi from '../../../Apis/NewsApi'

import NewsPopularImage from './../../../Assets/Images/news-popular-image.svg'
import NewsImageItem from './../../../Assets/Images/news-item.svg'
import NewsItem from '../News/NewsItem'

function WatchNews() {
  const { newsId } = useParams()

  useEffect(() => {
    NewsApi.getNewsById({ newsId: newsId})
      .then((res) => {
        console.log(res);
      })
  }, [])

  const news = {
    newsId: "123",
    title: "Phillipe Auguste",
    subHeader:
      "Phillipe Auguste mang phong cách cổ điển, sang trọng với những thiết kế đồng hồ dành riêng cho thị trường. Mức giá vô cùng hợp lý, chỉ từ 4 triệu đồng, khách hàng đã có thể lên tay những chiếc đồng hồ lịch lãm và đẳng cấp như những quý ông Châu Âu.",
    image: NewsPopularImage,
    date: "04/04/2022",
    content:
      "Bắt nguồn từ câu chuyện về hoàng đế Philippe Auguste (Philipe II) - Quốc vương đầu tiên của nước Pháp với tham vọng gây dựng đế chế cho riêng mình. Ông đã trải qua hơn hai thập kỷ chiến đấu, mở rộng lãnh thổ nhằm củng cố vương vị, quyền lực và sức mạnh. Nhờ tài trí, mưu lược, Philippe Auguste đã biến Pháp từ một đất nước phong kiến nhỏ bé trở thành quốc gia thịnh vượng và hùng mạnh ở châu Âu.",
  };

  const newsList = [
    {
      newsId: "123",
      title: "Phillipe Auguste",
      subHeader:
        "Phillipe Auguste mang phong cách cổ điển, sang trọng với những thiết kế đồng hồ dành riêng cho thị trường. Mức giá vô cùng hợp lý, chỉ từ 4 triệu đồng, khách hàng đã có thể lên tay những chiếc đồng hồ lịch lãm và đẳng cấp như những quý ông Châu Âu.",
      image: NewsPopularImage,
      date: "04/04/2022",
      content:
        "Bắt nguồn từ câu chuyện về hoàng đế Philippe Auguste (Philipe II) - Quốc vương đầu tiên của nước Pháp với tham vọng gây dựng đế chế cho riêng mình. Ông đã trải qua hơn hai thập kỷ chiến đấu, mở rộng lãnh thổ nhằm củng cố vương vị, quyền lực và sức mạnh. Nhờ tài trí, mưu lược, Philippe Auguste đã biến Pháp từ một đất nước phong kiến nhỏ bé trở thành quốc gia thịnh vượng và hùng mạnh ở châu Âu.",
    },
    {
      newsId: "123",
      title: "Phillipe Auguste",
      subHeader:
        "Phillipe Auguste mang phong cách cổ điển, sang trọng với những thiết kế đồng hồ dành riêng cho thị trường. Mức giá vô cùng hợp lý, chỉ từ 4 triệu đồng, khách hàng đã có thể lên tay những chiếc đồng hồ lịch lãm và đẳng cấp như những quý ông Châu Âu.",
      image: NewsPopularImage,
      date: "04/04/2022",
      content:
        "Bắt nguồn từ câu chuyện về hoàng đế Philippe Auguste (Philipe II) - Quốc vương đầu tiên của nước Pháp với tham vọng gây dựng đế chế cho riêng mình. Ông đã trải qua hơn hai thập kỷ chiến đấu, mở rộng lãnh thổ nhằm củng cố vương vị, quyền lực và sức mạnh. Nhờ tài trí, mưu lược, Philippe Auguste đã biến Pháp từ một đất nước phong kiến nhỏ bé trở thành quốc gia thịnh vượng và hùng mạnh ở châu Âu.",
    },
    {
      newsId: "123",
      title: "Phillipe Auguste",
      subHeader:
        "Phillipe Auguste mang phong cách cổ điển, sang trọng với những thiết kế đồng hồ dành riêng cho thị trường. Mức giá vô cùng hợp lý, chỉ từ 4 triệu đồng, khách hàng đã có thể lên tay những chiếc đồng hồ lịch lãm và đẳng cấp như những quý ông Châu Âu.",
      image: NewsPopularImage,
      date: "04/04/2022",
      content:
        "Bắt nguồn từ câu chuyện về hoàng đế Philippe Auguste (Philipe II) - Quốc vương đầu tiên của nước Pháp với tham vọng gây dựng đế chế cho riêng mình. Ông đã trải qua hơn hai thập kỷ chiến đấu, mở rộng lãnh thổ nhằm củng cố vương vị, quyền lực và sức mạnh. Nhờ tài trí, mưu lược, Philippe Auguste đã biến Pháp từ một đất nước phong kiến nhỏ bé trở thành quốc gia thịnh vượng và hùng mạnh ở châu Âu.",
    }
  ]

  return (
    <div className="watch-news">
      <div className="watch-news-img-wrapper">
        <img src={news.image} alt="img" className="watch-news-img"/>
      </div>

      <div className="watch-news-main">
        <div className="watch-news-main-title">{news.title}</div>
        <div className="watch-news-main-wrapper">
          <div className="watch-news-main-date">{news.date}</div>
          <div className="watch-news-main-author">admin</div>
        </div>
        <div className="watch-news-main-subheader">{news.subHeader}</div>
        <div className="watch-news-main-content">
          <div className="watch-news-main-content-word">{news.content}</div>
          <div className="watch-news-main-content-img-wrapper">
            <img className="watch-news-main-content-img" src={news.image} alt="img" />
          </div>
          <div className="watch-news-main-content-word">{news.content}</div>
          <div className="watch-news-main-content-img-wrapper">
            <img className="watch-news-main-content-img" src={news.image} alt="img" />
          </div>
          <div className="watch-news-main-content-word">{news.content}</div>
          <div className="watch-news-main-content-img-wrapper">
            <img className="watch-news-main-content-img" src={news.image} alt="img" />
          </div>
          <div className="watch-news-main-content-word">{news.content}</div>
          <div className="watch-news-main-content-img-wrapper">
            <img className="watch-news-main-content-img" src={news.image} alt="img" />
          </div>
        </div>
        <div className="watch-news-main-wrapper">
          <div className="watch-news-main-date">{news.date}</div>
          <div className="watch-news-main-author">admin</div>
        </div>
      </div>

      <div className="watch-news-other">
        <div className="watch-news-other-title">BÀI VIẾT KHÁC</div>
        <ul className="watch-news-other-wrapper">
          {
            newsList.map((element, ind) => 
            ind != newsId && 
            (
              <NewsItem 
                newsId={ind}
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