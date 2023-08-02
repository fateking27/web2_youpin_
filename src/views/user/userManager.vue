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

      <el-table :data="tableData"
                style="width: 100%">
        <el-table-column prop="date"
                         label="日期"
                         width="180">
        </el-table-column>
        <el-table-column prop="name"
                         label="姓名"
                         width="180">
        </el-table-column>
        <el-table-column prop="address"
                         label="地址">
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
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      activeName: 'first'
    }
  },
  async created () {
    let res = await getUserListHandler({ user_type: 'routine' })
    console.log(res);

  },
  methods: {
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