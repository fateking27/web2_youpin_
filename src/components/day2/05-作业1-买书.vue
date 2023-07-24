<template>
  <div class='buy'>
    <h3>请选择</h3>
    <ul>
      <li v-for='item in books'
          :key='item.id'>
        <span>{{item.bookname}}</span>
        <button @click='buyBook(item.id)'>买书</button>
      </li>
    </ul>

    <table>
      <tr>
        <th>序号</th>
        <th>书名</th>
        <th>单价</th>
        <th>数量</th>
        <th>合计</th>
      </tr>
      <tr v-for='(v,i) in books'
          :key='v.id'>
        <td>{{i + 1}}</td>
        <td>{{v.bookname}}</td>
        <td>{{v.price}}</td>
        <td>{{v.num}}</td>
        <td>{{v.price * v.num}}</td>
      </tr>
    </table>
    <p>总价格为: {{getTotalPrice()}}</p>
  </div>
</template>
<script>
export default {
  name: '',
  data () {
    return {
      books: [
        { id: 1, bookname: '水浒传', price: 40, num: 0 },
        { id: 2, bookname: '西游记', price: 20, num: 0 },
        { id: 3, bookname: '三国演义', price: 30, num: 0 },
        { id: 4, bookname: '红楼梦', price: 50, num: 0 },
        { id: 5, bookname: '随便写', price: 70, num: 0 },
      ]
    }
  },
  methods: {
    buyBook (id) {
      // 根据id找数据的索引
      let index = this.books.findIndex(v => v.id == id)
      this.books[index].num++
    },
    getTotalPrice () {
      let total = this.books.reduce((sum, value) => sum + value.price * value.num, 0)
      return total
    }
  },
  computed: {
    // getTotalPrice () {
    //   let total = this.books.reduce((sum, value) => sum + value.price * value.num, 0)
    //   return total
    // }
  }
}
</script>
<style lang='less' scoped>
table {
  width: 500px;
  height: 140px;
  border: 1px solid #ccc;
  border-collapse: collapse;
}
td,
th {
  border: 1px solid #ccc;
}
</style>