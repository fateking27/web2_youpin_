<template>
  <div class="side-menu-wrapper">
    <el-aside width="100%">
      <el-menu :default-openeds="defaultOpends"
               :default-active="defaultActive">
        <template v-for="(item, index) in sideDate">
          <template v-if="item.children && item.children.length">
            <SideMenuItem :key="index"
                          :list="item.children"
                          :index="String(index)"
                          :sub-label="item.title" />
          </template>
          <template v-else>
            <el-menu-item :index="String(index)"
                          :key="index"
                          @click="handleClick(item)">
              <i class="el-icon-circle-plus"></i>
              <span slot="title">{{ item.title }}</span>
            </el-menu-item>
          </template>
        </template>
      </el-menu>
    </el-aside>
  </div>
</template>

<script>
import SideMenuItem from './SideMenuItem.vue'

export default {
  name: 'index',
  components: {
    SideMenuItem
  },
  props: {
    sideDate: {
      // 渲染的数据
      type: Array
    },
    defaultOpends: {
      // 默认展开的项
      type: Array
    },
    defaultActive: {
      // 默认激活的菜单项
      type: String,
      default: '0-0'
    }
  },
  methods: {
    handleClick (item) {
      if (item.path === this.$route.path) {
        return
      }
      console.log(item.path);

      // this.$router.push({
      //   path: item.path
      // })
    }
  }
}
</script>

<style lang="less" scoped>
.side-menu-wrapper {
  width: 100%;
  height: 100%;
  /deep/ .el-menu {
    background-color: rgb(29, 27, 44);
    width: 200px;
    height: 100%;
  }

  /deep/ .el-aside {
    width: 200px;
    height: 100vh;
    background-color: rgb(29, 27, 44);
    overflow: hidden;

    & > ul {
      width: 100%;
      height: 100vh;
      background-color: rgb(29, 27, 44);

      .el-submenu__title {
        font-size: 13px;
        color: #fff;
        &:hover {
          background-color: #888;
        }
      }

      .el-menu-item {
        font-size: 13px;
        background-color: rgb(29, 27, 44);
        color: #fff;
      }

      .is-active {
        color: #cb890e;
      }

      .el-submenu__icon-arrow {
        font-size: 16px;
        color: #fff;
      }
    }
  }
}
</style>

