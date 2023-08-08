<template>
  <div>
    <h1>这个文件主要说明v-show的使用</h1>
    <h2>它的作用是用于控制元素的显示的隐藏，它是通过为元素设置display样式来实现的</h2>
    <h2>语法： v-show='bool值' 直接赋值bool值，关系运算符 逻辑运算符 </h2>
    <button @click="isshow = !isshow">切换</button>
    <p v-if='isshow'>我到底能不能显示呢</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isshow: true
    }
  }
}
</script>