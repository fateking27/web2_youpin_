<template>
  <div>
    <h3 id="myh3">MyLifeCycle -- {{count}}</h3>
    <button @click="count++">+1</button>
  </div>
</template>

<script>
export default {
  name: 'MyLifeCycle',
  data () {
    return {
      count: 0,
      list: []
    }
  },
  methods: {
    show () {
      console.log('show')
    },
  },
  // 这是创建阶段的第 1 个生命周期函数
  beforeCreate () {
    // 此时，data 中的数据，还没有被初始化
    // console.log(this.count)
    // 此时，props 中的属性，还不可用了
    // console.log(this.title)
    // 此时，methods 中的方法，不可用，还没有被初始化
    // this.show()
  },
  // 这是创建阶段的第 2 个生命周期函数
  created () {
    // 此时，data 中的数据，已经可以被访问了
    // console.log(this.count)
    // 此时，methods 中的方法，已经可以被访问了
    // this.show()
    // 在项目中，会在这个钩子函数中发起ajax请求
    // this.list = await axios('')
  },
  // 这是创建阶段的第 3 个生命周期函数
  beforeMount () {
    // 此时，组件的 DOM 还没有被渲染出来，无法在这个函数中，操作组件的任何 DOM 对象
    // const dom = document.getElementById('myh3')
    // console.log(dom)
  },
  // 这是创建阶段的第 4 个生命周期函数(也是创建的最后一个生命周期函数)
  mounted () {
    // 此时，组件中的 DOM 元素，第一次被真正的渲染到了浏览器中。
    // 此时才可以真正的操作组件的 DOM 元素
    // const dom = document.getElementById('myh3')
    // console.log(dom)
    // console.log('组件第一次被渲染完成了')
  },
  // 这是运行阶段的第 1 个生命周期函数
  beforeUpdate () {
    // console.log('beforeUpdate')
    // // 此时，data 中的数据，是最新的
    // console.log(this.count)
    // // // 此时，页面上的 DOM 结构所呈现的数据，还是之前的旧数据
    // const dom = document.getElementById('myh3')
    // console.log(dom.innerHTML)
  },
  updated () {
    // 此时，data 中的数据，是最新的
    console.log(this.count)
    // 此时，页面上的 DOM 结构所呈现的数据，还是最新的数据（证明：组件已经根据最新的数据，重新把 DOM 结构渲染完毕了）
    const dom = document.getElementById('myh3')
    console.log(dom.innerHTML)
  },
}
</script>

<style>
</style>