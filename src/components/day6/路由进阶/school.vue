<template>
  <div>
    <h1>这是{{schoolName}}校区</h1>
  </div>
</template>
<script>
export default {
  name: '',
  data () {
    return {
      schoolName: ''
    }
  },
  // 从另外一个路由跳转到当前路由，需要加载当前组件，触发mounted
  mounted () {
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
</style>