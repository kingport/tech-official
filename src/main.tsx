import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, HashRouter } from "react-router-dom";
import App from './App'
import Header from './components/Header';
import {
  QueryClient,
  QueryClientProvider, 
} from 'react-query'
import './index.css'

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
  // <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <HashRouter>
        <div className='root-content'>
          <Header />
          <App />
        </div>
      </HashRouter>
    </QueryClientProvider>
  // </React.StrictMode>
)
