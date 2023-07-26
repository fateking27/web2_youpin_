<template>
  <div class="list">
    <div class="my-goods-item">
      <div class="left">
        <div class="custom-control custom-checkbox">
          <input type="checkbox"
                 class="custom-control-input"
                 v-model='goods.goods_state'
                 :id='goods.goods_id'>
          <label class="custom-control-label"
                 :for='goods.goods_id'>
            <img :src="goods.goods_img"
                 alt="">
          </label>
        </div>
      </div>
      <div class="right">
        <div class="top"> {{goods.goods_name}} </div>
        <div class="bottom">
          <span class="price">¥ {{goods.goods_price}}</span>
          <!-- 数量组件 -->
          <wn_counter :current='goods'
          ></wn_counter>
          <!-- <wn_counter :cnt='goods.goods_count'
          @addCount='goods.goods_count++'
          @subCount='goods.goods_count>1 && goods.goods_count--'></wn_counter> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import wn_counter from './wn_counter.vue'
export default {
  props: {
    goods: {
      type: Object,
      required: true
    }
  },
  components: {
    wn_counter
  }
}
</script>

<style lang="less" scoped>
.my-goods-item {
  display: flex;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  .left {
    img {
      width: 120px;
      height: 120px;
      margin-right: 8px;
      border-radius: 10px;
    }
    .custom-control-label::before,
    .custom-control-label::after {
      top: 50px;
    }
  }
  .right {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .top {
      font-size: 14px;
      font-weight: 700;
    }
    .bottom {
      display: flex;
      justify-content: space-between;
      padding: 5px 0;
      align-items: center;
      .price {
        color: red;
        font-weight: bold;
      }
    }
  }
}
</style>