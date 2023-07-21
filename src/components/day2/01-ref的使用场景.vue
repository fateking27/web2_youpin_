<template>
  <div class='box'>
    <button @click='show'>显示输入框</button>
    <input v-if='isshow'
           ref='username' />
  </div>
</template>
<script>
export default {
  name: '',
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
  }
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