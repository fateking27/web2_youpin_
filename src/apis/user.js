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

// 获取所有单个用户详情
export const getUserByIdHandler = function(id) {
  return instance({
    method: 'get',
    url: `/user/user/${id}`
  })
}

// 获取所有用户等级
export const getUserLevelHandler = function() {
  return instance({
    method: 'get',
    url: '/user/user_level/vip_list'
  })
}

// 获取所有用户等级
export const getUserGroupHandler = function() {
  return instance({
    method: 'get',
    url: '/user/user_group/list'
  })
}

// 获取所有用户标签
export const getUserTagHandler = function() {
  return instance({
    method: 'get',
    url: '/user/label/0'
  })
}

// 新增用户
export const addUserHandler = function(data) {
  return instance({
    method: 'post',
    url: '/user/user',
    data
  })
}

// 编辑用户
export const editUserHandler = function(data) {
  return instance({
    method: 'put',
    url: `/user/user/${data.uid}`,
    data
  })
}
