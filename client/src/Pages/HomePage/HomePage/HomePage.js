import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from '../../../Components/Footer/Footer';
import Header from '../../../Components/Header/Header';
import Home from '../Home';
import ProductDetail from '../ProductDetail';
import SearchOrder from '../SearchOrder'
import ResultSearchOrder from '../ResultSearchOrder'
import News from '../News/News'
import WatchNews from '../WatchNews';
import Contact from '../Contact';
import Cash from '../Payment/Cash';
import Momo from '../Payment/Momo';
import Search from '../Search';
import SaleOff from '../SaleOff';
import Payment from '../Payment/Payment';
import Cart from '../Cart';
import LikedProduct from '../LikedProduct/LikedProduct';
import Policy from '../Policy';
import About from '../About';
import Consult from '../Consult';
import Sale from '../Sale';
import Account from '../Account';

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
      <Route path="/policy" element={<Policy />} />
      <Route path="/account/:id" element={<Account />} />
      <Route path="/about" element={<About />} />
      <Route path="/consult" element={<Consult />} />
    </Routes>
    <Footer />
    </div>
  )
}

export default HomePage