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
}
</script>
<style lang='less' scoped>
</style>