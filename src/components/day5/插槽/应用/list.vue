<template>
  <div>
    <h2>商品列表</h2>
    <mytable :list='goodslist'>
      <template #title>
        <tr>
          <th>编号</th>
          <th>商品名称</th>
          <th>价格</th>
          <th>图片</th>
          <th>操作</th>
        </tr>
      </template>
      <template slot="tr"
                slot-scope="{item,i}">
        <th scope="row">{{i+1}}</th>
        <td>{{item.goods_name}}</td>
        <td>${{item.goods_price}}</td>
        <td>{{item.goods_img}}</td>
        <td>
          <button>编辑</button>
          <button>删除</button>
        </td>
      </template>
    </mytable>
  </div>
</template>
<script>
import mytable from './mytable.vue'
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
    mytable
  }
}
</script>
<style lang='less' scoped>
</style>