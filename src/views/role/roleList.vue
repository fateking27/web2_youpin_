<template>
  <div class='roleList'>

    <el-button type="primary"
               style='margin-bottom:20px'>添加身份</el-button>
    <el-table :data="roleList"
              border
              style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <div style='width:100%;padding-right:150px'>
            <el-tag v-for='item in props.row.rules.split(",")'
                    style='margin:0 5px 5px 0'>{{item}}</el-tag>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop=""
                       label="编号"
                       width="150">
        <template slot-scope="scope">
          <!-- 通过$index可以获取当前行的索引 -->
          <p>{{scope.$index + 1}}</p>
        </template>
      </el-table-column>
      <el-table-column prop="id"
                       label="ID"
                       width="120">
      </el-table-column>
      <el-table-column prop="role_name"
                       label="身份昵称"
                       width="120">
      </el-table-column>
      <!-- 没有设置，它会占据剩余的所有宽度 -->
      <el-table-column prop="rules"
                       label="权限"
                       :show-overflow-tooltip='true'>
      </el-table-column>
      <el-table-column label="操作"
                       fixed="right"
                       width="180">
        <template slot-scope="scope">
          <el-button type="primary"
                     size="small">编辑</el-button>
          <el-button type="danger"
                     size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-alert title=""
              :closable="false"
              type="success">
      <el-pagination @size-change="handleSizeChange"
                     @current-change="handleCurrentChange"
                     :current-page="pageIndex"
                     :page-sizes="[5,10,20,40]"
                     :page-size="pageSize"
                     layout="total, sizes, prev, pager, next, jumper"
                     :total="total">
      </el-pagination>

    </el-alert>
  </div>
</template>
<script>
import { getAllRoleListHandler } from '@/apis/role.js'
export default {
  name: '',
  data () {
    return {
      roleList: [],
      pageIndex: 1,
      pageSize: 5,
      total: 0
    }
  },
  methods: {
    handleSizeChange (val) {
      this.pageSize = val
      this.pageIndex = 1
      this.init()
    },
    handleCurrentChange (val) {
      this.pageIndex = val
      this.init()
    },
    async init () {
      let res = await getAllRoleListHandler({ page: this.pageIndex, limit: this.pageSize })
      console.log(res);
      this.roleList = res.data.data.list
      this.total = res.data.data.count
    }
  },
  async created () {
    this.init()
  },
}
</script>
<style lang='less' scoped>
/deep/ table {
  width: 100%;
}
</style>