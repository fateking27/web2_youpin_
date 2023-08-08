<template>
  <div class="my-counter">
    <button type="button"
            class="btn btn-light"
            @click='current.goods_count>1 && current.goods_count--'>-</button>
    <input type="number"
           class="form-control inp"
           v-model='current.goods_count'
           readonly>
    <button type="button"
            class="btn btn-light"
            @click='current.goods_count++'>+</button>
  </div>
</template>

<script>
export default {
  props: {
    current: {
      type: Object,
      required: true
    }
  },
  methods: {
    // add () {
    //   this.$emit('addCount')
    // },
    // sub () {
    //   this.$emit('subCount')
    // }
  }
}
</script>

<style lang="less" scoped>
.my-counter {
  display: flex;
  .inp {
    width: 45px;
    text-align: center;
    margin: 0 10px;
  }
  .btn,
  .inp {
    transform: scale(0.9);
  }
}
</style>