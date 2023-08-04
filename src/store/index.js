import Vue from 'vue'
import Vuex from 'vuex'

import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true,
  state: {
    // 路径导航
    breadCrumbTitle: [],
    // 当前登陆用户信息
    userInfo: {},
    token: '',
    userData:{}
  },
  mutations: {
    // 更新路径导航的值
    updateBreadPath(state, payload) {
      state.breadCrumbTitle = payload
    },
    // 存储当前登陆用户的信息
    updateUserInfo(state, payload) {
      state.userInfo = payload
    },
    // 存储token
    updateToken(state, token) {
      state.token = token
    },
    updateUserData(state,data){
      state.userData = data
    }
  },
  // 解决刷新数据丢失的问题
  plugins: [
    createPersistedState({
      // 选择本地存储方式
      storage: window.localStorage,
      // reducer:决定那些数据需要进行本地存储
      reducer(val) {
        // val相当于State
        return val
      }
    })
  ]
})

export default store
