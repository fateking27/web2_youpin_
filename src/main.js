// 引入Vue，才能创建Vue实例
import Vue from 'vue'

// 当前引入的，需要进行渲染的组件
// import App from './App.vue'
// 将路径修改为你当前想要渲染的组件的路径
// @ 代表src
import App from '@/components/day1/01-单文件组件的体验.vue'

// 如果这个包整个项目都需要使用，那么就可以在main.js中进行全局引入--只需要引入一次
import 'normalize.css'
// import '@/styles/reset.less'

Vue.config.productionTip = false

// 创建Vue实例，实现渲染--渲染页面 -- 已经完成了渲染的组件
new Vue({
  // 实现组件的渲染
  render: h => h(App)
}).$mount('#app') // 将渲染的结果挂载到页面中的app标签
