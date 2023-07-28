// 当前项目的路由模块

// 模块化
import Vue from 'vue'
import VueRouter from 'vue-router'
// 当前使用vue-router进行路由管理
Vue.use(VueRouter)

// import Login from '@/components/day6/路由讲解/login.vue'
// import Index from '@/components/day6/路由讲解/index.vue'

// console.log(Login, Index)

// 创建路由对象
const router = new VueRouter({
  // 添加具体的路由配置：就是配置路径和组件之间的映射关系
  // 一个项目中有多组映射关系，所以使用数组存储这些映射关系
  // routes：只能使用这个名字
  routes: [
    // 单个路由的配置
    // path: 指路由的路径，自己定义好
    // component: 路径所映射的组件实例--对象，先引入相应的组件
    {
      path: '/',
      // 添加重定向
      redirect: '/login'
    },
    {
      path: '/login',
      // component: Login
      // import：内置的一个引入其它模块的函数
      component: () => import('@/components/day6/路由讲解/login.vue')
    },
    {
      path: '/index',
      component: () => import('@/components/day6/路由讲解/index.vue')
    }
  ]
})

export default router
