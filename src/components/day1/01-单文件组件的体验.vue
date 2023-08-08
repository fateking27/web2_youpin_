<template>
  <div class='mydiv'>
    <!-- 只有一个根元素 -->
    <h1>标题</h1>
    <h3>副标题</h3>
  </div>
</template>



<script>
// 暴露当前组件默认实例
export default {
  // 定义行为--功能
  // data必须是一个函数，且返回一个对象
  data () {
    return {
      obj: {
        name: 'jack',
        age: 20
      }
    }
  }
}
</script>

<style lang="less" scoped>
// lang:预处理器，如果没有设置，则默认只能写Css
// scoped:产生一个局部作用域样式
.mydiv {
  border: 1px solid red;
  h1 {
    color: blue;
  }
}
</style>
