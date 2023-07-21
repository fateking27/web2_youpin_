// 引入Vue，才能创建Vue实例
import Vue from 'vue'

// import axios from 'axios'

// 当前引入的，需要进行渲染的组件
// import App from './App.vue'
// 将路径修改为你当前想要渲染的组件的路径
// @ 代表src
// import App from '@/components/day1/01-单文件组件的体验.vue'
// import App from '@/components/day1/02-插值表达式.vue'
// import App from '@/components/day1/03-v-text.vue'
// import App from '@/components/day1/04-v-html.vue'
// import App from '@/components/day1/05-案例-电影详情.vue'
// import App from '@/components/day1/06-v-for的使用.vue'
// import App from './components/day1/07-v-for时key的作用.vue'
// import App from './components/day1/08-v-bind的使用.vue'
// import App from './components/day1/09-v-bind绑定元素的样式.vue'
// import App from './components/day1/10-选项卡.vue'
// import App from './components/day1/11-品牌管理.vue'
// import App from './components/day1/12-v-on实现事件绑定.vue'
// import App from './components/day1/13-v-on实现事件绑定-传递参数.vue'
// import App from './components/day1/14-v-show.vue'
// import App from './components/day1/15-v-if.vue'
// import App from './components/day1/16-登陆.vue'
// import App from './components/day1/17-v-on的事件修饰符.vue'
// import App from './components/day1/18-v-else和v-else-if.vue'
// import App from './components/day2/01-ref的使用场景.vue'
// import App from './components/day2/02-自定义局部过滤器.vue'
// import App from './components/day2/03-自定义全局过滤器.vue'
import App from './components/day2/04-计算属性的初步使用.vue'

// 如果这个包整个项目都需要使用，那么就可以在main.js中进行全局引入--只需要引入一次
import 'normalize.css'
// import '@/styles/reset.less'

Vue.config.productionTip = false

// 创建Vue实例，实现渲染--渲染页面 -- 已经完成了渲染的组件
new Vue({
  // 实现组件的渲染
  render: h => h(App)
}).$mount('#app') // 将渲染的结果挂载到html页面中的app标签
