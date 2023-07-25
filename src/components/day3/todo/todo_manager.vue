<template>
  <div>
    <todo_input></todo_input>
    <todo_list></todo_list>
    <todo_btns></todo_btns>
  </div>
</template>
<script>
import todo_input from './todo_input.vue'
import todo_list from './todo_list.vue'
import todo_btns from './todo_btns.vue'
export default {
  name: '',
  data () {
    return {
    }
  },
  components: {
    todo_input, todo_list, todo_btns
  }
}
</script>
<style lang='less' scoped>
</style>