import React from 'react'
import './NewsItem.css'

function NewsItem({img, title, desc}) {
  return (
    <div className="home__bottom-news-item">
      <img className="home__bottom-news-item-img" src={img} alt="news-item-img"></img>
      <div className="home__bottom-news-item-title">{title}</div>
      <div className="home__bottom-news-item-desc">{desc}</div>
      <a href="/" className="home__bottom-news-item-more" >Đọc thêm</a>
    </div>
  )
}

export default NewsItem
