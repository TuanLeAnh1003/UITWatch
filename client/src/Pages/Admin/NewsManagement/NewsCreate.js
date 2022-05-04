import React from 'react'
import './NewsCreate.css'
import { Link } from 'react-router-dom'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';

function NewsCreate() {
  return (
    <form className="news-create">
      <div className="news-create-wrapper">
        <h1>TẠO BÀI VIẾT</h1>
        <p>Tạo bài viết mới UITWatch ở đây</p>
      </div>
      <div className="news-create-form">
        <div className="news-create-item">
          <p>Tên chủ đề</p>
          <input type="text" name="title" placeholder="Nhập chủ đề ..."/>
        </div>
        <div className="news-create-item">
          <p>Tiêu đề phụ</p>
          <input type="text" name="subHeader" placeholder="Nhập tiêu đề phụ ..."/>
        </div>
        <div className="news-create-item">
          <p>Tác giả</p>
          <input type="text" name="author" placeholder="Nhập tên tác giả ..."/>
        </div>
        <div className="news-create-item">
          <p>Nội dung</p>
          <CKEditor
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

export default NewsCreate
