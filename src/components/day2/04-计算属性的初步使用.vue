<template>
  <div id="app">
    <div class="add">
      品牌名称:<input type="text"
             v-model.trim.lazy='newBrand.brandName'>
      添加日期:<input type="datetime-local"
             v-model='newBrand.date'>
      价格:<input type="number"
             v-model.number='newBrand.price'>
      <input type="button"
             value="添加"
             @click='add'>
    </div>
    <div class="add">
      品牌名称:<input type="text"
             placeholder="请输入搜索条件">
    </div>
    <div>
      <table class="tb">
        <tbody>
          <tr>
            <th>编号</th>
            <th>品牌名称</th>
            <th>创立时间</th>
            <th>价格</th>
            <th>图片</th>
            <th>操作</th>
          </tr>
          <!-- 使用v-for实现遍历渲染 -->
          <tr v-for='(v,i) in brandList'
              :key='v.id'>
            <td>{{i+1}}</td>
            <td>{{v.brandName}}</td>
            <!-- 调用过滤器的时候，会默认将管道符前面的数据做为参数传递 -->
            <!-- 不管你是否传递了参数，都不会影响默认参数的传递 -->
            <td>{{v.date | dateFormat('-')}}</td>
            <td :class='{red:v.price > 10000}'>{{v.price}}</td>
            <td>
              <img :src='v.img'>
            </td>
            <td>
              <!-- 绑定事件 -->
              <a href="#"
                 @click='del(v.id)'>删除</a>
            </td>
          </tr>
          <tr>
            <td>总价:</td>
            <!-- 在使用计算属性的时候，要像使用data中声明的属性一样使用计算属性
            看起来像函数，用起来是属性 -->
            <td colspan=''>{{getTotalPrice()}}</td>
            <td colspan=''>{{getTotalPrice()}}</td>
            <td colspan=''>{{getTotalPrice()}}</td>
            <td colspan=''>{{getTotalPrice()}}</td>
            <td colspan=''>{{getTotalPrice()}}</td>
            <td colspan=''>{{getTotalPrice()}}</td>
          </tr>
          <tr v-if='brandList.length == 0'>
            <td colspan='6'>没有数据，请先添加</td>
          </tr>
        </tbody>
      </table>

    </div>
  </div>
</template>
<script>
// 引入全局过滤器文件中的某个成员
// 默认导出成员，直接接收
// 非默认导出的成员，需要使用解构方式接收
import { dateFormat } from '@/utils/commonFilters.js'
export default {
  // 定义数据
  data () {
    return {
      total: 0,
      newBrand: {
        brandName: '',
        date: '',
        price: '',
        img: 'http://pic-bucket.ws.126.net/photo/0008/2020-03-11/F7EJD9BE6R0M0008NOS.jpg?imageView&thumbnail=300y225'
      },
      brandList: [
        // 数据一定要有id，图片是网络图片
        { id: 1, brandName: 'QQ', date: '2022-4-4', price: 10000, img: 'http://pic-bucket.ws.126.net/photo/0008/2020-03-11/F7EJD9BE6R0M0008NOS.jpg?imageView&thumbnail=300y225' },
        { id: 2, brandName: 'BWM', date: '2022-5-5', price: 20000, img: 'http://pic-bucket.ws.126.net/photo/0008/2019-06-18/EHV82VCR294K0008NOS.jpg?imageView&thumbnail=300y225' },
        { id: 3, brandName: 'BYD', date: '2022-6-6', price: 30000, img: 'http://pic-bucket.ws.126.net/photo/0008/2021-04-12/G7DBDENINJEM0008NOS.jpg?imageView&thumbnail=300y225' },
      ]
    }
  },
  methods: {
    del (id) {
      // 数据变化，视图会自动更新
      this.brandList = this.brandList.filter(v => v.id != id)
    },
    // 添加
    add () {
      this.newBrand.id = this.brandList.length > 0 ? this.brandList[this.brandList.length - 1].id + 1 : 1

      // 以前： 收集数据  》》 添加到数组  》》 重新渲染
      // 现在： 双向绑定  》》 添加到数组  》》 ...
      this.brandList.push({ ...this.newBrand })
    },
    getTotalPrice () {
      console.log('调用了这个方法');

      let total = 0
      this.brandList.forEach(v => {
        total += v.price
      })
      return total
    }
  },
  filters: {
    dateFormat
  },
  // 添加计算属性
  computed: {
    // 计算属性的成员需要进行业务处理，所以是函数形式
    //  只要计算属性中使用的this的成员发生了变化，就会重新触发计算属性，相当于它可以侦听指定的属性值的变化，从而进行相应的处理
    // getTotalPrice () {
    //   console.log('调用了这个计算属性');
    //   let total = 0
    //   this.brandList.forEach(v => {
    //     total += v.price
    //   })
    //   return total
    // }
  }
}
</script>
<style lang='less' scoped>
.red {
  color: Red;
}
#app {
  width: 900px;
  margin: 10px auto;
}

.tb {
  border-collapse: collapse;
  width: 100%;
}

.tb th {
  background-color: #0094ff;
  color: white;
}

.tb td,
.tb th {
  padding: 5px;
  border: 1px solid black;
  text-align: center;
  img {
    width: 100px;
  }
}

.add {
  padding: 5px;
  border: 1px solid black;
  margin-bottom: 10px;
}
</style>