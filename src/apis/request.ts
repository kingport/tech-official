import Axios from "axios";
import { Notification } from '@arco-design/web-react';

const axios = Axios.create({
  // baseURL: 'http://106.13.197.84/api',
  baseURL: '/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

axios.interceptors.request.use((config: any) => {
  // Read token for anywhere, in this case directly from localStorage
  const token = localStorage.getItem('token');
  if (token) {
      config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axios.interceptors.response.use(
  (response) => {
      const data = response.data;
      console.log('response:', response);
      if (response.status === 200 && response.data.code === 0) {
          return data;
      }else {
        Notification.error({
          title: 'Error',
          content: response.data.msg,
        })
      }

      return Promise.reject(new Error(response.statusText || 'Error'));
  },
  (error) => {
      console.log('err:', error, error.response); // for debug
      let msg = "请求错误";
      if (error.response && error.response.status) {        
      }

      // throw new Error(error);
      return Promise.reject(error);
  },
);


export default axios;
