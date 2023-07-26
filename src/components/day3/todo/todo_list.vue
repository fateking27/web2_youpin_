<template>
  <div class="todo_list">
    <ul class="list-group">
      <li class="list-group-item d-flex justify-content-between align-items-center"
          v-for='value in list'>
        <!-- 左侧 -->
        <div class="form-check">
          <input class="form-check-input"
                 type="checkbox"
                 v-model='value.state'>
          <label class="form-check-label"
                 :class='{finished:value.state}'
                 :for="value.id">
            {{value.task}}
          </label>
        </div>
        <!-- 右侧 -->
        <span class="badge badge-success"
              v-if='value.state'>完成</span>
        <span class="badge badge-warning"
              v-else>未完成</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="less" scoped>
.todo_list {
  width: 400px;
}
.finished {
  color: #ccc;
  text-decoration: line-through;
}
</style>