import axios from 'axios'
import { message } from 'antd'

const http = axios.create()

// 添加请求拦截器
http.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
http.interceptors.response.use(function (response) {
  const res = response.data
  
  if (res.code === 9999) {
    message.error(res.msg)
  } else if (res.code === 401) {

  }
  return res;
}, function (error) {
    message.error('系统错误')
  return Promise.reject(error);
})

export default http