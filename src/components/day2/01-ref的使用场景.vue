<template>
  <div class='box'>
    <button @click='show'>显示输入框</button>
    <input v-if='isshow'
           ref='username' />
    <!-- 使用组件：将组件当成标签使用 -->
    <mycom></mycom>
  </div>
</template>
<script>
import mycom from './03-自定义全局过滤器.vue'
export default {
  name: '',
  // 通过components选项进行组件的注册
  components: {
    mycom
  },
  data () {
    return {
      isshow: false
    }
  },
  methods: {
    show () {
      this.isshow = true
      // 获取输入框，让其聚焦
      // $nextTick在视图更新完毕之后自动触发
      this.$nextTick(() => {
        // let input = document.querySelector('input')
        // input.focus()
        // this.$refs:获取当前组件中所有拥有ref属性的元素，返回一个对象 
        console.log(this.$refs.username);
        this.$refs.username.focus()
      })
    }
  },
}
</script>
<style lang='less' scoped>
.box {
  padding: 50px;
  button {
    margin-right: 20px;
  }
}
</style>