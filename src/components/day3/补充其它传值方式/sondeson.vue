<template>
  <div>
    <h2>我是子组件son的子组件subson</h2>
    <h3>我拿到钱了:{{money}}</h3>
  </div>
</template>
<script>
export default {
  inject: ['money'],
  name: '',
  data () {
    return {
    }
  },
}
</script>
<style lang='less' scoped>
</style>