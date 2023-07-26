<template>
  <div class="todo_button">
    <div class="btn-group"
         role="group"
         aria-label="Basic example">
      <button type="button"
              class="btn"
              :class='{"btn-primary":type=="全部","btn-secondary":type!="全部"}'
              @click='filterData("全部")'>全部</button>
      <button type="button"
              class="btn"
              :class='{"btn-primary":type=="已完成","btn-secondary":type!="已完成"}'
              @click='filterData("已完成")'>已完成</button>
      <button type="button"
              class="btn"
              :class='{"btn-primary":type=="未完成","btn-secondary":type!="未完成"}'
              @click='filterData("未完成")'>未完成</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      type: '全部'
    }
  },
  
  methods: {
    filterData (value) {
      this.type = value
      // 告诉父组件进行数据的过滤
      this.$emit('filterData',value)
    }
  }
}
</script>

<style lang="less" scoped>
.todo_button {
  width: 400px;
  margin-top: 10px;
  display: flex;
  justify-content: center;
}
</style>