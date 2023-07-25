<template>
  <div class="todo_list">
    <ul class="list-group">
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <!-- 左侧 -->
        <div class="form-check">
          <input class="form-check-input"
                 type="checkbox"
                 value="">
          <label class="form-check-label">
            任务名称
          </label>
        </div>
        <!-- 右侧 -->
        <span class="badge badge-success">完成</span>
        <span class="badge badge-warning">未完成</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
.todo_list {
  width: 400px;
}
</style>