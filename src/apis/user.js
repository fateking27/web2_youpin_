import { instance } from '@/utils/request.js'

// 这个文件主要进行用户数据的相关操作

export const userLogin = function(data) {
  return instance({
    method: 'post',
    url: '/login',
    data
  })
}
