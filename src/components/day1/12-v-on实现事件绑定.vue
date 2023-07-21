<template>
  <div>
    <!-- <元素 v-on:事件类型='处理函数'></元素> -->
    <button v-on:click='deal'>没有传递参数</button>
  </div>
</template>
<script>
export default {
  name: 'aaa',
  // vue2是选项式api,不同类型的成员要定义在不同的选项结构中，但是不管在那个选项中定义，都是当前组件实例的成员，通过this进行调用
  data () {
    return {
      value: 10,
      myname: 'aa',
    }
  },
  // 事件的处理函数需要在methods中定义
  methods: {
    // deal () {
    //   // methods中的this指向当前组件实例，所以可以自由访问组件的其它成员
    //   console.log(this)
    // },
    gogo () {
      console.log('gogogog');

    }
  },
  computed: {
    abc () {
      return 'abc'
    }
  },
  watch:{},
  filters:{},
  directives:{},
  components:{},
  props:{},
  created () {},
  mounted () {}
}
</script>
<style lang='less' scoped>
</style>