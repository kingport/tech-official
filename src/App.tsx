import './App.css'
import './common/common.css'
import 'swiper/css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/home';
import About from './pages/about';
import Honor from './pages/about/honor';
import Quality from './pages/about/quality';
import Responsibility from './pages/about/responsibility';
import News from './pages/about/news';
import NewsDetail from './pages/about/newsDetail';
import Storage from './pages/brand/storage';
import Solar from './pages/brand/solar';
import Part from './pages/brand/part';
import Contact from './pages/contact/index';
import Dealers from './pages/contact/dealers';
import Join from './pages/contact/join';
import React from 'react';
// @ts-ignore
import WOW from "wow.js";


function App() {
  React.useLayoutEffect(() => { 
    const wow = new WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: true,
      live: true,
      scrollContainer: null,
      resetAnimation: true,
    })
    wow.init()
  }, []);
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/honor" element={<Honor />} />
        <Route path="/about/quality" element={<Quality />} />
        <Route path="/about/responsibility" element={<Responsibility />} />        
        <Route path="/about/news" element={<News />} />        
        <Route path="/about/news/:id" element={<NewsDetail />} />        
        <Route path="/brand/storage" element={<Storage />} />        
        <Route path="/brand/solar" element={<Solar />} />        
        <Route path="/brand/part" element={<Part />} />        
        <Route path="/contact" element={<Contact />} />        
        <Route path="/contact/dealers" element={<Dealers />} />        
        <Route path="/contact/join" element={<Join />} />        
      </Routes>
    </div>
  )
}

export default App
