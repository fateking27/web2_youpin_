<template>
  <div class='find'>
    <router-link to='/find/recommend'>推荐</router-link> &nbsp;&nbsp;&nbsp;
    <router-link to='/find/ranking'>排行榜</router-link> &nbsp;&nbsp;&nbsp;
    <router-link to='/find/songlist'>歌单</router-link> &nbsp;&nbsp;&nbsp;
    <!-- 嵌套路由映射的组件展示出口 -->
    <router-view name='a'
                 style='height:300px;background-color:#ff0;margin-top:20px'></router-view>
    <router-view name='b'
                 style='height:300px;background-color:#f00;margin-top:20px'></router-view>
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
.find {
  width: 80%;
  height: 500px;
  background-color: rgb(236, 180, 180);
}
</style>