<template>
  <div>
    <h1>登陆</h1>
    <wn_button type='primary'
               @click='login'>
      <!-- 在使用组件的时候，在组件中间添加的内容都会替换到匿名插槽的位置 -->
      <span class='el-icon-s-goods'></span>注册
    </wn_button>
    <button>这是按钮的文本内容</button>
  </div>
</template>
<script>
import wn_button from './wn_button'
export default {
  name: '',
  data () {
    return {
    }
  },
  components: {
    wn_button
  },
  methods: {
    login (e) {
      console.log(e, '我要去登陆了');

    }
  }
}
</script>
<style lang='less' scoped>
</style>