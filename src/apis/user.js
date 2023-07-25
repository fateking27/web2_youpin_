// 这个文件实现用户数据的  增加删除修改和查询
// import { instance } from '@/utils/request.js'
import axios from '@/utils/request.js'

// 登陆
export const userLoginApi = function(data){
  return axios({
    url: '/member/login',
    method: 'post',
    data
  })
}


export const getUserListApi = function(data){
  return axios({
    url: '/member/login',
    method: 'post',
    data
  })
}