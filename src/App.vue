<template>
  <div id="app">
    <!-- <a href='#/index'>首页</a> &nbsp;&nbsp;
    <a href='#/login'>登陆</a> &nbsp;&nbsp; -->
    <router-link to='/index'>首页</router-link> &nbsp;&nbsp;
    <router-link to='/login'>登陆</router-link> &nbsp;&nbsp;
    <!-- 设置路由映射的组件的展示出口 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
.router-link-active {
  color: red;
  background-color: yellow;
}
</style>
