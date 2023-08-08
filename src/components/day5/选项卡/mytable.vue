<template>
  <div class="mytable">
    <table class="table table-bordered table-striped">
      <thead>
        <slot name='thead'></slot>
      </thead>
      <tbody>
        <tr v-for='(v,i) in list'
            :key='v.id'>
          <slot name='tbody'
                :value='v'
                :index='i'></slot>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array
    }
  },
  created () {
    console.log(this.list);

  }
}
</script>

<style>
</style>