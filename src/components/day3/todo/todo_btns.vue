<template>
  <div class="todo_button">
    <div class="btn-group"
         role="group"
         aria-label="Basic example">
      <button type="button"
              class="btn">全部</button>
      <button type="button"
              class="btn">已完成</button>
      <button type="button"
              class="btn">未完成</button>
    </div>
  </div>
</template>

<script>
export default {
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