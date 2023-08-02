<template>
  <div class='userManager'>
    <el-card class="box-card">
      <el-tabs v-model="activeName"
               @tab-click="handleClick">
        <el-tab-pane label="全部"
                     name="first"></el-tab-pane>
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
      <el-table :data="userList"
                style="width: 100%">
        <!-- type="expand"：添加展开行 -->
        <el-table-column type="expand">
          <template slot-scope="props">
            <div class='expandContent'>
              <div class='item'>
                <p>首次访问:{{$moment(props.row.add_time*1000).format('YYYY-MM-DD')}}</p>
                <p>标签：</p>
                <p>备注：</p>
              </div>
              <div class='item'>
                <p>近次访问:{{$moment(props.row.add_time*1000).format('YYYY-MM-DD')}}</p>
                <p>生日：{{props.row.birthday}}</p>
              </div>
              <div class='item'>
                <p>身份证号:{{props.row.card_id}}</p>
                <p>推荐人：{{props.row.spread_uid_nickname}}</p>
              </div>
              <div class='item'>
                <p>真实姓名:{{props.row.read_name}}</p>
                <p>地址：</p>
              </div>
            </div>
          </template>
        </el-table-column>
        <!-- type="selection：添加复选框列 -->
        <el-table-column type="selection"
                         width="55">
        </el-table-column>
        <el-table-column label="ID"
                         prop="uid">
        </el-table-column>
        <el-table-column label="头像"
                         prop="avatar">
          <template slot-scope="scope">
            <img :src='scope.row.avatar'>
          </template>
        </el-table-column>
        <el-table-column label="姓名"
                         prop="nickname">
        </el-table-column>
        <el-table-column label="付费会员"
                         prop="vip_name">
        </el-table-column>
        <el-table-column label="用户等级"
                         prop="level">
        </el-table-column>
        <el-table-column label="分组"
                         prop="group_id">
        </el-table-column>
        <el-table-column label="手机号"
                         prop="record_phone">
        </el-table-column>
        <el-table-column label="用户类型"
                         prop="user_type">
        </el-table-column>
        <el-table-column label="余额"
                         prop="pay_count">
        </el-table-column>
        <!--  fixed="right"：添加右侧固定列 -->
        <el-table-column fixed="right"
                         label="操作"
                         width="100">
          <!-- 使用了自定义列模板，方便后期数据的获取 -->
          <template slot-scope="scope">
            <el-button type="text"
                       size="small">编辑</el-button>
            <el-dropdown>
              <span class="el-dropdown-link">
                更多<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>帐户详情</el-dropdown-item>
                <el-dropdown-item>积分余额</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <el-pagination @size-change="handleSizeChange"
                     @current-change="handleCurrentChange"
                     :current-page="pageIndex"
                     :page-sizes="[5, 4, 10, 20]"
                     :page-size="pageSize"
                     layout="total, sizes, prev, pager, next, jumper"
                     :total="total"
                     style='margin-top:20px;float:right'>
      </el-pagination>
    </el-card>
  </div>
</template>
<script>
import { getUserListHandler } from '@/apis/user.js'
export default {
  name: '',
  data () {

    return {
      userList: [],
      activeName: 'first',
      pageIndex: 1,//当前页码
      pageSize: 5,//每页显示的记录数
      total: 141, // 记录总数
    }
  },
  created () {
    this.init({ user_type: '', page: this.pageIndex, limit: this.pageSize })

  },
  methods: {
    // 每页显示的数量设置发生变化时触发
    handleSizeChange (val) {
      this.pageSize = val
      this.init({ user_type: '', page: this.pageIndex, limit: this.pageSize })
    },
    // 当前页码发生变化时触发
    handleCurrentChange (val) {
      this.pageIndex = val
      this.init({ user_type: '', page: this.pageIndex, limit: this.pageSize })
    },
    async init (params) {
      let res = await getUserListHandler(params)
      this.userList = res.data.data.list
      console.log(res);

    },

    handleClick (tab, event) {
      // console.log(tab, event);
    }
  }
}
</script>
<style lang='less' scoped>
.userManager {
  img {
    width: 60px;
  }
  /deep/ .el-dropdown-link {
    font-size: 12px;
    color: rgb(78, 158, 198);
    margin-left: 10px;
  }
  .expandContent {
    display: flex;
    padding: 20px;
    font-size: 12px;
    background-color: #eee;
    width: calc(100% - 100px);
    margin: -15px 0;
    > .item {
      flex: 1;
    }
  }
}
</style>