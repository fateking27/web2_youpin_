<template>
  <div>
    <h3>局部自定义指令是指在组件内部定义的指令，只有当前组件内部可以使用</h3>
    <!-- 像使用内置指令一样使用自定义指令 -->
    <p v-color='"green"'>ppp1111</p>
    <input v-focus
           v-color='"red"'></input>
  </div>
</template>
<script>
// 按需导出的成员  需要  解构 引入
import { color, focus } from '../../utils/comminDirectives.js'
export default {
  name: '',
  data () {
    return {
      // blue:"blue"
    }
  },
  // 通过directives选项进行指令的注册
  directives: {
    color, focus
  }
}
</script>
<style lang='less' scoped>
</style>