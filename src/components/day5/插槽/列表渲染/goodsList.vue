<template>
  <div>
    <h1>商品列表</h1>
    <!-- data指定数据源，它是一个数组 -->
    <el-table :data="goodslist"
              border
              style="width: 100%">
      <!-- prop:指定当前列展示的数据对象的对应的属性名称  -->
      <el-table-column prop="goods_id"
                       label="ID"
                       width="180">
      </el-table-column>
      <el-table-column prop="goods_name"
                       label="商品名称"
                       width="180">
      </el-table-column>
      <el-table-column prop="goods_price"
                       label="商品价格">
      </el-table-column>
      <el-table-column label="商品图片">
        <!-- 当你需要获取到数据进行自定义处理的时候，就应该使用插槽 -->
        <template slot-scope="scope">
          <img :src='scope.row.goods_img'>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="{row}">
          <el-button type="primary"
                     icon="el-icon-edit">编辑</el-button>
          <el-button type="primary"
                     icon="el-icon-delete"
                     @click='del(row)'>删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
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
  methods: {
    deal (v) {
      console.log(v);

    },
    del (id) {
      console.log(id);

      // axios({
      //   method: 'delete',
      //   url: 'aaa.bbb.ccc',
      //   params: { id }
      // })
    }
  }
}
</script>
<style lang='less' scoped>
img {
  width: 100px;
}
</style>