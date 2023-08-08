<template>
  <div>
    <input v-model='first'>
    <p>first:{{first}}</p>
    <p>result:{{result}}</p>
    <button @click=''>能不能调用到侦听函数</button>
  </div>
</template>
<script>
export default {
  name: '',
  data () {
    return {
      first: 'a',
      result: ''
    }
  },
  // 添加侦听器
  watch: {
    // 侦听器中的处理函数的名称一定要和需要侦听的属性同名
    // 只要first值发生了变化，就会自动触发 >> 只有first的值发生了变化，才会触发侦听器

    // 1.不用手动调用
    // 2.侦听处理函数中一般没有返回值
    // 3.侦听处理函数的结果，一般需要赋值给data中的变量，再使用
    first (newvalue, oldvalue) {
      console.log(newvalue, '---', oldvalue);
      console.log(newvalue, '---', oldvalue);
      this.result = newvalue.toUpperCase()
    }
  },
  methods: {
  }
}
</script>
<style lang='less' scoped>
</style>