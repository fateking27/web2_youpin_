// 模块化
import Vue from 'vue'
import VueRouter from 'vue-router'
// 当前使用vue-router进行路由管理
Vue.use(VueRouter)

// 创建路由对象
const router = new VueRouter({
  routes: [
    {
      path: '/',
      // 添加重定向
      redirect: '/index'
    },
    {
      path: '/index',
      // component: Login
      // import：内置的一个引入其它模块的函数
      component: () => import('@/components/day6/路由进阶/index.vue')
    },
    {
      // 设置路由参数   /路径/:参数名称
      path: '/school/:id?',
      component: () => import('@/components/day6/路由进阶/school.vue'),
      // 添加 school的嵌套路由
      children:[
        // 嵌套路由的配置和普通路由配置基本一样
        {
          path:'detail',
          component:() => import('@/components/day6/路由进阶/detail.vue')
        }, {
          path:'talk',
          component:() => import('@/components/day6/路由进阶/talk.vue')
        },
        {
          path:'jobinfo',
          component:() => import('@/components/day6/路由进阶/jobinfo.vue')
        }
      ]
    }
  ]
})

export default router
