<template>
  <div class='navHeader'>
    <!-- 在定义slot的时候，为slot设置name，则称为具名插槽 -->
    <div class='left'>
      <slot name='left'></slot>
    </div>
    <div class='center'>
      <slot name='center'></slot>
    </div>
    <div class='right'>
      <slot name='right'></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  data () {
    return {
    }
  },
}
</script>
<style lang='less' scoped>
.navHeader {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  text-align: center;
  line-height: 50px;
  background-color: rgb(231, 141, 43);
  .left {
    width: 100px;
    // background-color: #f00;
  }
  .center {
    flex: 1;
    font-size: 18px;
    font-weight: bold;
    line-height: 50px !important;
  }
  .right {
    width: 60px;
    // background-color: #00f;
  }
}
</style>