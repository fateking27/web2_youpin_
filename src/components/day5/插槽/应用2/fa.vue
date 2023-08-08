<template>
  <div>
    <son>
      <!-- <template slot='result'
                slot-scope='{item}'>
        <table border='1'>
          <thead>
            <tr>
              <th>1</th>
              <th>2</th>
              <th>3</th>
              <th>4</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{{item.goods_name}}</td>
              <td>{{item.goods_price}}</td>
              <td>{{item.goods_count}}</td>
              <td>{{item.goods_state}}</td>
            </tr>
          </tbody>
        </table>
      </template> -->

      <template slot='result'
                slot-scope='{item}'>
        <ul>
          <li>{{item.goods_name}}</li>
          <li>{{item.goods_price}}</li>
          <li>{{item.goods_count}}</li>
          <li>{{item.goods_img}}</li>
        </ul>
      </template>
    </son>

  </div>
</template>
<script>
import son from './son.vue'
export default {
  name: '',
  data () {
    return {
    }
  },
  components: {
    son
  }
}
</script>
<style lang='less' scoped>
</style>