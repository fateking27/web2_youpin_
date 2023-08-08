<template>
  <div class="my-header"
       :style='{"background-color":bgcolor}'>
    <!-- 添加匿名插槽:没有设置name属性的插槽就是匿名插槽 -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    bgcolor: {
      type: String,
      default: '#ccc'
    }
  }
}
</script>

<style lang="less" scoped>
.my-header {
  height: 45px;
  line-height: 45px;
  text-align: center;
  background-color: #1d7bff;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
}
</style>