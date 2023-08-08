<template>
  <div class="todo_input">
    <form>
      <div class="form-row align-items-center">
        <div class="col-auto"
             style='width:400px'>
          <div class="input-group mb-2">
            <div class="input-group-prepend">
              <div class="input-group-text">任务</div>
            </div>
            <input type="text"
                   class="form-control"
                   placeholder="请填写任务信息"
                   v-model.trim='taskName'>
          </div>
        </div>
        <div class="col-auto">
          <button type="submit"
                  class="btn btn-primary mb-2"
                  @click.prevent='addTask'>添加新任务</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      taskName: ''
    }
  },
  methods: {
    addTask () {
      if (!this.taskName) {
        this.$message({
          message: '请输入任务名称',
          type: 'warning'
        });
        return
      }
      // 以前新增：获取用户输入的新任务 》 生成一个对象 》 添加到数组中 》 渲染
      // 现在：使用子传父将新任务传递给父组件
      this.$emit('addNewTask', this.taskName)
      this.taskName = ''
    }
  }
}
</script>

<style>
</style>