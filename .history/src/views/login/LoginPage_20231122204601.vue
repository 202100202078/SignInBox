<script setup>
import { ref } from 'vue'
// import { Message, Lock } from '@element-plus/icons-vue'

const activeName = ref('byEmail')

// const isChecked = ref(true)
</script>

<template>
  <div class="login-page">
    <el-container>
      <el-header>
        <div class="header">
          <span class="logo">logo</span>
          <span class="title">API 接口开放平台</span>
        </div>
        <div class="describe">
          Qi-API 接口开放平台致力于提供稳定、安全、高效的接口调用服务
        </div>
      </el-header>
      <el-main>
        <el-tabs v-model="activeName" class="my-tabs">
          <el-tab-pane label="邮箱账号登录" name="byEmail">1111</el-tab-pane>
          <el-tab-pane label="账号密码登录" name="byAccount">2222</el-tab-pane>
          <div class="other">其他登录方式：1、2、3</div>
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
    padding-top: 56px;
    height: 100%;
    justify-content: center;
    align-items: center;
    .el-header {
      display: flex;
      flex-direction: column;
      height: 80px;
      justify-content: space-between;
      .header {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 44px;
        line-height: 44px;
        .logo {
          width: 44px;
          height: 44px;
          margin-right: 16px;
        }
        .title {
          font-size: 33px;
          font-weight: 600;
        }
      }
      .describe {
        font-size: 14px;
        color: rgba(0, 0, 0, 0.65);
      }
    }
  }
}

.my-tabs {
  width: 328px;
  ::v-deep .el-tabs__nav-wrap::after {
    width: 0px;
  }
}
</style>
