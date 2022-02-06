import axios from 'axios';

const RESPAY = axios.create({
    baseURL: 'https://demo.respay.com/api/'
});


RESPAY.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accesstoken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
  },

  (error) => {
    return Promise.reject(error);
  }
);

export default RESPAY;