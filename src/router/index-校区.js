// 模块化
import Vue from 'vue'
import VueRouter from 'vue-router'
// 当前使用vue-router进行路由管理
Vue.use(VueRouter)

// 创建路由对象
const router = new VueRouter({
  linkActiveClass: 'abc',
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
      props: true,
      // redirect: 'detail',
      // 添加 school的嵌套路由
      children: [
        // {
        //   path: '',
        //   redirect: 'detail'
        // },
        // 嵌套路由的配置和普通路由配置基本一样
        {
          // 路径建议不用添加/, /代表根路由
          path: 'detail',
          // 为路由命名--命名路由
          name: 'detail',
          component: () => import('@/components/day6/路由进阶/detail.vue')
        },
        {
          path: 'talk',
          name: 'talk',
          component: () => import('@/components/day6/路由进阶/talk.vue')
        },
        {
          path: 'jobinfo',
          name: 'jobinfo',
          component: () => import('@/components/day6/路由进阶/jobinfo.vue')
        }
      ]
    }
  ]
})

export default router
