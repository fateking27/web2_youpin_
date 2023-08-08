<template>
  <div>
    <input type='number'
           v-model='size'>
    <button @click='deal'>展开或折叠</button>
    <!-- 如果bool值为true,则添加样式，否则移除样式 -->
    <!-- <div class='box' :class='{样式名称:bool值}'></div> -->
    <div class='box'
         :class='{collepse:isColl,red:isColl}'></div>
    <div class='box'
         :style='{"font-size":size+"px"}'>写个字</div>
  </div>
</template>
<script>
export default {
  name: '',
  data () {
    return {
      isColl: false,
      size: 16
    }
  },
  // 自定义函数定义在methods选项中
  methods: {
    deal () {
      this.isColl = !this.isColl
    }
  }
}
</script>
<style lang='less' scoped>
.box {
  width: 200px;
  height: 300px;
  background-color: #ccc;
  transition: all 1s;
}
.collepse {
  width: 10px;
}
.red {
  background-color: #f00;
}
</style>