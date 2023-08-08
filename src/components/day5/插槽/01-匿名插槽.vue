<template>
  <div class="mybutton">
    <!-- 添加匿名插槽：没有为插槽设置名称就称为匿名插槽 -->
    <div class="left">
      <slot>插槽的默认的内容</slot>
    </div>
    <!-- 一个组件内部应该只有一个匿名插槽 -->
    <div class="right">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="less" scoped>
.mybutton {
  display: flex;
  justify-content: space-between;
  .left {
    flex: 1;
    background-color: #f00;
  }
  .right {
    flex: 1;
    background-color: #ff0;
  }
}
</style>
