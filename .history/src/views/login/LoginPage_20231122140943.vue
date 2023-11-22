<script setup>
import { ref } from 'vue'

const activeName = ref('')
</script>

<template>
  <div class="login-page">
    <el-container>
      <el-header>
        <div class="header">
          <span class="logo">logo</span>
          <span class="title">API 接口开放平台</span>
        </div>
        <p class="describe">
          Qi-API 接口开放平台致力于提供稳定、安全、高效的接口调用服务
        </p>
      </el-header>
      <el-main>
        <el-tabs
          v-model="activeName"
          class="demo-tabs"
          @tab-click="handleClick"
        >
          <el-tab-pane label="邮箱账号登录" name="first">1111</el-tab-pane>
          <el-tab-pane label="账号密码登录" name="second">2222</el-tab-pane>
        </el-tabs>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<style lang="scss" scoped>
.login-page {
  height: 100vh;
  background: #fff url('@/assets/3.jfif') no-repeat 50%;
  .el-container {
    align-items: center;
    .el-header {
      display: flex;
    }
  }
}
</style>
