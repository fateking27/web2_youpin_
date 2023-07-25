<template>
  <div class="todo_input">
    <form>
      <div class="form-row align-items-center">
        <div class="col-auto"
             style='width:400px'>任务 <div class="input-group mb-2">
            <div class="input-group-prepend">
              <div class="input-group-text">任务</div>
            </div>
            <input type="text"
                   class="form-control"
                   placeholder="请填写任务信息">
          </div>
        </div>
        <div class="col-auto">
          <button type="submit"
                  class="btn btn-primary mb-2">添加新任务</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
}
</script>

<style>
</style>