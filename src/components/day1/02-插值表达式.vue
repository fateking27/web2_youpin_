<template>
  <div class='mydiv'>
    <!-- 只有一个根元素 -->
    <!-- 在标签之间插入一个值--类似于设置标签之间的内容--插值表达式 -->
    <h1>{{'我的姓名是：'+obj.name.toUpperCase()}}</h1>
    <h1>{{obj.age}}</h1>
    <h1>{{obj.gender==1?'男':'女'}}</h1>

    <!-- <h2>{{if(obj.gender==1){'男'}}}</h2> -->
    <!-- <h2>{{obj.age++}}</h2> -->

    <h2 v-text=''>{{obj.age}}</h2>
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
        age: 20,
        gender: 1
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
