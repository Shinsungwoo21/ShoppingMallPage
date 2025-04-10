import { useEffect, useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import  ProductAll from "./pages/ProductAll";
import ProductDetail from "./pages/ProductDetail";
import Login from "./pages/Login";
import Navbar from './components/Navbar';
import PrivateRoute from './routes/PrivateRoute';

function App() {
  
  const [authenticate, setAuthenticate] = useState(false);

  useEffect(() => {
    console.log("로그인 확인 :", authenticate);
  }, [authenticate]);

  return (
    <div>
      <Navbar setAuthenticate={setAuthenticate} authenticate={authenticate}/>
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/login" element={<Login setAuthenticate={setAuthenticate} />} />
        <Route path="/product/:id" element={<PrivateRoute authenticate={authenticate} />} />
      </Routes>
    </div>
  );
}

export default App;
