<script setup>
import { ref } from 'vue'
import { Email } from '@element-plus/icons-vue'

const activeName = ref('')

const isChecked = ref(true)
</script>

<template>
  <div class="login-page">
    <el-container>
      <el-header height="auto">
        <div class="header">
          <span class="logo">logo</span>
          <span class="title">API 接口开放平台</span>
        </div>
        <div class="describe">
          Qi-API 接口开放平台致力于提供稳定、安全、高效的接口调用服务
        </div>
      </el-header>
      <el-main>
        <el-tabs v-model="activeName" class="demo-tabs">
          <el-tab-pane label="邮箱账号登录" name="first">
            <el-form>
              <el-form-item>
                <el-input
                  v-model="emailInput"
                  placeholder="请输入邮箱账号"
                  :prefix-icon="Email"
                ></el-input>
              </el-form-item>
              <el-form-item>
                <el-input></el-input>
                <el-button></el-button>
              </el-form-item>
              <el-form-item>
                <el-checkbox
                  v-model="isChecked"
                  label="自动登录"
                  size="large"
                />
                <el-link :underline="false">还没账号?点击前往注册</el-link>
              </el-form-item>
              <el-form-item>
                <el-button type="primary">登录</el-button>
              </el-form-item>
              <el-form-item> 其他登录方式：1、2、3 </el-form-item>
            </el-form>
          </el-tab-pane>
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
    padding-top: 56px;
    height: 100%;
    justify-content: center;
    align-items: center;
    .el-header {
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
        margin-top: 12px;
        margin-bottom: 12px;
        font-size: 14px;
        color: rgba(0, 0, 0, 0.65);
      }
    }
  }
}

.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>
