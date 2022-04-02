import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Sale from './Pages/Sale';

function App() {
  return (
    <div className="App">
      <Header />
        
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sale" element={<Sale />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
