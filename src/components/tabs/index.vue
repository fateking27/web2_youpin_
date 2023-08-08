<template>
  <div>
    <div class="navPage">
      <el-tag class="itemPage">首页</el-tag>

      <el-tag v-for="item in getListTag"
              @close="closeTag(item)"
              @click="changeTag(item)"
              :key="item.path"
              class="itemPage"
              :class="{active: item.isChecked}"
              type="info"
              closable>
        {{ item.name }}
      </el-tag>
    </div>
  </div>
</template>

<script>
//辅助函数
import { mapGetters, mapMutations } from "vuex";

export default {
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters(["getListTag", 'getCurPath'])
  },
  methods: {
    ...mapMutations(['UPDATE_CHECKED', 'DEL_TAG']),
    changeTag (tag) {
      this.$router.push(tag.path).catch(err => { })
      this.UPDATE_CHECKED(tag.path);

    },
    closeTag (tag) {
      this.DEL_TAG(tag.path);
      this.$router.push(this.getCurPath).catch(err => { })
    }
  }
}
</script>

<style lang="less" scoped>
.navBrand {
  display: flex;
  width: 100%;
  height: 60px;
  align-items: center;
  padding-left: 20px;
}

.navPage {
  width: 100%;
  height: 60px;
  background: rgb(240, 240, 240);
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
  padding-left: 20px;
  .itemPage {
    margin-left: 10px;
    cursor: pointer;
  }

  .active {
    border: none;
    background-color: rgb(63, 174, 221);
    color: white;
  }
}
</style>