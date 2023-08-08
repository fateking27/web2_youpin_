// 模块化
import Vue from 'vue'
import VueRouter from 'vue-router'

import store from '@/store/index.js'

Vue.use(VueRouter)

// 路由模块的创建和路由配置
const router = new VueRouter({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/index.vue'),
      meta: {
        needAuth: false,
        title: '用户登陆'
      }
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('@/views/home/index.vue'),
      meta: {
        needAuth: true,
        title: '后台首页',
        meta: {
          needAuth: true,
          title: '后台首页',
          uniqueAuth: 'admin-index-index'
        }
      },
      redirect: '/admin/home',
      // 添加嵌套路由
      children: [
        {
          path: 'home',
          name: 'dashboard',
          component: () => import('@/views/dashboard/index.vue'),
          meta: {
            needAuth: true,
            title: '后台图表页',
            uniqueAuth: 'admin-index-index'
          }
        },
        {
          path: 'user/list',
          name: 'manager',
          component: () => import('@/views/user/userManager.vue'),
          meta: {
            needAuth: true,
            title: '用户管理'
          }
        },
        {
          path: 'user/useradd',
          name: 'useradd',
          component: () => import('@/views/user/userAdd.vue'),
          meta: {
            needAuth: true,
            title: '用户添加'
          }
        },
        {
          path: 'user/useredit/:id',
          name: 'useredit',
          component: () => import('@/views/user/userAdd.vue'),
          meta: {
            needAuth: true,
            title: '用户编辑'
          }
        },
        {
          path: 'user/group',
          name: 'group',
          component: () => import('@/views/user/usergroup.vue'),
          meta: {
            needAuth: true,
            title: '用户分组',
            uniqueAuth: 'user-user-group'
          }
        },
        {
          path: 'user/label',
          name: 'usertag',
          component: () => import('@/views/user/usertag.vue'),
          meta: {
            needAuth: true,
            title: '用户标签'
          }
        },
        {
          path: 'user/level',
          name: 'userlevel',
          component: () => import('@/views/user/userlevel.vue'),
          meta: {
            needAuth: true,
            title: '用户等级'
          }
        },
        {
          path: 'setting',
          name: 'setting',
          redirect: 'setting/system_role/index',
          meta: {
            needAuth: true,
            title: '权限管理'
          }
        },
        {
          path: 'setting/system_role/index',
          name: 'system_role',
          component: () => import('@/views/role/roleList.vue'),
          meta: {
            needAuth: true,
            title: '角色管理',
            uniqueAuth: 'setting-system-role'
          }
        },
        {
          path: 'setting/system_menus/index',
          name: 'system_menus',
          component: () => import('@/views/role/roleRules.vue'),
          meta: {
            needAuth: true,
            title: '权限规则',
            uniqueAuth: 'setting-system-menus'
          }
        },
        {
          path: 'setting/system_admin/index',
          name: 'system_admin',
          component: () => import('@/views/role/managerList.vue'),
          meta: {
            needAuth: true,
            title: '管理员列表',
            uniqueAuth: 'setting-system-list'
          }
        }
      ]
    },
    {
      path: '/404',
      component: () => import('@/views/404.vue')
    }
  ]
})

// 导航守卫
router.beforeEach((to, from, next) => {
  console.log(to)
  next()

  // 如果是不需要校验的路由，直接next
  // if (!to.meta.needAuth) {
  //   next()
  // }
  // // 否则，判断是否有token,如果有则next(),否则重定向到登陆页
  // else {
  //   let uniqueAuth = to.meta.uniqueAuth
  //   // 是否有跳转的权限
  //   if (store.state.userData.unique_auth.indexOf(uniqueAuth) != -1) {
  //     let token = store.state.token
  //     if (token) {
  //       next()
  //     } else {
  //       next('/login?rediretURL=' + to.fullPath)
  //     }
  //   } else {
  //     next('/404')
  //   }
  // }
})

// 添加导航的后置守卫:路由跳转已经完成了再进行触发
router.afterEach((to, from) => {
  // 设置当前页面所对应的标题信息
  document.title = to.meta.title
})

// 导出
export default router
