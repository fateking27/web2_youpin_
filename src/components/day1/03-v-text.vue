<template>
  <div>
    <p>------{{myname}}~~~~~~~~</p>
    <!-- 使用v-text指令：
    1.就是原生方式的innerText
    2.它会覆盖标签之间的原始内容
    3.不能解析html结构 -->
    <p v-text='myname'>这是原先的内容</p>
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