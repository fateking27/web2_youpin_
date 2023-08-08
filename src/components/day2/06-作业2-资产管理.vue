<template>
  <div id="app">
    <div class="container">
      <!-- 顶部框模块 -->
      <div class="form-group">
        <div class="input-group">
          <h4>品牌管理</h4>
        </div>
      </div>
      <!-- 数据表格 -->
      <table class="table table-bordered table-hover mt-2">
        <thead>
          <tr>
            <th>编号</th>
            <th>资产名称</th>
            <th>价格</th>
            <th>创建时间</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for='(item,index) in list'
              :key='item.id'>
            <td>{{index+1}}</td>
            <td>{{item.name}}</td>
            <!-- 如果价格超过100，就有red这个类 -->
            <td :class='{red:item.price > 1000}'>{{item.price}}</td>
            <td>{{item.create_time | dateFormat}}</td>
            <!-- 2. 函数触发-传值下 -->
            <td><a href="#"
                 @click='del(item.id)'>删除</a></td>
          </tr>
          <tr>
            <td>总价</td>
            <td>{{getTotal}}</td>
            <td>平均价格</td>
            <td>{{getAvg}}</td>
            <td></td>
          </tr>
          <tr v-show='list.length == 0'>
            <td colspan='5'>没有数据，请先添加数据</td>
          </tr>
        </tbody>

      </table>

      <!-- 添加资产 -->
      <form class="form-inline">
        <div class="form-group">
          <div class="input-group">
            <input type="text"
                   class="form-control"
                   placeholder="资产名称"
                   v-model.trim='
                 obj.name'
                   autofocus />
          </div>
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <div class="form-group">
          <div class="input-group">
            <input type="text"
                   class="form-control"
                   placeholder="价格"
                   v-model.number='obj.price' />
          </div>
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;

        <button class="btn btn-primary"
                @click.prevent='add'>添加资产</button>
      </form>
    </div>
  </div>
</template>

<script>
import { dateFormat } from '@/utils/commonFilters.js'
export default {
  data () {
    return {
      list: [
        { id: 1, name: 'dell电脑', price: 3000, create_time: '2023-07-24' },
        { id: 2, name: '手机', price: 1000, create_time: '2023-06-24' },
      ],
      obj: {
        name: '', price: 0
      }
    }
  },
  computed: {
    getTotal () {
      let sum = this.list.reduce((sum, v) => {
        return sum + v.price
      }, 0)
      return sum
    },
    getAvg () {
      // 平均值=总价/数量
      let avg = (this.getTotal / this.list.length).toFixed(2)
      return avg
    }
  },
  methods: {
    add () {
      let newObj = {
        id: this.list.length > 0 ? this.list[this.list.length - 1].id + 1 : 1,
        // id: this.list.at(-1).id + 1,
        ...this.obj,
        create_time: new Date()
      }
      this.list.push(newObj)
    },
    del (id) {
      // 调用的方法有两类：
      // 数组变更方法：splice,unshift,pop...:会直接修改源数组，视图会自动的更新
      // 数组的非变更方法:forEach  map filter.....：方法本身不会修改源数组，意味着不会改变数据，视图不会更新。调用此类方法的时候，需要将源数据重置
      this.list = this.list.filter(v => v.id != id)
    }
  },
  filters: {
    dateFormat
  }
};
</script>

<style >
.red {
  color: red;
}
</style>