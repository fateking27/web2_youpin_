// 引入Vue，才能创建Vue实例
import Vue from 'vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

// 当前引入的，需要进行渲染的组件
// import App from './App.vue'
// 将路径修改为你当前想要渲染的组件的路径
// @ 代表src

// 根组件，在main.js中第一次渲染的组件
// 根组件的内容在项目中始终可见
// 一般情况下，在项目中。根组件中一个空白容器
import App from './App.vue'
// import App from './components/day6/路由讲解/index.vue'

// 如果这个包整个项目都需要使用，那么就可以在main.js中进行全局引入--只需要引入一次
import 'normalize.css'
// import '@/styles/reset.less'
import './styles/bootstrap.css'

Vue.config.productionTip = false

import router from '@/router/index.js'

// 创建Vue实例，实现渲染--渲染页面 -- 已经完成了渲染的组件
new Vue({
  router,
  // 实现组件的渲染
  render: h => h(App)
}).$mount('#app') // 将渲染的结果挂载到html页面中的app标签
