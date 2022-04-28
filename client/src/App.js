import './App.css';
import { Routes, Route } from 'react-router-dom';
import Admin from './Pages/Admin/Admin';
import HomePage from './Pages/HomePage/HomePage';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="*" element={<HomePage />} />
      <Route path='admin/*' element={<Admin />} />
    </Routes>
      
    </div>
  );
}

export default App;
