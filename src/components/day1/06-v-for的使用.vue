<template>
  <div>
    <h1>你想循环生成谁，就是谁里面添加v-for</h1>
    <h1>使用v-for遍历数组，生成动态结构</h1>
    <!-- <p v-for='(value,index) in arr'>{{value+":"+index}}</p> -->
    <!-- <p v-for='value in arr'>{{value+":"}}</p> -->

    <h1>使用v-for遍历对象，生成动态结构</h1>
    <!-- <ul>
      <li v-for='(value,key,index) in obj'>{{value+"-"+key+"-"+index}}</li>
    </ul> -->

    <table border='1'
           width='400'>
      <tr>
        <th>编号</th>
        <th>姓名</th>
        <th>年龄</th>
        <th>性别</th>
      </tr>
      <tr v-for='({name,age,gender},index) in list'>
        <td>{{index+1}}</td>
        <td>{{name}}</td>
        <td>{{age}}</td>
        <td>{{gender}}</td>
      </tr>
    </table>

    <!-- <p v-for='n in 10'>{{n}}</p> -->
  </div>
</template>
<script>
export default {
  name: '',
  data () {
    return {
      arr: [1, 32, 454, 67, 68],
      obj: {
        name: 'jack', age: 20, gender: '男'
      },
      list: [
        { id: 1, name: 'jack1', age: 20, gender: '男' },
        { id: 2, name: 'rose2', age: 21, gender: '女' },
        { id: 3, name: 'tom3', age: 22, gender: '男' },
      ]
    }
  },
}
</script>
<style lang='less' scoped>
</style>