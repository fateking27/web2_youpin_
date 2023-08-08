<template>
  <div>
    用户名： <input type='text'
           v-model='user.username' /> <br>
    密码： <input type='password'
           v-model='user.password' /> <br>
    <button @click='login'>登陆</button>
  </div>
</template>
<script>
import { userLoginApi } from '@/apis/user.js'
export default {
  // http://127.0.0.1:9000/api/v1/member/login
  name: '',
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    async login () {
      // 愿望：我希望通过调用一个方法，就可以实现登陆，而不用去关注你是如何发起请求的
      try {
        let res = await userLoginApi(this.user)
        console.log(res);

      }
      catch (err) {

      }

    }
  }
}
</script>
<style lang='less' scoped>
</style>