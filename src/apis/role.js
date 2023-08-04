import { instance } from '@/utils/request.js'

// 获取所有角色列表
export const getAllRoleListHandler = function(params) {
  return instance({
    method: 'get',
    url: '/setting/role',
    params
  })
}

// 获取所有权限列表
export const getAllRightListHandler = function() {
  return instance({
    method: 'get',
    url: '/setting/role/create'
  })
}

// 角色入库
export const storeRoleHandler = function(data) {
  return instance({
    method: 'post',
    url: `/setting/role/${data.id}`,
    data
  })
}

// 待编辑角色信息
export const getRoleByIdHandler = function(id) {
  return instance({
    method: 'get',
    url: `/setting/role/${id}/edit`
  })
}
