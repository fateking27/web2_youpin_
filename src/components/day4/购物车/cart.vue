<template>
  <div class='cartManager'>
    <wn_header bgcolor="orange">
      <!-- 使用组件的时候，在组件中间添加的内容默认会替换匿名插槽的位置 -->
      我的购物车
    </wn_header>
    <wn_goods v-for='item in goodslist'
              :key='item.goods_id'
              :goods='item'></wn_goods>
    <wn_computer :allGoods='goodslist'></wn_computer>
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
      goodslist: [
        {
          "goods_id": 1,
          "goods_name": "低帮城市休闲户外鞋天然牛皮COOLMAX纤维",
          "goods_price": 128,
          "goods_count": 2,
          "goods_img": "https://yanxuan-item.nosdn.127.net/3a56a913e687dc2279473e325ea770a9.jpg",
          "goods_state": true
        },
        {
          "goods_id": 2,
          "goods_name": "网易味央黑猪猪肘330g*1袋",
          "goods_price": 39,
          "goods_count": 10,
          "goods_img": "https://yanxuan-item.nosdn.127.net/d0a56474a8443cf6abd5afc539aa2476.jpg",
          "goods_state": true
        },
        {
          "goods_id": 3,
          "goods_name": "KENROLL男女简洁多彩一片式室外拖",
          "goods_price": 128,
          "goods_count": 2,
          "goods_img": "https://yanxuan-item.nosdn.127.net/eb1556fcc59e2fd98d9b0bc201dd4409.jpg",
          "goods_state": false
        },
        {
          "goods_id": 4,
          "goods_name": "21春季新品，儿童时尚圆领卫衣1-8岁",
          "goods_price": 85,
          "goods_count": 4,
          "goods_img": "https://yanxuan-item.nosdn.127.net/fa21cced568eb41f9b0be3a098bd3f31.jpg",
          "goods_state": false
        },
        {
          "goods_id": 5,
          "goods_name": "去皮去刺，辅食好选择，比目鱼纯肉250g",
          "goods_price": 43,
          "goods_count": 1,
          "goods_img": "https://yanxuan-item.nosdn.127.net/011f3c5062a6318187be711ca4214cb1.jpg",
          "goods_state": false
        }
      ]
    }
  },
  components: {
    wn_computer, wn_header, wn_goods
  }
}
</script>
<style lang='less' scoped>
.cartManager {
  padding: 45px 0 50px 0;
}
</style>