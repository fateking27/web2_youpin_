<template>
  <div>
    <h1>这个文件说明v-bind的使用</h1>
    <input v-model='id'>
    <!-- 为src属性进行值的动态绑定：说白了，就是它的值是变量--变化的 -->
    <!-- <img v-bind:src='imgsrc'> -->
    <img :src='imgsrc'>
    <a :href='"aaabb.html?id="+id'>跳转到指定id的详情页</a>
  </div>
</template>
<script>
// 返回一个默认实例，这个默认实例就是当前的组件实例
export default {
  name: '',
  data () {
    return {
      imgsrc: 'https://t7.baidu.com/it/u=2529476510,3041785782&fm=193&f=GIF',
      id: 10
    }
  },
}
</script>
<style lang='less' scoped>
img {
  width: 100px;
}
</style>