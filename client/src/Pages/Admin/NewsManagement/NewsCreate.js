import React, { useState, useEffect } from 'react'
import './NewsCreate.css'
import { Link } from 'react-router-dom'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import NewsApi from '../../../Apis/NewsApi'
import UserApi from '../../../Apis/UserApi'
import  {storage}  from '../../../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 } from "uuid";

function NewsCreate() {
  const [content, setContent] = useState()
  const [firstName, setFirstName] = useState()
  const [title, setTitle] = useState()
  const [image, setImage] = useState()
  const [imageUrl, setImageUrl] = useState()
  const [subHeader, setSubHeader] = useState()
  
  useEffect(() => {
    UserApi.getMe({ id: localStorage.getItem("userid") })
    .then((res) => {
      setFirstName(res.firstName)
    })
  }, [])

  console.log(content);

  const handleCreateNews = () => {
    if (image == null) return;
    const imageRef = ref(storage, `news/${image.name + v4()}`);
    uploadBytes(imageRef, image).then(() => {
      getDownloadURL(imageRef).then(data => {
        setImageUrl(data)
        console.log(imageUrl);
      })
    })

    NewsApi.createNews({
      userId: localStorage.getItem("userid"),
      title: title,
      subHeader: subHeader,
      image: imageUrl,
      content: content
    })
    .then((res) => {  
      console.log(res);
    })
  }

  return (
    <form className="news-create">
      <div className="news-create-wrapper">
        <h1>TẠO BÀI VIẾT</h1>
        <p>Tạo bài viết mới UITWatch ở đây</p>
      </div>
      <div className="news-create-form">
        <div className="news-create-item">
          <p>Tên chủ đề</p>
          <input type="text" name="title" placeholder="Nhập chủ đề ..." onChange={e => setTitle(e.target.value)}/>
        </div>
        <div className="news-create-item">
          <p>Tiêu đề phụ</p>
          <input type="text" name="subHeader" placeholder="Nhập tiêu đề phụ ..." onChange={e => setSubHeader(e.target.value)}/>
        </div>
        <div className="news-create-item">
          <p>Hình ảnh chung</p>
          <input type="file" name="image" onChange={e => setImage(e.target.files[0])}/>
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
                ckfinder: {
                  uploadUrl: 'http://localhost:5000/uploads'
                }
              }
            }
            onChange = {(event, editor) => {
              const data = editor.getData();
              setContent(data)
            }}
          />
        </div>
      </div>
      <div className="news-create-func">
        <div onClick={handleCreateNews}>TẠO</div>
        <Link className="news-create-func--cancel" to="/admin/news-management">HỦY</Link>
      </div>
    </form>
  )
}

export default NewsCreate
