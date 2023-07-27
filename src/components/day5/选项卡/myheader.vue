<template>
  <div class="myheader"
       :style='{backgroundColor:bgcolor}'>
    <div class="left">
      <slot name='left'></slot>
    </div>
    <div class="center">
      <slot></slot>
    </div>
    <div class="right">
      <slot name='right'></slot>
    </div>
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
.myheader {
  height: 50px;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  align-items: center;
  .el-icon-arrow-left,
  .el-icon-search {
    font-size: 20px;
  }
}
</style>