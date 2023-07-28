<template>
  <div>
    <h1>我是父组件</h1>
    <son></son>
  </div>
</template>
<script>
import son from './son.vue'
export default {
  name: '',
  // 对象形式：直接以对象的方式定义,简单但是呢,它无法访问当前的this
  // provide: {
  //   money: this.$vm.mymoney
  // },
  // 使用函数定义,就可以直接访问当前this可以传递动态数据
  provide () {
    return {
      money: this.mymoney
    }
  },
  data () {
    return {
      mymoney: 10000
    }
  },
  components: {
    son
  }
}
</script>
<style lang='less' scoped>
</style>