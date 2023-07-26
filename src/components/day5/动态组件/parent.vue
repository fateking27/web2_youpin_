<template>
  <div>
    <button @click='comName="home1"'>单击显示home组件</button>
    <button @click='comName="about2"'>单击显示about组件</button>
    <button @click='comName="goods3"'>单击显示goods组件</button>

    <!-- 使用动态组件--相当于一个展示组件的容器 -->
    <!-- is: 一定要指定，它的值为你想展示的组件的注册名称-->
    <keep-alive>
      <component :is='comName'></component>
    </keep-alive>
  </div>
</template>
<script>
import home from './home.vue'
import about from './about.vue'
import goods from './goods.vue'
export default {
  name: '',
  data () {
    return {
      comName: 'home1'
    }
  },
  components: {
    // 名称  组件
    'home1': home, 'about2': about, 'goods3': goods
  }
}
</script>
<style lang='less' scoped>
</style>