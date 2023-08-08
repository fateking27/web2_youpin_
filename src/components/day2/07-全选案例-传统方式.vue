<template>
  <div>
    <span>全选:</span>
    <!-- 4. v-model 关联全选 - 选中状态 -->
    <input type="checkbox"
           @click='changeState' />
    <button>反选</button>
    <ul>
      <li v-for='item in arr'
          :key='item.name'>
        <!-- 3. 对象.c - 关联 选中状态
        :checked='item.c'  -->
        <input type="checkbox"
               v-model='item.c' />
        <span>{{item.name}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
// 目标: 小选框 -> 全选
// 1. 标签+样式+js准备好
// 2. 把数据循环展示到页面上
export default {
  data () {
    return {
      arr: [
        {
          name: "猪八戒",
          c: true,
        },
        {
          name: "孙悟空",
          c: false,
        },
        {
          name: "唐僧",
          c: false,
        },
        {
          name: "白龙马",
          c: false,
        },
      ],
    };
  },
  methods: {
    changeState (e) {

      // 以前：获取全选复选框》获取它的状态》遍历所有数据 》 将数据中的属性赋值为全选状态值 》 重新渲染
      let state = e.target.checked

      this.arr.forEach(v => {
        v.c = state
      })
    }
  }
};
</script>

<style>
</style>