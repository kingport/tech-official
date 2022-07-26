import Axios from "axios";

const axios = Axios.create({
  baseURL:  '/api',
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
  console.log(config, 'config');

  return config;
});

axios.interceptors.response.use(
  (response) => {
      const data = response.data;
      console.log('response:', response);
      if (response.status === 200) {
          return data;
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
