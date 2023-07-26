<template>
  <!-- 底部 -->
  <div class="my-footer">
    <!-- 全选 -->
    <div class="custom-control custom-checkbox">
      <input type="checkbox"
             class="custom-control-input"
             id="footerCheck"
             v-model='checkAll'>
      <label class="custom-control-label"
             for="footerCheck">全选</label>
    </div>
    <!-- 合计 -->
    <div>
      <span>合计:</span>
      <span class="price">¥ {{getTotal.sum}}</span>
    </div>
    <!-- 按钮-结算 -->
    <button type="button"
            class="footer-btn btn btn-primary">结算 ( {{getTotal.num}} )</button>
  </div>
</template>

<script>
export default {
  props: {
    allGoods: {
      type: Array,
      required: true
    }
  },
  computed: {
    checkAll: {
      get () {
        return this.allGoods.every(v => v.goods_state == true)
      },
      set (state) {
        // 将所有商品的选中状态设置和state一致
        this.allGoods.forEach(v => {
          v.goods_state = state
        })
      }
    },
    getTotal () {
      let sum = 0, num = 0
      this.allGoods.forEach(v => {
        // 选中的商品才需要参与计算
        if (v.goods_state) {
          num++
          sum += v.goods_count * v.goods_price
        }
      })
      return { sum, num }
    },
    // getTotalCount () {
    //   let num = 0
    //   this.allGoods.forEach(v => {
    //     // 选中的商品才需要参与计算
    //     if (v.goods_state) {
    //       num++
    //     }
    //   })
    //   return num
    // }
  }
}
</script>

<style lang="less" scoped>
.my-footer {
  position: fixed;
  z-index: 2;
  bottom: 0;
  width: 100%;
  height: 50px;
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  background: #fff;

  .price {
    color: red;
    font-weight: bold;
    font-size: 15px;
  }
  .footer-btn {
    min-width: 80px;
    height: 30px;
    line-height: 30px;
    border-radius: 25px;
    padding: 0;
  }
}
</style>