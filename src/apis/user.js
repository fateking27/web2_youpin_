import { instance } from '@/utils/request.js'

// 这个文件主要进行用户数据的相关操作

// 登陆
export const userLogin = function(data) {
  return instance({
    method: 'post',
    url: '/login',
    data
  })
}

// 获取所有用户数据
export const getUserListHandler = function(params) {
  return instance({
    method: 'get',
    url: '/user/user',
    params
  })
}
