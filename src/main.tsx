import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import App from './App'
import Header from './components/Header';
import {
  QueryClient,
  QueryClientProvider, 
} from 'react-query'
import './index.css'
import Footer from './components/Footer';

const queryClient = new QueryClient({
  defaultOptions:{
    queries: {
      // retry: false,
      // 重新聚焦的时候不能再去获取一次数据了
      refetchOnWindowFocus: false,
    }
  }
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className='root-content'>
          <Header />
          <App />
          {window?.location.pathname !== '/' && <Footer />}
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
)
