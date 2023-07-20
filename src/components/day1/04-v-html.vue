<template>
  <div>
    <p>------{{myname}}~~~~~~~~</p>
    <!-- 使用v-html指令：
    1.就是原生方式的innerHTML
    2.它会覆盖标签之间的原始内容
    3.能解析html结构 -->
    <p v-html='myname+"<hr>"'>这是原先的内容</p>
  </div>
</template>
<script>
export default {
  name: '',
  data () {
    return {
      myname: 'jack<hr>'
    }
  },
}
</script>
<style lang='less' scoped>
</style>