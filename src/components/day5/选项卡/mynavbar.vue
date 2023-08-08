<template>
  <div class="tabscontainer">
    <div class="tabitem"
         :class='{activeStyle:current == i}'
         v-for='(item,i) in tabs'
         :key='item.name'
         @click='tabClickHandler(i,item.name)'>
      <span :class="item.icon"></span>
      <span>{{item.text}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tabs: {
      type: Array,
      required: true,
      validator (value) {
        if (value.length > 5 || value.length < 2) {
          return false
        }
        return true
      }
    }
  },
  data () {
    return {
      current: 0
    }
  },
  methods: {
    tabClickHandler (i, name) {
      this.current = i
      this.$emit('changeComponent', name)
    }
  }
}
</script>

<style lang="less" scoped>
.tabscontainer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  border-top: 1px solid #efefef;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  .tabitem {
    display: flex;
    cursor: pointer;
    flex-direction: column;
    align-items: center;
  }
  // 激活项的样式
  .activeStyle {
    color: #ff0000;
  }
}
</style>