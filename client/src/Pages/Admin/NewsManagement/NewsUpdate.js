import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import parse from 'html-react-parser'
import NewsApi from '../../../Apis/NewsApi';
import  {storage}  from '../../../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 } from "uuid";

function NewsUpdate() {
  const [news, setNews] = useState({
    title: '',
    sub_header: '',
    image: '',
    content: ''
  })
  const [imageUrl, setImageUrl] = useState()

  const [title, setTitle] = useState(news.title)
  const [image, setImage] = useState(news.image)
  const [subHeader, setSubHeader] = useState(news.sub_header)
  const [content, setContent] = useState(news.content)
  const { newsId } = useParams()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    NewsApi.getNewsById({
      newsId: newsId,
    })
    .then((res) => {
      console.log(res);
      setNews(res)
      setImage(res.image)
      setContent(res.content)
      setTitle(res.title)
      setSubHeader(res.sub_header)
    })
  }, [])

  const handleUpdateNews = () => {
    if (image == null) return;
    const imageRef = ref(storage, `news/${image.name + v4()}`);
    uploadBytes(imageRef, image).then(() => {
      getDownloadURL(imageRef).then(async data => {
        await setImageUrl(data)
        console.log(imageUrl);

        NewsApi.updateNews({
          news_id: newsId,
          title: title,
          sub_header: subHeader,
          image: imageUrl,
          content: content,
        })
        .then((res) => {
          console.log(res);
        })
      })
    })
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
          <input type="text" name="title" placeholder={news?.title} onChange={e => setTitle(e.target.value)}/>
        </div>
        <div className="news-create-item">
          <p>Tiêu đề phụ</p>
          <input type="text" name="subHeader" placeholder={news?.sub_header} onChange={e => setSubHeader(e.target.value)}/>
        </div>
        <div className="news-create-item">
          <p>Hình ảnh chung</p>
          <input type="file" name="image" onChange={e => setImage(e.target.files[0])}/>
        </div>
        {
          typeof image === "object" ? 
          (<img style={{ maxWidth: '200px' }} src={window.URL.createObjectURL(image)} alt="img" />)
          : 
          (<img style={{ maxWidth: '200px' }} src={image} alt="img" />)
        }
        <div className="news-create-item">
          <p>Nội dung</p>
          <CKEditor
            data = {content}
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
        <div onClick={handleUpdateNews}>CẬP NHẬT</div>
        <Link className="news-create-func--cancel" to="/admin/news-management">HỦY</Link>
      </div>
    </form>
  )
}

export default NewsUpdate