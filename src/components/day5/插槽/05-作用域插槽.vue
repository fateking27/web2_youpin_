<template>
  <div>
    <p>我是子组件：</p>
    <slot name='abc'
          :data='arr' youname='myname'></slot>
  </div>
</template>
<script>
export default {
  name: '',
  data () {
    return {
      arr: [1, 4, 7],
      myname: 'jack'
    }
  },
}
</script>
<style lang='less' scoped>
</style>