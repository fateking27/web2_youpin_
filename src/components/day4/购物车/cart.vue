<template>
  <div class='cartManager'>
    <wn_header></wn_header>
    <wn_goods></wn_goods>
    <wn_computer></wn_computer>
  </div>
</template>
<script>
import wn_header from './wn_header.vue'
import wn_goods from './wn_goods.vue'
import wn_computer from './wn_computer.vue'
export default {
  name: '',
  data () {
    return {
    }
  },
  components: {
    wn_computer, wn_header, wn_goods
  }
}
</script>
<style lang='less' scoped>
</style>