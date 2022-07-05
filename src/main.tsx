import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import App from './App'
import Footer from './components/Footer';
import Header from './components/Header';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className='root-content'>
        <Header />
        <App />
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  </React.StrictMode>
)
