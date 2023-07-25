import axios from 'axios'

axios.defaults.baseURL = 'http://127.0.0.1:9000/api/v1'

export default axios

// axios.create:创建axios实例
// export const instance = axios.create({
//   baseURL: 'http://127.0.0.1:9000/api/v1',
//   timeout: 5000 // 设置请求超时
// })
