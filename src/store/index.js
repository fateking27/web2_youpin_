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
    userData: {},
    listTag: [],
    curPath: '/admin/home'
  },
  getters: {
    //取得状态机中的数据，跟计算属性类似
    getListTag(state) {
      return state.listTag
    },
    getCurPath(state) {
      return state.curPath
    }
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
    updateUserData(state, data) {
      state.userData = data
    },
    //修改状态机中的数据，必须是同步方法
    PUSH_TAG(state, newItem) {
      let existObj = state.listTag.find(item => item.path == newItem.path)

      //取消所有选中
      state.listTag.forEach(item => {
        item.isChecked = false
      })

      if (!existObj) {
        state.listTag.push({
          path: newItem.path,
          name: newItem.name,
          isChecked: true
        })
        state.curPath = newItem.path
      } else {
        existObj.isChecked = true
        state.curPath = existObj.path
      }
    },
    UPDATE_CHECKED(state, path) {
      //取消所有选中
      state.listTag.forEach(item => {
        item.isChecked = false
      })

      let existObj = state.listTag.find(item => item.path == path)
      existObj.isChecked = true
      state.curPath = existObj.path
    },
    DEL_TAG(state, path) {
      let pos = state.listTag.findIndex(item => item.path == path)

      if (pos == 0) {
        //删除最左则的数据
        if (state.listTag[pos].isChecked) {
          //要删除的tag是选中状态
          state.listTag.splice(pos, 1)
          if (state.listTag.length > 0) {
            state.listTag[0].isChecked = true
            state.curPath = state.listTag[0].path
          } else {
            this.curPath = ''
          }
        } else {
          //要删除的tag不是选中状态
          state.listTag.splice(pos, 1)
        }
      } else {
        //删除右侧的数据
        if (state.listTag[pos].isChecked) {
          //要删除的tag是选中状态
          state.listTag[pos - 1].isChecked = true
          state.curPath = state.listTag[pos - 1].path
          state.listTag.splice(pos, 1)
        } else {
          //要删除的tag不是选中状态
          state.listTag.splice(pos, 1)
        }
      }
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
