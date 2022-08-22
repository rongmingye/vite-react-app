import config from '~/config/index.js'
import http from '@/utils/http.js'

export default {
  login: (data) => {
    return http.post(`${config.apiBaseUrl}/login`, data)
  },
  register: (data) => {
    return http.post(`${config.apiBaseUrl}/register`, data)
  },
  getUserInfo: (id) => {
    return http.get(`${config.apiBaseUrl}/user/${id}`)
  }
}