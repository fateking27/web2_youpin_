<template>
  <div class='school'>
    <h1>这是{{schoolName}}校区</h1>
    <button @click='jump("detail")'>详情介绍</button>&nbsp;&nbsp;
    <button @click='jump("jobinfo")'>就业详情</button>&nbsp;&nbsp;
    <button @click='jump("talk")'>线上咨询</button>&nbsp;&nbsp;
    <!-- 添加嵌套路由所映射的组件的展示出口 -->
    <transition name="fadeIn"
                :duration='2'>
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
export default {
  name: '',
  props: ['id'],
  data () {
    return {
      schoolName: '',
      // id: ''
    }
  },
  methods: {
    jump (name) {
      console.log('进来了', this.id);

      // 字符串代表一个路径
      // this.$router.push({ path: `/school/1/detail` })
      // this.$router.push({ path: `detail`, query: { id: this.id } })
      // this.$router.push(`detail`)
      this.$router.push({ name, params: { id: this.id } }).catch(err => { })
    }
  },
  // 从另外一个路由跳转到当前路由，需要加载当前组件，触发mounted
  mounted () {
    console.log(this.$route);

    // let id = this.$route.params.id
    // console.log('本次的id:', id);

    // if (id == 1) {
    //   this.schoolName = '成都'
    // } else if (id == 2) {
    //   this.schoolName = '天府'
    // } else if (id == 3) {
    //   this.schoolName = '广州'
    // }
    // else if (id == 4) {
    //   this.schoolName = '深圳'
    // }
    // else {
    //   this.schoolName = '未知'
    // }
  },
  // 当前单击之后，还在同一个路由，只是参数变化，触发watch
  watch: {
    $route: {
      handler (to) {
        // to:跳转的目标路由对象
        // from:源路由对象
        let id = to.params.id
        // this.id = id
        console.log('本次的id:', id);

        if (id == 1) {
          this.schoolName = '成都'
        } else if (id == 2) {
          this.schoolName = '天府'
        } else if (id == 3) {
          this.schoolName = '广州'
        }
        else if (id == 4) {
          this.schoolName = '深圳'
        }
        else {
          this.schoolName = '未知'
        }
      },
      deep: true,
      immediate: true
    }
  }
}
</script>
<style lang='less' scoped>
.school {
  background-color: #ccc;
  padding: 20px;
}

.fadeIn-enter {
  transform: translateY(100%);
}
</style>