<template>
  <div>
    <h1>登陆</h1>
    <wn_button title='登陆'
               type='primary'
               @click='login'></wn_button>
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