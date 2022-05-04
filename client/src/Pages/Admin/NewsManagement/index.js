import React, { useState } from 'react'
import './NewsManagement.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import { Link } from 'react-router-dom'

function NewsManagement() {
  const [hideDeletePopup, setHideDeletePopup] = useState(false)

  const listNews = [
    {
      title: "Phillipe Auguste",
      subHeader: "Phillipe Auguste mang phong cách cổ điển, sang trọng với những thiết kế đồng hồ dành riêng cho thị trường. Mức giá vô cùng hợp lý...",
      author: "Duy An",
      content: "Bắt nguồn từ câu chuyện về hoàng đế Philippe Auguste (Philipe II) - Quốc vương đầu tiên của nước Pháp với tham vọng gây dựng... Bắt nguồn từ câu chuyện về hoàng đế Philippe Auguste (Philipe II) - Quốc vương đầu tiên của nước Pháp với tham vọng gây dựng...",
      datetime: "31/03/2022 lúc 10:43 chiều"
    },
    {
      title: "Phillipe Auguste",
      subHeader: "Phillipe Auguste mang phong cách cổ điển, sang trọng với những thiết kế đồng hồ dành riêng cho thị trường. Mức giá vô cùng hợp lý...",
      author: "Duy An",
      content: "Bắt nguồn từ câu chuyện về hoàng đế Philippe Auguste (Philipe II) - Quốc vương đầu tiên của nước Pháp với tham vọng gây dựng... Bắt nguồn từ câu chuyện về hoàng đế Philippe Auguste (Philipe II) - Quốc vương đầu tiên của nước Pháp với tham vọng gây dựng...",
      datetime: "31/03/2022 lúc 10:43 chiều"
    }
  ]

  return (
    <div className="news-mng">
      <h1>Quản lý bài viết</h1>
      <div className="news-mng-wrap">
        <Link className="news-mng-create" to='/admin/news-create'>Tạo bài viết</Link>
        <div className="news-mng-search">
          <input type="text" placeholder="Tìm bài viết ..." />
          <FontAwesomeIcon className="news-mng-search--icon" icon={solid('search')} />
        </div>
      </div>
      <table>
        <thead>
          <tr>
              <th>Tiêu đề</th>
              <th>Tiêu đề phụ</th>
              <th>Tác giả</th>
              <th>Thời gian</th>
              <th>Nội dung</th>
              <th></th>
          </tr>
        </thead>
        <tbody>
          {listNews.map((news, i) => (
            <tr key={i}>
              <td>{news.title}</td>
              {
                news.subHeader.length > 100 ? (
                  <td>
                    {
                      `${news.subHeader.substring(0, 100)}...`
                    }
                  </td>
                ) : (
                  <td>{news.subHeader}</td>
                )
              }
              <td>{news.author}</td>
              <td>{news.datetime}</td>
              {
                news.content.length > 100 ? (
                  <td>
                    {
                      `${news.content.substring(0, 100)}...`
                    }
                  </td>
                ) : (
                  <td>{news.content}</td>
                )
              }
              <td>
                <FontAwesomeIcon icon={solid('eye')} />{"  "}
                <Link to="/admin/news-update" style={{textDecoration: 'none', color: '#855446'}}>
                  <FontAwesomeIcon icon={solid('pen')} />{"  "}
                </Link>
                <FontAwesomeIcon icon={solid('trash')} style={{cursor: 'pointer'}} onClick={e => setHideDeletePopup(true)}/>
              </td>
            </tr>
          ))}
          
        </tbody>
      </table>
      {
        hideDeletePopup && (
          <div className="news-mng-delete-wrapper" onClick={e => setHideDeletePopup(false)}>
            <div className="news-mng-delete" onClick={e => e.stopPropagation()}>
              <h3>Xóa bài viết</h3>
              <FontAwesomeIcon className="news-mng-delete-icon" icon={solid('circle-xmark')} onClick={e => setHideDeletePopup(false)}/>
              <p>Bạn có chắc mình muốn xóa bài viết này?</p>
              <button>
                Hủy bỏ
              </button>
              <button>
                Xóa luôn
              </button>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default NewsManagement