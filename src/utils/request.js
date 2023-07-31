import axios from 'axios'

// axios.defaults.baseURL = 'https://youpin.nuok.com/adminapi'

export const instance = axios.create({
  baseURL: 'https://youpin.nuok.com/adminapi'
})
