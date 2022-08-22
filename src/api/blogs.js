import config from '~/config'
import http from '@/utils/http.js'

export default {
  getBlogs: (params) => {
    return http.get(`${config.apiBaseUrl}/blogs/get`, {params})
  },
  getBlogDetail: (params) => {
    return http.get(`${config.apiBaseUrl}/blogs/${params.id}`)
  },
}