import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true,
  state: {
    // 路径导航
    breadCrumbTitle: []
  },
  mutations: {
    // 更新路径导航的值
    updateBreadPath(state, payload) {
      state.breadCrumbTitle = payload
    }
  }
})

export default store
