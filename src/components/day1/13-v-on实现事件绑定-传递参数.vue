<template>
  <div>
    <!-- <元素 v-on:事件类型='处理函数'></元素> -->
    <button v-on:click='deal'>没有传递参数也会传递默认的事件对象</button>
    <!-- 如果手动传递了参数，那么就不会再默认传递事件对象了
    如果还需要传事件对象，则需要手动传递  $event -->
    <button @click='deal2(1,$event)'>手动传递参数</button>
  </div>
</template>
<script>
export default {
  // vue2是选项式api,不同类型的成员要定义在不同的选项结构中，但是不管在那个选项中定义，都是当前组件实例的成员，通过this进行调用
  data () {
    return {
    }
  },
  // 事件的处理函数需要在methods中定义
  methods: {
    // e就是默认传递过来的事件对象
    deal (e) {
      console.log(e);
    },
    deal2 (v, e) {
      console.log(v, e);

    }
  },
}
</script>
<style lang='less' scoped>
</style>