<script setup>
import { ref } from 'vue'

const activeName = ref('')
</script>

<template>
  <div class="login-page">
    <el-container>
      <el-header class="header">
        <h1 class="title">API 接口开放平台</h1>
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
          <el-tab-pane label="User" name="first">User</el-tab-pane>
          <el-tab-pane label="Config" name="second">Config</el-tab-pane>
          <el-tab-pane label="Role" name="third">Role</el-tab-pane>
          <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>
        </el-tabs>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<style lang="scss" scoped>
.login-page {
  height: 100vh;
  background: #fff url('@/assets/1.png') no-repeat;
  .el-container {
  }
}
</style>
