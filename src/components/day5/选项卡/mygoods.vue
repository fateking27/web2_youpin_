<template>
  <div class="mygoods">
    <mytable :list='list'>
      <!-- 设置标题 -->
      <template #thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">商品名称</th>
          <th scope="col">价格</th>
          <th scope="col">标签</th>
          <th scope="col">操作</th>
        </tr>
      </template>

      <template slot='tbody'
                slot-scope='{value,index}'>
        <th scope="row">{{index+1}}</th>
        <td>{{value.goods_name}}</td>
        <td>{{value.goods_price}}</td>
        <td>
          <span class="badge badge-primary"
                v-if='!value.isshow'
                @click='value.isshow = true'>+tag</span>
          <input style='width:50px'
                 v-if='value.isshow'
                 @blur='addTagHandler(value)'
                 v-model='tagValue'
                 v-focus />
          <span class="badge badge-warning"
                v-for='tag in value.tags'
                style='margin:0 2px'>{{tag}}</span>
        </td>
        <td>
          <el-button type="danger">删除</el-button>
        </td>
      </template>
    </mytable>
  </div>
</template>

<script>
import mytable from './mytable.vue'
import { focus } from '@/utils/comminDirectives.js'
export default {
  data () {
    return {
      isShow: false,
      tagValue: '',
      list: [
        {
          "id": 1,
          "goods_name": "低帮城市休闲户外鞋天然牛皮COOLMAX纤维",
          "goods_price": 128,
          "tags": ["舒适", "透气"],
        },
        {
          "id": 2,
          "goods_name": "网易味央黑猪猪肘330g*1袋",
          "goods_price": 39,
          "tags": ["保暖", "防滑"]
        },
        {
          "id": 3,
          "goods_name": "KENROLL男女简洁多彩一片式室外拖",
          "goods_price": 128,
          "tags": ["保暖", "防滑"]
        },
        {
          "id": 4,
          "goods_name": "21春季新品，儿童时尚圆领卫衣1-8岁",
          "goods_price": 85,
          "goods_count": 4,
          "tags": ["秋冬", "毛衣"]
        },
        {
          "id": 5,
          "goods_name": "去皮去刺，辅食好选择，比目鱼纯肉250g",
          "goods_price": 43,
          "goods_count": 1,
          "tags": ["预售", "卫衣"]
        }
      ]
    }
  },
  created () {
    // 基于业务需求对数据进行改造
    this.list = this.list.map(v => {
      return {
        ...v,
        isshow: false // 标记当前行的输入框是否可见
      }
    })
  },
  methods: {
    // 添加标签
    addTagHandler (value) {
      // 让输入框消失
      value.isshow = false
      // 获取用户输入
      if (value.tags.indexOf(this.tagValue) != -1) {
        this.$message({
          type: 'warning',
          message: '此值已存在'
        })
        return
      }

      // 添加到数组
      value.tags.unshift(this.tagValue)
    }
  },
  components: {
    mytable
  },
  directives: {
    focus
  }

}
</script>

<style>
</style>