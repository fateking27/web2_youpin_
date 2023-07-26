<template>
  <div class='btn'
       :class='{
         primary:type=="primary",
         success:type=="success",
         info:type=="info",
         danger:type=="danger"}'
       @click='sublogin'>
    <!-- 添加一个匿名插槽 -->
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    // title: {
    //   type: String,
    //   default: '按钮'
    // },
    type: {
      type: String
    }
  },
  name: '',
  data () {
    return {
    }
  },
  methods: {
    sublogin (e) {
      console.log('我是子组件，我触发了');
      // 子组件需要告诉父组件，按钮被单击了
      this.$emit('click', e)

    }
  }
}
</script>
<style lang='less' scoped>
.btn {
  width: 90%;
  height: 40px;
  border-radius: 10px;
  background-color: #ccc;
  line-height: 28px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  margin: 0 auto;
}
.primary {
  background-color: rgb(62, 114, 235);
  color: #fff;
}
.success {
  background-color: rgb(65, 194, 95);
  color: #fff;
}
.info {
  background-color: rgb(133, 133, 133);
  color: #fff;
}
.danger {
  background-color: rgb(226, 73, 73);
  color: #fff;
}
</style>