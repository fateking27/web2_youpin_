<template>
  <div class='home'>
    <el-container>
      <el-aside width="250px">
        <div class="layout-aside-container">
          <!-- 左侧边栏列表 -->
          <ul class="user-select-none menu">
            <li class="menu-item">
              <router-link to="/index/user">用户管理</router-link>
            </li>
            <li class="menu-item">
              <router-link to="/index/role">权限管理</router-link>
            </li>
            <li class="menu-item">
              <router-link to="/index/goods">商品管理</router-link>
            </li>
            <li class="menu-item">
              <router-link to="/index/order">订单管理</router-link>
            </li>
            <li class="menu-item">
              <router-link to="/index/setting">系统设置</router-link>
            </li>
          </ul>
        </div>
      </el-aside>
      <el-container>
        <el-header>
          <div class="layout-header-container d-flex justify-content-between align-items-center p-3">
            <!-- 左侧 logo 和 标题区域 -->
            <div class="layout-header-left d-flex align-items-center user-select-none">
              <!-- logo -->
              <img class="layout-header-left-img"
                   src=""
                   alt="">
              <!-- 标题 -->
              <h4 class="layout-header-left-title ml-3">后台管理系统</h4>
            </div>

            <!-- 右侧按钮区域 -->
            <div class="layout-header-right">
              <button type="button"
                      class="btn btn-light">退出登录</button>
            </div>
          </div>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  name: '',
  data () {
    return {
    }
  },
}
</script>
<style lang='less' scoped>
.layout-header-container {
  height: 60px;
  border-bottom: 1px solid #eaeaea;
}

.layout-header-left-img {
  height: 50px;
}

.layout-aside-container {
  width: 250px;
  height: 100vh;
  border-right: 1px solid #eaeaea;
}

.menu {
  list-style-type: none;
  padding: 0;
  .menu-item {
    line-height: 50px;
    font-weight: bold;
    font-size: 14px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    &:hover {
      background-color: #efefef;
      cursor: pointer;
    }
    a {
      display: block;
      color: black;
      padding-left: 30px;
      &:hover {
        text-decoration: none;
      }
    }
  }
}

// 设置路由高亮效果
.router-link-active {
  background-color: #efefef;
  box-sizing: border-box;
  position: relative;
  // 伪元素实现路由高亮效果
  &::before {
    content: " ";
    display: block;
    width: 4px;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-color: #42b983;
  }
}
</style>