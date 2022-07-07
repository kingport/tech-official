import Axios from "axios";

const axios = Axios.create({
  baseURL:  '',
  timeout: 1000,
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
