import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <>
      <div>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/" element={<Login/>}/>
            <Route path="/" element={<Register/>}/>
          </Routes>
        <Footer/>
      </div>
    </>
  );
}

export default App;
