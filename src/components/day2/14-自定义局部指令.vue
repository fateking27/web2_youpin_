<template>
  <div>
    <h3>局部自定义指令是指在组件内部定义的指令，只有当前组件内部可以使用</h3>
    <!-- 像使用内置指令一样使用自定义指令 -->
    <p v-color='"green"'>ppp</p>
    <input v-focus
           v-color='"red"'></input>
  </div>
</template>
<script>
export default {
  name: '',
  data () {
    return {
      // blue:"blue"
    }
  },
  // 通过directives选项结构定义局部指令
  directives: {
    // 指令名称:{
    //   inserted(){
    //     // 自定义的操作--功能定义
    //   }
    // }
    color: {
      // 第一个参数 el:代表当前使用这个指令的元素--dom元素--可以直接进行dom操作
      // binding:是一个对象，可以获取当前指令的绑定值
      inserted (el, binding) {
        console.log(binding);

        el.style.color = binding.value

      }
    },
    focus: {
      inserted (el) {
        el.focus()
      }
    }
  }
}
</script>
<style lang='less' scoped>
</style>