<template>
  <div>
    <a href='https://www.baidu.com'
       @click.prevent='deal'>点我啊</a>
  </div>
</template>
<script>
export default {
  name: '',
  data () {
    return {
    }
  },
  methods: {
    deal (e) {
      // e.preventDefault()
      alert(123)
    }
  }
}
</script>
<style lang='less' scoped>
</style>