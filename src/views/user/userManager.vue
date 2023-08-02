<template>
  <div class='userManager'>
    <el-card class="box-card">
      <el-tabs v-model="activeName"
               @tab-click="handleClick">
        <el-tab-pane label="全部"
                     name="first">全部</el-tab-pane>
        <el-tab-pane label="微信公众号"
                     name="second">微信公众号</el-tab-pane>
        <el-tab-pane label="微信小程序"
                     name="third">微信小程序</el-tab-pane>
        <el-tab-pane label="H5"
                     name="fourth">H5</el-tab-pane>
        <el-tab-pane label="PC"
                     name="fifth">PC</el-tab-pane>
        <el-tab-pane label="APP"
                     name="six">APP</el-tab-pane>
      </el-tabs>

      <!-- 表格--拥有展开行 -->
      <el-table :data="tableData5"
                style="width: 100%">
        <!-- type="expand"：添加展开行 -->
        <el-table-column type="expand">
          <template slot-scope="props">
            展开行的内容
          </template>
        </el-table-column>
        <!-- type="selection：添加复选框列 -->
        <el-table-column type="selection"
                         width="55">
        </el-table-column>
        <el-table-column label="商品 ID"
                         prop="id">
        </el-table-column>
        <el-table-column label="商品名称"
                         prop="name">
        </el-table-column>
        <el-table-column label="描述"
                         prop="desc">
        </el-table-column>
        <!--  fixed="right"：添加右侧固定列 -->
        <el-table-column fixed="right"
                         label="操作"
                         width="100">
          <!-- 使用了自定义列模板，方便后期数据的获取 -->
          <template slot-scope="scope">
            <el-button type="text"
                       size="small">查看</el-button>
            <el-button type="text"
                       size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>

    </el-card>
  </div>
</template>
<script>
import { getUserListHandler } from '@/apis/user.js'
export default {
  name: '',
  data () {

    return {
      tableData5: [{
        id: '12987122',
        name: '好滋好味鸡蛋仔',
        category: '江浙小吃、小吃零食',
        desc: '荷兰优质淡奶，奶香浓而不腻',
        address: '上海市普陀区真北路',
        shop: '王小虎夫妻店',
        shopId: '10333'
      }, {
        id: '12987123',
        name: '好滋好味鸡蛋仔',
        category: '江浙小吃、小吃零食',
        desc: '荷兰优质淡奶，奶香浓而不腻',
        address: '上海市普陀区真北路',
        shop: '王小虎夫妻店',
        shopId: '10333'
      }, {
        id: '12987125',
        name: '好滋好味鸡蛋仔',
        category: '江浙小吃、小吃零食',
        desc: '荷兰优质淡奶，奶香浓而不腻',
        address: '上海市普陀区真北路',
        shop: '王小虎夫妻店',
        shopId: '10333'
      }, {
        id: '12987126',
        name: '好滋好味鸡蛋仔',
        category: '江浙小吃、小吃零食',
        desc: '荷兰优质淡奶，奶香浓而不腻',
        address: '上海市普陀区真北路',
        shop: '王小虎夫妻店',
        shopId: '10333'
      }],
      userList: [],
      activeName: 'first'
    }
  },
  created () {
    this.init()

  },
  methods: {
    async init (params) {
      let res = await getUserListHandler(params)
      this.userList = res.data.data.list
      console.log(res);

    },

    handleClick (tab, event) {
      console.log(tab, event);
    }
  }
}
</script>
<style lang='less' scoped>
.userManager {
}
</style>