import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Home from '../../Pages/Home';
import Sale from '../../Pages/Sale';
import ProductDetail from '../../Pages/ProductDetail';
import SearchOrder from '../../Pages/SearchOrder'
import ResultSearchOrder from '../../Pages/ResultSearchOrder'
import News from '../../Pages/News/News'
import WatchNews from '../../Pages/WatchNews';
import Contact from '../../Pages/Contact';
import Cash from '../../Pages/Payment/Cash';
import Momo from '../../Pages/Payment/Momo';
import Search from '../../Pages/Search';
import SaleOff from '../../Pages/SaleOff';
import Payment from '../../Pages/Payment/Payment';
import Cart from '../../Pages/Cart';
import LikedProduct from '../../Pages/LikedProduct/LikedProduct';

function HomePage() {
  return (
    <div>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sale" element={<Sale />} />
      <Route path="/saleoff" element={<SaleOff />} />
      <Route path="/product" element={<ProductDetail brand="Rolex" type="Rolex bạc"/>} />
      <Route path="/search-order" element={<SearchOrder />} />
      <Route path="/result-search-order" element={<ResultSearchOrder />} />
      <Route path="/news" element={<News />} />
      <Route path="/watch-news/:id" element={<WatchNews />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/cash" element={<Cash />} />
      <Route path="/momo" element={<Momo />} />
      <Route path="/search" element={<Search />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/liked-products" element={<LikedProduct />} />
    </Routes>
    <Footer />
    </div>
  )
}

export default HomePage