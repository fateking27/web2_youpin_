<template>
  <div class='wnmenu'>
    <el-menu :default-active="$route.path"
             class="el-menu-vertical-demo"
             background-color="#545c64"
             text-color="#fff"
             active-text-color="#ffd04b"
             :unique-opened='true'
             :router='true'
             @open="handleOpen"
             ref='mymenu'>

      <el-menu-item index="/index"
                    @click='deal'>
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>

      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>用户</span>
        </template>
        <el-menu-item index="/admin/manager">
          <i style="display:inline-block;width:20px"></i>
          <span>用户管理</span>
        </el-menu-item>
        <el-menu-item index="/admin/group">
          <i style="display:inline-block;width:20px"></i>
          <span>用户分组</span>
        </el-menu-item>
        <el-menu-item index="/admin/usertag">
          <i style="display:inline-block;width:20px"></i>
          <span>用户标签</span>
        </el-menu-item>
        <el-menu-item index="/admin/userlevel">
          <i style="display:inline-block;width:20px"></i>
          <span>用户等级</span>
        </el-menu-item>
      </el-submenu>

      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>设置</span>
        </template>
        <el-submenu index="setting">
          <template slot="title">
            <i style="display:inline-block;width:20px"></i>
            <span>管理权限</span>
          </template>
          <el-menu-item index="/admin/setting/system_role/index">
            <i style="display:inline-block;width:20px"></i>
            <span>角色管理</span>
          </el-menu-item>
          <el-menu-item index="/admin/setting/system_admin/index">
            <i style="display:inline-block;width:20px"></i>
            <span>管理员列表</span>
          </el-menu-item>
          <el-menu-item index="/admin/setting/system_menus/index">
            <i style="display:inline-block;width:20px"></i>
            <span>权限规则</span>
          </el-menu-item>
        </el-submenu>

      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: '',
  data () {
    return {
      currentIndex: ''
    }
  },
  watch: {
    $route: {
      handler (newv) {
        // console.log('newv----', newv);
        let arr = newv.matched.map(v => {
          return {
            title: v.meta.title,
            path: v.path
          }
        })
        // console.log(arr);

        this.$store.commit('updateBreadPath', arr)
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    handleOpen (index) {
      this.currentIndex = index
    },
    deal () {
      this.$refs.mymenu.close(this.currentIndex)
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