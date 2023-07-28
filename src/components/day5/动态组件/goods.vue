<template>
  <div>商品列表
    <button @click='count++'>单击+1</button>
    <p>{{count}}</p>
  </div>
</template>
<script>
export default {
  name: '',
  data () {
    return {
      count: 1
    }
  },
  // mounted () {
  //   console.log('我重新加载了，要进行一些初始化的操作');
  // },

  activated () {
    console.log('activated--我重新加载了，要进行一些初始化的操作');
  },
  deactivated () {
    console.log('deactivated--我要走了，要进行一些重置操作');
  },
}
</script>
<style lang='less' scoped>
</style>