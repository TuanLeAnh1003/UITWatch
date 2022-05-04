import React from 'react'
import { Link } from 'react-router-dom'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import parse from 'html-react-parser'

function NewsUpdate() {
  const news = {
    title: "Phillipe Auguste",
    subHeader: "Phillipe Auguste mang phong cách cổ điển, sang trọng với những thiết kế đồng hồ dành riêng cho thị trường. Mức giá vô cùng hợp lý...",
    author: "Duy An",
    content: "Bắt nguồn từ câu chuyện về hoàng đế Philippe Auguste (Philipe II) - Quốc vương đầu tiên của nước Pháp với tham vọng gây dựng... Bắt nguồn từ câu chuyện về hoàng đế Philippe Auguste (Philipe II) - Quốc vương đầu tiên của nước Pháp với tham vọng gây dựng...",
    datetime: "31/03/2022 lúc 10:43 chiều"
  }

  return (
    <form className="news-create">
      <div className="news-create-wrapper">
        <h1>SỬA BÀI VIẾT</h1>
        <p>Sửa bài viết mới UITWatch ở đây</p>
      </div>
      <div className="news-create-form">
        <div className="news-create-item">
          <p>Tên chủ đề</p>
          <input type="text" name="title" placeholder={news.title}/>
        </div>
        <div className="news-create-item">
          <p>Tiêu đề phụ</p>
          <input type="text" name="subHeader" placeholder={news.subHeader}/>
        </div>
        <div className="news-create-item">
          <p>Tác giả</p>
          <input type="text" name="author" placeholder={news.author}/>
        </div>
        <div className="news-create-item">
          <p>Nội dung</p>
          <CKEditor
            data={parse(news.content)}
            editor = { ClassicEditor }
            // onReady = {editor => {
            //   // test
            // }}
            config = {
              {
                // ckfinder:{
                //   uploadUrl: 'http://localhost:8000/upload'
                // },
              }
            }
          />
        </div>
      </div>
      <div className="news-create-func">
        <button>TẠO</button>
        <Link className="news-create-func--cancel" to="/admin/news-management">HỦY</Link>
      </div>
    </form>
  )
}

export default NewsUpdate