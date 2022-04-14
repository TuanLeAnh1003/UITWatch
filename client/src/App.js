import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Sale from './Pages/Sale';
import ProductDetail from './Pages/ProductDetail';
import SearchOrder from './Pages/SearchOrder'
import ResultSearchOrder from './Pages/ResultSearchOrder'
import News from './Pages/News/News'
import WatchNews from './Pages/WatchNews';
import Contact from './Pages/Contact';
import SaleOff from './Pages/SaleOff';

function App() {
  return (
    <div className="App">
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
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
