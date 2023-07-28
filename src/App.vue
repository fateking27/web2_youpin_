<template>
  <div id="app">
    <router-link to='/find'>发现音乐</router-link> &nbsp;&nbsp;
    <router-link to='/my'>我的音乐</router-link> &nbsp;&nbsp;
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
</style>
