import { instance } from '@/utils/request.js'

// 获取所有角色列表
export const getAllRoleListHandler = function(params) {
  return instance({
    method: 'get',
    url: '/setting/role',
    params
  })
}
