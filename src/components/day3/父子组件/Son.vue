<template>
  <div class='son'>
    <h1>我是子组件-son</h1>
    <h4>我这个月的生活费拿到了，为{{myMoney}}</h4>
    <h4>信用卡爆了，欠款{{needMoney}}</h4>
    <button @click='sendAcount'>单击我将账单传递给父组件</button>
    <button @click='sendAcountTo'>单击我将账单传递给兄弟(姐姐)组件</button>
  </div>
</template>
<script>
// 引入事件总线
import bus from '@/utils/eventBus.js'
export default {
  // 定义props用于接收父组件传递的数据
  // props如果格式为数组，里面的成员就是相当于定义在data中的变量的名称
  // props:['myMoney'],
  props: {
    // 指定myMoney必须是数值类型，如果不是则报错
    // myMoney: Number
    // 指定多类型共存
    // myMoney: [String, Number]

    // 指定
    myMoney: {
      type: Number,
      // 设置为必传项
      // required: true,
      // 设置默认值：如果没有传递数据则使用默认址
      // default: 100
      // value就是本次父组件给子组件传递的数据
      // 如果函数返回true则说明校验成功，false表示校验失败
      validator (value) {
        console.log(value);
        if (value >= 0) {
          return true
        } else {
          return false
        }
      }
    }
  },
  name: '',
  data () {
    return {
      // 父组件无法直接为子组件data中的成员赋值
      // mymoney: 0
      needMoney: 12345
    }
  },
  methods: {
    sendAcount () {
      // 使用this.$emit发出一个针对于父组件的事件
      // this.$emit('自定义的事件类型',你本次所需要传递的数据)
      // this：当前组件实例 》》 是一个可复用的Vue实例
      this.$emit('payMoney', this.needMoney)
    },
    sendAcountTo () {
      bus.$emit('helpme', this.needMoney)
    }
  }
}
</script>
<style lang='less' scoped>
.son {
  margin: 20px;
  background-color: rgb(147, 124, 238);
}
</style>