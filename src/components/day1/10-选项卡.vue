<template>
  <div class="container">
    <ul class="list">
      <li :class="{active:tabIndex == 0}"
          @click='deal(0)'>首页</li>
      <li :class="{active:tabIndex == 1}"
          @click='deal(1)'>所有商品</li>
      <li :class="{active:tabIndex == 2}"
          @click='deal(2)'>装饰摆件</li>
      <li :class="{active:tabIndex == 3}"
          @click='deal(3)'>布艺软装</li>
      <!-- <li v-for='(v,i) in tabs'
          :class="{active:tabIndex == i}"
          @click='deal(i)'>{{v}}</li> -->
    </ul>
    <div class="content">
      <div class="panel"
           :class="{active:tabIndex == 0}">首页-内容</div>
      <div class="panel"
           :class="{active:tabIndex == 1}">所有商品-内容</div>
      <div class="panel"
           :class="{active:tabIndex == 2}">装饰摆件-内容</div>
      <div class="panel"
           :class="{active:tabIndex == 3}">布艺软装-内容</div>
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  data () {
    return {
      tabs: ['首页', '所有商品', '装饰摆件', '布艺软装', '加个值'],
      tabIndex: 0
    }
  },
  methods: {
    deal (index) {
      this.tabIndex = index
    }
  }
}
</script>
<style lang='less' scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.container {
  width: 600px;
  margin: 50px auto;
}
ul {
  list-style: none;
  width: 600px;
  display: flex;
  height: 50px;
}
ul > li {
  flex: 1;
  background-color: #ccc;
  border-right: 1px solid rgb(255, 255, 255);
  line-height: 50px;
  text-align: center;
  border-bottom: 2px solid #fff;
}
ul > li:last-child {
  border-right: none;
}
ul > li.active {
  background-color: orange;
  border-bottom: 2px solid transparent;
}
.content {
  width: 600px;
  height: 400px;
  overflow: hidden;
}
.content .panel {
  width: 600px;
  height: 400px;
  background-color: #ccc;
  display: none;
  padding: 50px;
  font-size: 30px;
}
.content .panel.active {
  display: block;
}
</style>