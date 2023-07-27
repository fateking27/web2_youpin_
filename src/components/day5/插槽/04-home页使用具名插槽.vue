<template>
  <div>
    <wn_nav>
      <!-- <template v-slot:left>
        <span class='el-icon-arrow-left'>返回</span>
      </template> -->
      <template v-slot:center>
        <p>标题</p>
      </template>
      <!-- <template #right>
      <span class='el-icon-delete'></span>
      </template> -->
    </wn_nav>
  </div>
</template>
<script>
import wn_nav from './03-具名插槽'
export default {
  name: '',
  data () {
    return {
    }
  },
  components: {
    wn_nav
  }
}
</script>
<style lang='less' scoped>
</style>