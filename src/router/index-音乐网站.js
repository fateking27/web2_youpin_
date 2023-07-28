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
      redirect: '/find'
    },
    // 发现音乐
    {
      path: '/find',
      component: () => import('@/components/day6/音乐网站/Find.vue'),
      // 添加嵌套路由配置
      children: [
        {
          path: 'recommend',
          components: {
            b: () => import('@/components/day6/音乐网站/Recommend.vue')
          }
        },
        {
          path: 'ranking',
          components: {
            a: () => import('@/components/day6/音乐网站/Ranking.vue')
          }
        },
        {
          path: 'songList',
          components: {
            b: () => import('@/components/day6/音乐网站/SongList.vue')
          }
        }
      ]
    },
    // 我的音乐
    {
      path: '/my',
      component: () => import('@/components/day6/音乐网站/My.vue')
    }
  ]
})

export default router
