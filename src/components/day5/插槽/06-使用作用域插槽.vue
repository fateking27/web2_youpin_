<template>
  <div>
    <com>
      <!-- scope是一个对象，它的成员就是子组件插槽中所绑定数据 -->
      <!-- <template slot='abc'
                slot-scope='{data,youname}'> -->
      <template v-slot:abc='scope'>
        <span>aabbcc</span>
        <p>{{scope}}</p>
        <!-- <p>{{youname}}</p> -->
      </template>
    </com>
  </div>
</template>
<script>
import com from './05-作用域插槽'
export default {
  name: '',
  data () {
    return {
    }
  },
  components: {
    com
  }
}
</script>
<style lang='less' scoped>
</style>