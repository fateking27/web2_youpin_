<template>
  <div class='roleList'>

    <el-button type="primary"
               style='margin-bottom:20px'
               @click='addRoledialogFormVisible=true'>添加身份</el-button>
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
                     size="small"
                     @click='openeditRoleHandler(scope.row)'>编辑</el-button>
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

    <!-- 添加身份dialog -->
    <el-dialog title="添加身份"
               :visible.sync="addRoledialogFormVisible"
               ref='mydialog'>
      <el-form :model="roleForm">
        <el-form-item label="身份名称"
                      :label-width="formLabelWidth">
          <el-input v-model="roleForm.role_name"
                    autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="是否开户"
                      :label-width="formLabelWidth">
          <el-radio-group v-model="roleForm.status">
            <el-radio :label="1">开启</el-radio>
            <el-radio :label="0">关闭</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="权限"
                      :label-width="formLabelWidth">
          <el-tree :data="rightList"
                   ref='tree'
                   show-checkbox
                   node-key="id"
                   :default-expanded-keys="[]"
                   :default-checked-keys="defaultCheckedIdsArr"
                   :props="defaultProps"
                   @check='checkHandler'
                   style='margin-top:10px'>
          </el-tree>
        </el-form-item>
      </el-form>
      <div slot="footer"
           class="dialog-footer">
        <el-button @click="addRoledialogFormVisible = false">取 消</el-button>
        <el-button type="primary"
                   @click="addRoleHandler">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import {
  getAllRoleListHandler,
  getAllRightListHandler,
  storeRoleHandler,
  getRoleByIdHandler
} from '@/apis/role.js'
export default {
  name: 'rolelist',
  data () {
    return {
      roleList: [],
      pageIndex: 1,
      pageSize: 5,
      total: 0,
      addRoledialogFormVisible: false,
      formLabelWidth: '120px',
      roleForm: {
        // 新增所需要的4个参数
        id: 0,
        status: 1,
        role_name: '',
        checked_menus: [],
        // 编辑还需要的两个参数
        level: '',
        rules: []
      },
      rightList: [],
      defaultCheckedIdsArr: [],
      defaultProps: {
        label: 'title',
        children: 'children'
      }
    }
  },
  methods: {
    // 编辑弹框-实现数据的回填
    async openeditRoleHandler (row) {
      this.defaultCheckedIdsArr = []
      let res = await getRoleByIdHandler(row.id)

      this.addRoledialogFormVisible = true

      this.roleForm = { ...res.data.data.role }

      this.roleForm.checked_menus = this.roleForm.rules.split(',')

      this.$nextTick(() => {
        // setCheckedKeys设置目前勾选的节点，使用此方法必须设置 node-key 属性
        this.$refs.tree.setCheckedKeys([...this.roleForm.checked_menus])
      })
    },
    // 单击树型控件中的复选框 
    checkHandler (current, keys) {
      this.roleForm.checked_menus = [...keys.checkedKeys, ...keys.halfCheckedKeys]
    },
    // 角色入库
    async addRoleHandler () {
      let res
      if (!this.roleForm.id) {
        delete this.roleForm.level
        delete this.roleForm.rules
      }

      res = await storeRoleHandler(this.roleForm)


      this.addRoledialogFormVisible = false
      this.$message.success('操作成功')
      this.getRoleList()
      // 清空
      this.roleForm = {}

    },
    handleSizeChange (val) {
      this.pageSize = val
      this.pageIndex = 1
      this.getRoleList()
    },
    handleCurrentChange (val) {
      this.pageIndex = val
      this.getRoleList()
    },
    async getRoleList () {
      let res = await getAllRoleListHandler({ page: this.pageIndex, limit: this.pageSize })
      // console.log(res);
      this.roleList = res.data.data.list
      this.total = res.data.data.count
    },
    async getRightList () {
      let res = await getAllRightListHandler()
      this.rightList = res.data.data.menus
      console.log(this.rightList);
      // 实现一个权限默认选中，同时添加禁用
      this.rightList.forEach(item => {
        if (item.title == '主页') {
          item.disabled = true
          this.defaultCheckedIdsArr.push(item.id)
          // 将它的children中的对象也添加disabled禁用
          item.children.forEach(subitem => {
            subitem.disabled = true
            this.defaultCheckedIdsArr.push(subitem.id)
          })
        }
      })
    }
  },
  async created () {
    this.getRoleList()
    this.getRightList()
  },
}
</script>
<style lang='less' scoped>
/deep/ table {
  width: 100%;
}
</style>