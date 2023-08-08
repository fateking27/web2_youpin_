<template>
  <div>
    <h1>测试页面</h1>
    <a href='#/index'>首页</a> &nbsp;&nbsp;
    <a href='#/goods'>商品列表页</a>&nbsp;&nbsp;
    <a href='#/about'>关于我们</a>&nbsp;&nbsp;

    <!-- 展示组件的区域0 -->
    <component :is='comName'></component>
  </div>
</template>
<script>
import index from './index.vue'
import goods from './goods.vue'
import about from './about.vue'
export default {
  name: '',
  data () {
    return {
      comName: 'index'
    }
  },
  mounted () {
    let _this = this
    window.addEventListener('hashchange', function () {
      let hash = location.hash
      if (hash == '#/index') {
        _this.comName = 'index'
      }
      else if (hash == '#/goods') {
        _this.comName = 'goods'
      }
      else if (hash == '#/about') {
        _this.comName = 'about'
      }

    })
  },
  components: {
    index, goods, about
  }
}
</script>
<style lang='less' scoped>
</style>