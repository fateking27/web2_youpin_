<template>
  <div class="list">
    <div class="my-goods-item"
         v-for='i in 5'>
      <div class="left">
        <div class="custom-control custom-checkbox">
          <input type="checkbox"
                 class="custom-control-input">
          <label class="custom-control-label">
            <img src="@/assets/logo.png"
                 alt="">
          </label>
        </div>
      </div>
      <div class="right">
        <div class="top"> 商品名称 </div>
        <div class="bottom">
          <span class="price">¥ 价格</span>
          <!-- 数量组件 -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.list {
  padding: 45px 0 50px 0;
}
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