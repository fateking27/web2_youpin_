// 引入Vue，才能创建Vue实例
import Vue from 'vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

// 当前引入的，需要进行渲染的组件
// import App from './App.vue'
// 将路径修改为你当前想要渲染的组件的路径
// @ 代表src
// import App from './components/day3/01-生命周期及钩子函数.vue'
// import App from './components/day3/父子组件/Father.vue'
// import App from './components/day3/封装按钮/login.vue'
// import App from './components/day4/axios的封装/login.vue'
// import App from './components/day4/element-ui的使用/02-login.vue'
// import App from './components/day3/todo/todo_manager.vue'
// import App from './components/day4/购物车/cart.vue'
// import App from './components/day5/动态组件/parent.vue'
// import App from './components/day5/插槽/02-使用匿名插槽.vue'
import App from './components/day5/插槽/04-home页使用具名插槽.vue'

// 如果这个包整个项目都需要使用，那么就可以在main.js中进行全局引入--只需要引入一次
import 'normalize.css'
// import '@/styles/reset.less'
import './styles/bootstrap.css'

Vue.config.productionTip = false

// 创建Vue实例，实现渲染--渲染页面 -- 已经完成了渲染的组件
new Vue({
  // 实现组件的渲染
  render: h => h(App)
}).$mount('#app') // 将渲染的结果挂载到html页面中的app标签
