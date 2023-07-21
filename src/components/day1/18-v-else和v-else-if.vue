<template>
  <div>
    <input v-model='score'
           type='number'>
    <h1 v-if='score>=90'>A</h1>
    <h1 v-else-if='score>=80'>B</h1>
    <h1 v-else-if='score>=70'>C</h1>
    <h1 v-else-if='score>=60'>D</h1>
    <h1 v-else>E</h1>
  </div>
</template>
<script>
export default {
  name: '',
  data () {
    return {
      score: 0
    }
  },
}
</script>
<style lang='less' scoped>
</style>