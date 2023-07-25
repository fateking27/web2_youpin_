<template>
  <div class='father'>
    <h1>我是父组件-father</h1>
    <h3>我赚到钱了，数额为
      <input v-model.number='lifeMoney'
             type='number' />
    </h3>
    <h4>他打电话来了，告诉我待还的欠款为{{sonNeedMoney}}</h4>
    <!-- 4.父传子:使用子组件son:组件的使用类似于标签的使用 -->
    <!-- 子传父:监听子组件所发出的事件  -->
    <son :myMoney='lifeMoney'
         @payMoney='deal'></son>
    <!-- 使用子组件sister -->
    <sister></sister>
  </div>
</template>
<script>
// 2.引入子组件
import son from './Son.vue'
import sister from './Sister.vue'
export default {
  name: '',
  data () {
    return {
      lifeMoney: 0,
      sonNeedMoney: '?'
    }
  },
  // 3.注册组件
  components: {
    son, sister
  },
  methods: {
    // 监听子组件所添加的处理函数的参数，就是子组件发出事件时所传递的数据
    deal (data) {
      console.log(data);
      this.sonNeedMoney = data
    }
  }
}
</script>
<style lang='less' scoped>
.father {
  padding: 20px;
  background-color: #ccc;
}
</style>