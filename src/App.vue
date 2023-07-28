<template>
  <div id="app">
    <router-link to='/index'>首页</router-link> &nbsp;&nbsp;
    <router-link to='/school/1'>成都校区</router-link>&nbsp;&nbsp;
    <router-link to='/school/2'>天府校区</router-link>&nbsp;&nbsp;
    <router-link to='/school/3'>广州校区</router-link>&nbsp;&nbsp;
    <router-link to='/school/4'>深圳校区</router-link>&nbsp;&nbsp;
    <router-link to='/school?id=10'>北京校区</router-link>&nbsp;&nbsp;
    <!-- <router-link to='/school'>北京校区</router-link>&nbsp;&nbsp; -->
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
