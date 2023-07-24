<template>
  <div>
    <input v-model='obj.name'>
    <input v-model='obj.age'>
    <Button type="button"
            @click='obj={}'>改</Button>
  </div>
</template>
<script>
export default {
  name: '',
  data () {
    return {
      obj: {
        name: 'jack',
        age: 20
      }
    }
  },
  // 添加侦听器
  watch: {
    // 侦听器中的处理函数的名称一定要和需要侦听的属性同名
    // 只要first值发生了变化，就会自动触发 >> 只有first的值发生了变化，才会触发侦听器

    // 1.不用手动调用
    // 2.侦听处理函数中一般没有返回值
    // 3.侦听处理函数的结果，一般需要赋值给data中的变量，再使用
    // obj (newvalue, oldvalue) {
    //   console.log(newvalue, oldvalue);
    // }
    // 任意的属性值发生了变化都会触发
    // obj: {
    //   // 侦听的处理函数，名称只能叫handler -- 深度侦听：可以侦听到对象的属性的值的变化
    //   handler (newValue, oldValue) {
    //     console.log(newValue, oldValue);
    //   },
    //   // 立刻触发一次侦听函数
    //   immediate: true,
    //   // 开启深度侦听 
    //   deep: true
    // }

    'obj.name' (newvalue, oldvalue) {
      console.log(newvalue, oldvalue);
    }
  },
}
</script>
<style lang='less' scoped>
</style>