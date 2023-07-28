// 模块化
import Vue from 'vue'
import VueRouter from 'vue-router'
// 当前使用vue-router进行路由管理
Vue.use(VueRouter)

// 创建路由对象
const router = new VueRouter({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/components/day6/综合案例/login.vue')
    },
    {
      path: '/index',
      name: 'index',
      component: () => import('@/components/day6/综合案例/index.vue'),
      children: [
        {
          path: 'goods',
          name: 'goods',
          component: () => import('@/components/day6/综合案例/goods.vue')
        },
        {
          path: 'order',
          name: 'order',
          component: () => import('@/components/day6/综合案例/order.vue')
        },
        {
          path: 'role',
          name: 'role',
          component: () => import('@/components/day6/综合案例/role.vue')
        },
        {
          path: 'setting',
          name: 'setting',
          component: () => import('@/components/day6/综合案例/setting.vue')
        },
        {
          path: 'user',
          name: 'user',
          component: () => import('@/components/day6/综合案例/user.vue')
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.path == '/login') {
    next()
  } else {
    let token = localStorage.getItem('test_token')
    if (token) {
      next()
    } else {
      next({ path: '/login' })
    }
  }
})

export default router
