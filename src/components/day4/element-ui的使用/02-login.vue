<template>
  <div class='login'>
    <div class="box">
      <img src='@/assets/login_bg.jpg' />
      <div class="myform">
        <img src='@/assets/login_info.png'>
        <el-form :model="user"
                 ref="loginForm"
                 :rules="userrules"
                 class="demo-ruleForm">
          <el-form-item prop="username">
            <el-input placeholder="请输入用户名"
                      prefix-icon="el-icon-user-solid"
                      v-model='user.username'></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input placeholder="请输入密码"
                      prefix-icon="el-icon-lock"
                      v-model='user.password'></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary"
                       class='loginbtn'
                       @click='login'>登陆</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  data () {
    return {
      // 定义数据对象
      user: {
        username: '',
        password: ''
      },
      // 数据校验规则
      userrules: {
        // 属性名称:[校验规则]
        username: [
          // 必填项         校验不通过的提示            触发时机
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 3, max: 16, message: '长度在 3 到 16 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    login () {
      // validate:表单的方法
      // validate：可以实现校验，校验完成后，执行所传入的回调函数
      // 回调函数有一个参数，参数为true说明通过校验，否则没有通过校验
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          alert('我要去登陆了')
        } else {
          alert('请输入相应的值')
        }
      })
    }
  }
}
</script>
<style lang='less' scoped>
.login {
  background-color: rgb(44, 46, 73);
  height: 100vh;
  overflow: hidden;
  > .box {
    width: 1000px;
    margin: 150px auto;
    display: flex;
    > .myform {
      background-color: #fff;
      padding: 50px 100px;
    }
    .loginbtn {
      width: 100%;
    }
  }
}
</style>