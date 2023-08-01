<template>
  <div class='home'>
    <el-container>
      <el-aside width="200px">
        <img src='@/assets/login_info.png'>
        <wnmenu></wnmenu>
      </el-aside>
      <el-container>
        <el-header>
          <wnheader></wnheader>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import wnmenu from '@/components/wnmenu/index.vue'
import wnheader from '@/components/wnheader/index.vue'
export default {
  name: '',
  data () {
    return {
    }
  },
  components: {
    wnmenu, wnheader
  },
}
</script>
<style lang='less' scoped>
.home {
  height: 100%;
  > .el-container {
    height: 100%;
    > .el-aside {
      background-color: rgb(84, 92, 100);
      transition: all 0.5s;
      > img {
        width: 100%;
        height: 55px;
        display: block;
      }
    }
    .el-header {
      padding: 0;
    }
  }
}
</style>