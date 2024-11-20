// src/api/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://your-backend-url.com/api',
});

export default axiosInstance;
