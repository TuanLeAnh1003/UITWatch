import React, { useState, useEffect } from 'react'
import './NewsManagement.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import { Link } from 'react-router-dom'
import NewsApi from '../../../Apis/NewsApi'
import UserApi from '../../../Apis/UserApi'

function NewsManagement() {
  const [hideDeletePopup, setHideDeletePopup] = useState(false)
  const [newsList, setNewsList] = useState()
  const [firstName, setFirstName] = useState()

  useEffect(() => {
    NewsApi.getAll()
    .then((res) => {
      console.log(res);
      setNewsList(res)
    })
  }, [])

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
          {newsList?.map((news, i) => (
            <tr key={i}>
              <td>{news?.title}</td>
              {
                news?.sub_header.length > 100 ? (
                  <td>
                    {
                      `${news?.sub_header.substring(0, 100)}...`
                    }
                  </td>
                ) : (
                  <td>{news?.sub_header}</td>
                )
              }
              <td>{news?.user_id}</td>
              <td>{news?.date}</td>
              {
                news?.content.length > 100 ? (
                  <td>
                    {
                      `${news?.content.substring(0, 100)}...`
                    }
                  </td>
                ) : (
                  <td>{news?.content}</td>
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