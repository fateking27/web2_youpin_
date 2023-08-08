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
             placeholder="请输入搜索条件"
             v-model='userKey'>
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
          <tr v-for='(v,i) in search'
              :key='v.id'>
            <td>{{i+1}}</td>
            <td>{{v.brandName}}</td>
            <td>{{v.date}}</td>
            <!-- <td :class='{red:v.price > 10000}'>{{v.price}}</td> -->

            <td v-if='v.price<=10000'>{{v.price}}</td>
            <td class='red'
                v-else>{{v.price}}</td>

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
            <td colspan='5'>{{getTotalPrice()}}</td>
          </tr>
          <tr v-if='search.length == 0'>
            <td colspan='6'>没有数据，请先添加</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  // 定义数据
  data () {
    return {
      userKey: '',
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
      let total = 0
      this.brandList.forEach(v => {
        total += v.price
      })
      return total
    }
  },
  computed: {
    search () {
      let temp = this.brandList.filter(v => v.brandName.toLowerCase().indexOf(this.userKey.toLowerCase()) != -1)
      return temp
    }
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