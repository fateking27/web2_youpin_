<template>
  <div class="container">
    <div class="row clearfix">
      <div class="col-sm-offset-1 col-md-10">
        <h2 class="text-success">用户登录</h2>
        <form>
          <div class="form-group">
            <label for="username">用户名</label>
            <input type="text"
                   class="form-control"
                   placeholder="username or email..."
                   v-model='user.username'>
          </div>
          <div class="form-group">
            <label for="password">密 码</label>
            <input type="password"
                   class="form-control"
                   placeholder="Password..."
                   v-model='user.password'
                   @keydown.esc='login'>
          </div>
          <button type="button"
                  class="btn btn-success"
                  @click='login'>登录</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
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
      console.log('我要登陆了');

      // let res = await axios({
      //   method: 'post',
      //   url: 'http://192.168.5.33:9000/api/v1/member/login',
      //   data: this.user
      // })
      // console.log(res);

    }
  }
}
</script>
<style lang='less' scoped>
</style>