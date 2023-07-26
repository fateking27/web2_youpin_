<template>
  <div>
    <myslot>
      <!-- 可以在组件中间写任意的结构 -->
      <!-- - 在组件中添加的内容会填充到每一个匿名插槽的位置 -->
      <!-- <p>我是p元素</p>
      <p>我是p元素</p>
      <p>我是p元素</p>-->
      <p>我是p元素</p> 
    </myslot>
  </div>
</template>
<script>
import myslot from './01-匿名插槽'
export default {
  name: '',
  data () {
    return {
    }
  },
  components: {
    myslot
  }
}
</script>
<style lang='less' scoped>
</style>