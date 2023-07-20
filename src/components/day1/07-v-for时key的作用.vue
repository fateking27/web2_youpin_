<template>
  <div id="app">
    <!-- 添加用户的区域 -->
    <div>
      <input type="text"
             v-model="name">
      <button @click="addNewUser">添加</button>
    </div>
    <!-- 用户列表区域 -->
    <ul>
      <!-- 最佳实践：最好每次使用 v-for 的时候，都为循环出来的每一项，动态绑定 key 值（把 Id 当作 Key 值） -->
      <li v-for="(user, index) in userlist"
          :key='user.id'>
        <input type="checkbox" />
        姓名：{{user.name}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userlist: [
        { id: 1, name: 'zs' },
        { id: 2, name: 'ls' }
      ],
      // 输入的用户名
      name: '',
      // 下一个可用的 id 值
      nextId: 3
    }
  },
  methods: {
    // 点击了添加按钮
    addNewUser () {
      this.userlist.unshift({ id: this.nextId, name: this.name })
      this.name = ''
      this.nextId++
    }
  },
}
</script>

<style>
</style>