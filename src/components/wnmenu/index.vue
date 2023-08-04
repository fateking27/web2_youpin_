<template>
  <div class='wnmenu'>
    <sidemenu :sideDate='$store.state.userData.menus'></sidemenu>
  </div>
</template>
<script>
import sidemenu from '../../components/wnmenu/Sidebar/index.vue'
export default {
  name: '',
  data () {
    return {
      currentIndex: '',
      menuList: [
        { title: 'aa', path: '/aa', icon: '' },
        {
          title: 'bb',
          path: '/bb',
          icon: 'el-icon-user-solid',
          children: [
            {
              title: 'ee',
              path: '/ee',
              icon: '',
              children: [
                { title: 'ff', path: '/ff', icon: 'el-icon-user-solid' }
              ]
            }
          ]
        },
        { title: 'cc', path: '/cc', icon: '' },
      ]
    }
  },
  components: {
    sidemenu
  },
  watch: {
    $route: {
      handler (newv) {
        // console.log('newv----', newv);
        let arr = newv.matched.map(v => {
          return {
            title: v.meta.title,
            path: v.path
          }
        })
        // console.log(arr);

        this.$store.commit('updateBreadPath', arr)
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    handleOpen (index) {
      this.currentIndex = index
    },
    deal () {
      this.$refs.mymenu.close(this.currentIndex)
    }
  }
}
</script>
<style lang='less' scoped>
.wnmenu {
  height: 100vh - 55;
  .el-menu {
    border-right: none;
  }
}
</style>