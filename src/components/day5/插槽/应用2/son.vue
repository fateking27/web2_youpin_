<template>
  <div>
    <button @click='getData'>单击获取用户详情--详情数据总后台通用</button>
    <h3>渲染结果</h3>
    <slot name='result'
          :item='userInfo'></slot>
  </div>
</template>
<script>
export default {
  name: '',
  data () {
    return {
      userInfo: {}
    }
  },
  methods: {
    getData () {
      let user = {
        "goods_id": 1,
        "goods_name": "低帮城市休闲户外鞋天然牛皮COOLMAX纤维",
        "goods_price": 128,
        "goods_count": 2,
        "goods_img": "https://yanxuan-item.nosdn.127.net/3a56a913e687dc2279473e325ea770a9.jpg",
        "goods_state": true
      }
      this.userInfo = user
    }
  }
}
</script>
<style lang='less' scoped>
</style>