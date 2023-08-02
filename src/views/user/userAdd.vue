<template>
  <div class='user_add'>
    <h3>用户信息添加</h3>
    <el-form :model="addUserForm"
             ref="addUserForm"
             label-width="100px"
             class="demo-addUserForm">
      <el-form-item label="真实姓名"
                    prop="name">
        <el-input v-model="addUserForm.real_name"></el-input>
      </el-form-item>
      <el-form-item label="手机号码"
                    prop="name">
        <el-input v-model="addUserForm.phone"></el-input>
      </el-form-item>

      <el-form-item label="生日"
                    prop="date1">
        <el-date-picker type="date"
                        placeholder="选择日期"
                        v-model="addUserForm.birthday"
                        style="width: 100%;"></el-date-picker>
      </el-form-item>
      <el-form-item label="身份证号"
                    prop="name">
        <el-input v-model="addUserForm.card_id"></el-input>
      </el-form-item>
      <el-form-item label="用户地址"
                    prop="name">
        <el-input v-model="addUserForm.addres"></el-input>
      </el-form-item>
      <el-form-item label="用户备注"
                    prop="name">
        <el-input v-model="addUserForm.mark"></el-input>
      </el-form-item>
      <el-form-item label="登陆密码"
                    prop="name">
        <el-input v-model="addUserForm.pwd"
                  type='password'></el-input>
      </el-form-item>
      <el-form-item label="确认密码"
                    prop="name">
        <el-input v-model="addUserForm.true_pwd"
                  type='password'></el-input>
      </el-form-item>
      <el-form-item label="用户等级"
                    prop="region">

      </el-form-item>
      <el-form-item label="用户分组"
                    prop="region">

      </el-form-item>
      <el-form-item label="用户标签"
                    id='abc'>

      </el-form-item>
      <el-dialog title="选择用户标签"
                 :visible.sync="UserlabeldialogVisible"
                 width="70%">

        <div class='item'>
          <h3>qq</h3>
          <el-tag>qqq</el-tag>
        </div>
        <span slot="footer"
              class="dialog-footer">
          <el-button>取 消</el-button>
          <el-button type="primary">确 定</el-button>
        </span>
      </el-dialog>

      <el-form-item label="推广资格"
                    prop="resource">
        <el-radio-group v-model="addUserForm.spread_open">
          <el-radio :label="1">启用</el-radio>
          <el-radio :label="0">禁用</el-radio>
        </el-radio-group><br>
        <span>禁用用户推广资格后，在任何分销模式下用户都无分销资格</span>
      </el-form-item>
      <el-form-item label="推广权限"
                    prop="resource">
        <el-radio-group v-model="addUserForm.is_promoter">
          <el-radio :label="1">开启</el-radio>
          <el-radio :label="0">锁定</el-radio>
        </el-radio-group><br>
        <span>指定分销模式下，开启或关闭用户的推广权限</span>
      </el-form-item>

      <el-form-item label="用户状态"
                    prop="resource">
        <el-radio-group v-model="addUserForm.status">
          <el-radio :label="1">开启</el-radio>
          <el-radio :label="0">锁定</el-radio>
        </el-radio-group><br>
      </el-form-item>

      <el-form-item>
        <el-button type="primary">立即创建</el-button>
        <el-button>重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  data () {
    return {
      UserlabeldialogVisible: false,
      addUserForm: {}
    }
  }
}
</script>
<style>
</style>