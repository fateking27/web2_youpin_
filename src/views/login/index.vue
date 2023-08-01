<template>
  <div class="wrap">
    <div class="box">
      <div class="left">
        <img :src="bgimg"
             alt="">
      </div>
      <div class="right">
        <h1 class="title">优品商城后台管理系统</h1>
        <div class="login-form">
          <el-form status-icon
                   ref="loginForm"
                   :model='loginForm'
                   :rules="rules">
            <el-form-item prop="account">
              <el-input prefix-icon="el-icon-user"
                        type="text"
                        autocomplete="off"
                        v-model='loginForm.account'></el-input>
            </el-form-item>
            <el-form-item prop="pwd">
              <el-input prefix-icon="el-icon-lock"
                        type="password"
                        autocomplete="off"
                        v-model='loginForm.pwd'></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary"
                         @click='login'>登录</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import bgimg from '@/assets/login_bg.jpg'
import { userLogin } from '@/apis/user.js'
export default {
  name: 'Login',
  data () {
    return {
      bgimg,
      // 当前表单所绑定的数据对象
      loginForm: {
        account: 'mxx',
        pwd: 'admin88'
      },
      // 表单所对应的数据的验证规则
      rules: {
        account: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        pwd: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ],
      }
    };
  },
  methods: {
    login () {
      // 判断是否通过的校验
      this.$refs.loginForm.validate(async valid => {
        if (valid) {
          // 发起登陆请求
          let res = await userLogin(this.loginForm)
          console.log(res);

          let token = res.data.data.token
          if (token) {
            // localStorage.setItem('web2_youpin_token', token)
            this.$store.commit('updateToken', token)
            // 将用户信息存储到vuex
            this.$store.commit('updateUserInfo', res.data.data.user_info)
            this.$router.push('/index')

          } else {
            this.$message.error('登陆失败');

          }

        } else {
          this.$message.error('用户或密码输入不合法');
        }

      })
    }
  }
}
</script>
<style scoped lang="less">
.login-form /deep/ .el-button {
  width: 100%;
}
.wrap {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(rgb(163, 192, 241), rgb(141, 194, 240));
  background-repeat: no-repeat;
  background-position: center top;
  .box {
    width: 910px;
    height: 400px;
    //border: 1px solid #000;
    display: flex;
    border-radius: 10px;
    background-color: #fff;
    overflow: hidden;
    .left {
      width: 510px;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .right {
      flex: 1;
      height: 100%;
      //box-sizing: border-box;
      /* 注意：盒子模型 content-box  border-box */
      padding: 20px;
      .title {
        font-size: 24px;
        line-height: 80px;
        text-align: center;
        font-weight: 400;
      }
    }
  }
}
</style>