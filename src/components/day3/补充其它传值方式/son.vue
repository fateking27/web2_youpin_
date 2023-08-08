<template>
  <div>
    <h2>我是子组件son</h2>
    <h3>我拿到钱了:{{money}}</h3>
    <subde></subde>
  </div>
</template>
<script>
import subde from './sondeson.vue'
export default {
  inject: ['money'],
  name: '',
  data () {
    return {
    }
  },
  components: {
    subde
  }
}
</script>
<style lang='less' scoped>
</style>