<template>
  <div class='login'>
    <div class="container">
      <el-form :model="loginForm"
               :rules="rules"
               ref="loginForm"
               label-width="100px"
               class="demo-ruleForm">
        <el-form-item label="用户名"
                      prop="username">
          <el-input v-model="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码"
                      prop="password">
          <el-input v-model="loginForm.password"></el-input>
        </el-form-item>
        <el-form-item style='float:right'>
          <el-button type="primary"
                     @click="submitForm('ruleForm')">登陆</el-button>
          <el-button>重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  data () {
    return {
      loginForm: {
        username: 'admin',
        password: '123456'
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm () {
      this.$refs.loginForm.validate(valid => {

        if (valid) {
          if (this.loginForm.username == 'admin' && this.loginForm.password == '123456') {
            localStorage.setItem('test_token', '123')
            // 跳转到首页
            this.$router.push({ path: '/index' })
          }
        }
        else {
          this.$message.warning('用户名或密码有错')
        }
      })
    }
  }
}
</script>
<style lang='less' scoped>
.login {
  height: 100vh;
  background-color: rgb(16, 32, 61);
  overflow: hidden;
  .container {
    width: 500px;
    height: 300px;
    margin: 100px auto 0;
    background-color: #fff;
    padding-top: 70px;
  }
}
</style>