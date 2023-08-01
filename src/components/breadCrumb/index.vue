<template>
  <div class='wnbreadcrumb'>
    <!-- <p>{{$store.state.breadCrumbTitle}}</p> -->
    <ul>
      <li :class='{bold:i==0}'
          @click='jump(item.path)'
          v-for='(item,i) in $store.state.breadCrumbTitle'>{{item.title}} <span v-if='i!=$store.state.breadCrumbTitle.length-1'>/</span></li>
    </ul>
  </div>
</template>
<script>
export default {
  name: '',
  data () {
    return {
    }
  },
  methods: {
    jump (path) {
      this.$router.push(path).catch(err => { })
    }
  }
}
</script>
<style lang='less' scoped>
.wnbreadcrumb {
  ul {
    padding: 0;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    list-style: none;
    li {
      margin: 0 2px;
      &.bold {
        font-weight: bold;
      }
    }
  }
}
</style>