<template>
  <div class="mytabs">
    <!-- 头部 -->
    <myheader bgcolor='orange'>
      <template #left>
        <span class='el-icon-arrow-left'></span>
      </template>
      我的购物车
      <template #right>
        <span class='el-icon-search'></span>
      </template>
    </myheader>
    <!-- 添加动态组件 -->
    <component :is="comName"></component>
    <!-- 底部 -->
    <mynavbar :tabs='tablist'
              @changeComponent='changeComponent'></mynavbar>
  </div>
</template>

<script>
import myheader from './myheader.vue'
import mynavbar from './mynavbar.vue'
import mygoods from './mygoods.vue'
import myinfo from './myinfo.vue'
import mysearch from './mysearch.vue'
export default {
  data () {
    return {
      comName: 'mygoods',
      // 标签选项
      tablist: [
        {
          icon: 'el-icon-s-unfold',
          text: '商品列表',
          name: 'mygoods'
        },
        {
          icon: 'el-icon-user',
          text: '我的信息',
          name: 'myinfo'
        },
        {
          icon: 'el-icon-search',
          text: '商品搜索',
          name: 'mysearch'
        }
      ]
    }
  },

  components: {
    myheader, mynavbar, mygoods, myinfo, mysearch
  },
  methods: {
    changeComponent (data) {
      this.comName = data
    }
  }
}
</script>

<style lang="less" scoped>
@import url("//at.alicdn.com/t/font_2336584_vs3rlrdic7.css");
</style>