<template>
  <div class='wnmenu'>
    <el-menu :default-active="$route.path"
             class="el-menu-vertical-demo"
             background-color="#545c64"
             text-color="#fff"
             active-text-color="#ffd04b"
             :unique-opened='true'
             :router='true'>

      <el-menu-item index="/index">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>

      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>用户</span>
        </template>
        <el-menu-item index="/index/manager">
          <i style="display:inline-block;width:20px"></i>
          <span>用户管理</span>
        </el-menu-item>
        <el-menu-item index="/index/group">
          <i style="display:inline-block;width:20px"></i>
          <span>用户分组</span>
        </el-menu-item>
        <el-menu-item index="/index/usertag">
          <i style="display:inline-block;width:20px"></i>
          <span>用户标签</span>
        </el-menu-item>
        <el-menu-item index="/index/userlevel">
          <i style="display:inline-block;width:20px"></i>
          <span>用户等级</span>
        </el-menu-item>
      </el-submenu>

      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>订单</span>
        </template>
        <el-menu-item index="3-1">
          <i style="display:inline-block;width:20px"></i>
          <span>订单管理</span>
        </el-menu-item>
        <el-menu-item index="3-2">
          <i style="display:inline-block;width:20px"></i>
          <span>收银订单</span>
        </el-menu-item>
        <el-menu-item index="3-3">
          <i style="display:inline-block;width:20px"></i>
          <span>售后订单</span>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: '',
  data () {
    return {
    }
  },
  watch:{
    $route(newv){
      console.log(newv);
    }
  }
}
</script>
<style lang='less' scoped>
.wnmenu {
  height: 100vh - 55;
  .el-menu {
    border-right: none;
  }
}
</style>