<template>
  <div>
    <table class="table table-bordered table-hover table-striped">
      <thead>
        <slot name='title'></slot>
      </thead>
      <tbody>
        <tr v-for='(item,i) in list' :key='item.goods_id'>
          <slot name='tr' :item='item' :index='i'></slot>
        </tr>
        
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  props: ['list'],
  name: '',
  data () {
    return {
    }
  },
}
</script>
<style lang='less' scoped>
</style>