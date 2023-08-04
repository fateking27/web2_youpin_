<template>
  <el-submenu :index="index">
    <template slot="title"><i class="el-icon-message"></i>{{ subLabel }}</template>
    <template v-for="(subItem, subIndex) in list">
      <template v-if=" subItem.children && subItem.children.length">
        <!--  组件自身递归调用      -->
        <sideMenuItem :index="`${index}-${subIndex}`"
                      :key="`${index}-${subIndex}`"
                      :list="subItem.children"
                      :sub-label="subItem.title" />
      </template>
      <template v-else>
        <el-menu-item :index="`${index}-${subIndex}`"
                      :key="`${index}-${subIndex}`"
                      @click="handleClick(subItem)">
          <i class="el-icon-s-tools"></i>
          <span slot="title">{{ subItem.title }}</span>
        </el-menu-item>
      </template>
    </template>
  </el-submenu>
</template>

<script>
export default {
  name: 'sideMenuItem',
  props: {
    list: {
      type: Array,
      default: () => []
    },
    index: String,
    subLabel: String
  },
  methods: {
    handleClick (item) {
      if (item.path === this.$route.path) {
        return
      }
      console.log(item.path);

      this.$router.push({
        path: item.path
      })
    }
  }
}
</script>

<style lang="less" scoped>
/deep/ .el-menu-item {
  font-size: 13px;
  color: #fff;
}
</style>

