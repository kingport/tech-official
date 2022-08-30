import './App.css';
import './common/common.css';
import 'swiper/css';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
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
import React, { useState } from 'react';
// @ts-ignore
import WOW from 'wow.js';
import { AnimatedRoutes } from 'react-animated-router';
import 'react-animated-router/animate.css';
import gsap from 'gsap';
import { useCompanyIdResult } from './hooks/useCompanyIdResult';
import { useDocumentTitle } from './hooks/useDocumentTitle';
import SaleModal from './components/SaleModal';

export const appContext = React.createContext<any>(null);

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
    });
    wow.init();
  }, []);

  const location = useLocation();
  const [show, setShow] = useState(false);

  React.useEffect(() => {
    if (location.pathname === '/') {
      new gsap.core.Tween(['.container-fluid', '.children-nav'], 0.1, {
        backgroundColor: 'transparent',
        color: '#000',
      });
    } else {
      new gsap.core.Tween(['.container-fluid', '.children-nav'], 0.3, {
        backgroundColor: '#f8f8f8',
        color: '#000',
      });
    }

    if (location.pathname.includes('brand')) {
      setShow(false);
    } else {
      setShow(true);
    }
  }, [location.pathname]);

  useDocumentTitle(
    location.pathname === '/'
      ? 'Home'
      : location?.pathname?.replace(new RegExp('/', 'gm'), ' ').toUpperCase()
  );
  const { data: companyIdResult } = useCompanyIdResult({
    domainName:
      window.location.hostname === 'localhost'
        ? 'test.wangdingkun.xyz'
        : window.location.hostname,
  });

  return (
    <div className="App">
      <appContext.Provider value={companyIdResult}>
        <AnimatedRoutes animated-router-forward="fadeInDown">
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
          <Route path="/contact" element={<Dealers />} />
          <Route path="/contact/dealers" element={<Dealers />} />
          <Route path="/contact/join" element={<Join />} />
        </AnimatedRoutes>
        {show && <SaleModal />}
      </appContext.Provider>
    </div>
  );
}

export default App;
