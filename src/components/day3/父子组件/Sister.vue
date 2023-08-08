<template>
  <div class='sister'>
    <h1>我是子组件-sister</h1>
    <h3>我帮弟弟还钱了，{{helpMoney}}</h3>
  </div>
</template>
<script>
// 引入事件总线
import bus from '@/utils/eventBus.js'
export default {
  name: '',
  data () {
    return {
      helpMoney: '?'
    }
  },
  created () {
    let _this = this
    // bus.$on('事件类型'，处理函数)
    bus.$on('helpme', (data) => {
      console.log(this);
      this.helpMoney = data
    })
  }
}
</script>
<style lang='less' scoped>
.sister {
  margin: 20px;
  background-color: rgb(226, 148, 148);
}
</style>