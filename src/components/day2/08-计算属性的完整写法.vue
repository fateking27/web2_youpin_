<template>
  <div>
    <span>全选:</span>
    <!-- 4. v-model 关联全选 - 选中状态 -->
    <input type="checkbox"
           v-model='optAll' />
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
  },
  computed: {
    optAll: {
      // 数据影响元素
      get () {
        // for (let i = 0; i < this.arr.length; i++) {
        //   if (this.arr[i].c == false) {
        //     return false
        //   }
        // }
        // return true
        return this.arr.every(v => v.c == true)
      },
      // 元素影响数据，有一个value参数就是当前操作元素之后的元素的值
      set (value) {
        this.arr.forEach(v => v.c = value)

      }
    }
  }
};
</script>

<style>
</style>