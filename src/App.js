import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import Header from './components/Header';
import LandingPage from './pages/LandingPage';
import Products from "./pages/Products";
import SearchResult from './pages/SearchResult';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/search" element={<SearchResult/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
