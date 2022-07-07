import { useState } from 'react'
import './App.css'
import './common/common.css'
import 'swiper/css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/home';
import About from './pages/about';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/tech-official" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App
