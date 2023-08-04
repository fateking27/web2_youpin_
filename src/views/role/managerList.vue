<template>
  <div>
    <el-alert :closable="false"
              title=""
              type="success">
      <el-button type="success"
                 @click='dialogFormVisible=true'>添加用户</el-button>
    </el-alert>

    <el-table ref="roleTable"
              border
              :data="adminListData"
              style="width: 100%">
      <el-table-column type="expand"
                       prop=""
                       label=""
                       width="80">
      </el-table-column>
      <el-table-column prop="real_name"
                       label="姓名"
                       width="80">
      </el-table-column>
      <el-table-column prop="account"
                       label="用户账号"
                       width="180">
      </el-table-column>
      <el-table-column prop="roles"
                       label="身份"
                       width="180">
      </el-table-column>
      <el-table-column :show-overflow-tooltip="true"
                       prop="_last_time"
                       label="最后一次登陆时间">
      </el-table-column>
      <el-table-column prop="last_ip"
                       align="center"
                       label="最后一次登陆ip">
      </el-table-column>
      <el-table-column align="center"
                       label="开启">
        <template v-slot="scoped">
          <el-switch v-model="scoped.row.status?true:false"
                     active-color="#13ce66"
                     inactive-color="#ff4949"
                     @change="statusChangeHandler(scoped.row)">
          </el-switch>
        </template>
      </el-table-column>
      <el-table-column prop=""
                       label="操作"
                       width="240">
        <template v-slot="scoped">
          <el-button type="success"
                     size="mini">详情</el-button>
          <el-button type="warning"
                     size="mini">编辑</el-button>
          <el-button type="danger"
                     size="mini">删除</el-button>
        </template>
      </el-table-column>

    </el-table>
    <el-dialog title="用户添加"
               :visible.sync="dialogFormVisible">
      <el-form :model="adminForm">
        <el-form-item label="用户名称"
                      :label-width="formLabelWidth">
          <el-input v-model="adminForm.account"
                    autocomplete="off"
                    placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码"
                      :label-width="formLabelWidth">
          <el-input v-model="adminForm.pwd"
                    type="password"
                    autocomplete="off"
                    placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item label="确认密码"
                      :label-width="formLabelWidth">
          <el-input v-model="adminForm.conf_pwd"
                    type="password"
                    autocomplete="off"
                    placeholder="请输入确认密码"></el-input>
        </el-form-item>
        <el-form-item label="姓名"
                      :label-width="formLabelWidth">
          <el-input v-model="adminForm.real_name"
                    autocomplete="off"
                    placeholder="请输入真实姓名"></el-input>
        </el-form-item>
        <el-form-item label="身份"
                      :label-width="formLabelWidth">
          <el-select style="width: 100%;"
                     multiple
                     clearable
                     v-model="adminForm.roles"
                     placeholder="请选择用户身份">
          </el-select>
        </el-form-item>
        <el-form-item label="状态"
                      :label-width="formLabelWidth">
          <el-radio-group v-model="adminForm.status">
            <el-radio :label="1">开启</el-radio>
            <el-radio :label="0">关闭</el-radio>
          </el-radio-group>
        </el-form-item>

      </el-form>
      <div slot="footer"
           class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary"
                   @click="">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {
  getAdminListHandler,
  updateAdminStatuHandler
} from '@/apis/role.js'

export default {
  name: 'adminManager',
  data () {
    return {
      formLabelWidth: '120px',
      dialogFormVisible: false,
      adminListData: [],
      adminForm: {
        'account': '', // 管理员账号
        'pwd': '', // 密码
        'conf_pwd': '', // 确认密码
        'real_name': '', // 姓名
        'roles': [], // 管理员身份，被分配的角色
        'status': 1 // 状态： 1 开启，0关闭
      },

    }
  },
  created () {
    this.getAdminList()
  },
  methods: {
    async getAdminList () {
      let res = await getAdminListHandler()
      this.adminListData = res.data.data.list
      // console.log(res);

    },
    async statusChangeHandler (row) {
      // 状态取反
      row.status = !row.status
      let res = await updateAdminStatuHandler(row.id, Number(row.status))
      console.log(res);
      this.$message.success('状态修改成功')

    }
  }
}
</script>
