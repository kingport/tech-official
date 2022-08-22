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
import "@arco-design/web-react/dist/css/arco.css";
// import Footer from './components/Footer';
import SaleModal from './components/SaleModal';
import { SnackbarProvider } from 'notistack';
import './common/animate.css'

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
      <BrowserRouter>
        <SnackbarProvider maxSnack={3}>
          <Header />
          <App />
        </SnackbarProvider>
      </BrowserRouter>
    </QueryClientProvider>
  // </React.StrictMode>
)
