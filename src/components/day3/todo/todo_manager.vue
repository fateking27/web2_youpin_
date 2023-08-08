<template>
  <div>
    <todo_input @addNewTask='addNewTask'></todo_input>
    <todo_list :list='getData'></todo_list>
    <todo_btns @filterData='filterData'></todo_btns>
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
      taskList: [
        // task：任务名称  state:任务是否完成，true代码完成,false代表未完成
        { id: 1, task: '周一早晨9点开会', state: false },
        { id: 2, task: '周一晚上8点聚餐', state: true },
        { id: 3, task: '准备周二演讲稿', state: false },
      ],
      id: 4,
      state: '全部'
    }
  },
  components: {
    todo_input, todo_list, todo_btns
  },
  methods: {
    addNewTask (data) {
      this.taskList.push({
        id: this.id, task: data, state: false
      })
      this.id++
    },
    filterData (data) {
      this.state = data
    }
  },
  computed: {
    getData () {
      if (this.state == '已完成') {
        return this.taskList.filter(v => v.state)
      } else if (this.state == '未完成') {
        return this.taskList.filter(v => !v.state)
      } else {
        return this.taskList
      }
    }
  }
}
</script>
<style lang='less' scoped>
</style>