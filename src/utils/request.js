import axios from 'axios'
import { Message } from 'element-ui'
import router from '@/router/index.js'
import store from '@/store/index.js'

// console.log('store.state----', store.state)

// axios.defaults.baseURL = 'https://youpin.nuok.com/adminapi'

export const instance = axios.create({
  baseURL: 'https://youpin.nuok.com/adminapi'
})

// 添加请求拦截器
instance.interceptors.request.use(
  function(config) {
    // 在发送请求之前做些什么
    let token = store.state.token
    if (token) {
      config.headers['Authori-Zation'] = 'Bearer ' + token
    }
    return config
  },
  function(error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
instance.interceptors.response.use(
  function(response) {
    // console.log('response---', response)
    if (response.data.status == 110003) {
      // 提示
      Message.warning('未登陆，请先登陆')
      // 重定向到登陆
      router.push('/login')
    }

    // 对响应数据做点什么
    return response
  },
  function(error) {
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)
