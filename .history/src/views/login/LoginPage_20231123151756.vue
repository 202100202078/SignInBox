<script setup>
import { ref } from 'vue'
import {
  Message,
  Lock,
  User,
  EditPen,
  Paperclip
} from '@element-plus/icons-vue'
// import { router } from 'vue-router'
const emailForm = ref()
const accountForm = ref()

const formModel = ref({
  email: '',
  account: '',
  invitationCode: '',
  captcha: '',
  password: '',
  repassword: '',
  nickname: ''
})

const rules = ref

const activeName = ref('byEmail')

const isLoginPage = ref(true)

const autoLogin = ref(true)
const agreementChecked = ref(true)

const handleTabClick = (tab) => {
  //在tab切换时进行表单重置
  if (tab.props.name === 'byAccount') {
    emailForm.value.resetFields()
  } else {
    accountForm.value.resetFields()
  }
}
</script>

<template>
  <div class="login-page">
    <el-container>
      <el-header>
        <div class="header">
          <span class="logo">
            <img src="@/assets/avg/logo.svg" />
          </span>
          <span class="title">API 接口开放平台</span>
        </div>
        <div class="describe">
          Qi-API 接口开放平台致力于提供稳定、安全、高效的接口调用服务
        </div>
      </el-header>
      <el-main>
        <el-tabs
          v-model="activeName"
          @tab-click="handleTabClick"
          class="my-tabs"
          stretch
        >
          <el-tab-pane
            :label="isLoginPage ? '邮箱账号登录' : '邮箱账号注册'"
            name="byEmail"
          >
            <el-form ref="emailForm" :model="formModel">
              <el-form-item v-if="!isLoginPage">
                <el-input
                  v-model="formModel.nickname"
                  placeholder="请输入昵称"
                  :prefix-icon="EditPen"
                  size="large"
                ></el-input>
              </el-form-item>
              <el-form-item>
                <el-input
                  v-model="formModel.email"
                  placeholder="请输入邮箱账号"
                  :prefix-icon="Message"
                  size="large"
                ></el-input>
              </el-form-item>
              <el-form-item v-if="!isLoginPage">
                <el-input
                  v-model="formModel.invitationCode"
                  placeholder="请输入邀请码，没有可不填"
                  :prefix-icon="Paperclip"
                  size="large"
                ></el-input>
              </el-form-item>
              <el-form-item>
                <el-input
                  v-model="formModel.captcha"
                  placeholder="请输入验证码"
                  :prefix-icon="Lock"
                  size="large"
                  :style="{ width: '308px' }"
                ></el-input>
                <el-button size="large">获取验证码</el-button>
              </el-form-item>
              <el-form-item class="flex">
                <el-checkbox
                  v-if="isLoginPage"
                  v-model="autoLogin"
                  label="自动登录"
                  size="large"
                />
                <el-checkbox v-else v-model="agreementChecked">
                  同意并接受相关<el-link
                    :underline="false"
                    :style="{
                      display: 'inline-block',
                      'font-size': '15px',
                      'line-height': 1,
                      'font-weight': 500
                    }"
                    >协议</el-link
                  >
                </el-checkbox>
                <el-link
                  :underline="false"
                  @click="isLoginPage = !isLoginPage"
                  >{{
                    isLoginPage
                      ? '还没账号?点击前往注册'
                      : '已有账号?点击前往登录'
                  }}</el-link
                >
              </el-form-item>
              <el-form-item>
                <el-button type="primary" class="btn">{{
                  isLoginPage ? '登录' : '注册'
                }}</el-button>
              </el-form-item>
            </el-form>
          </el-tab-pane>
          <el-tab-pane
            :label="isLoginPage ? '平台账号登录' : '平台账号注册'"
            name="byAccount"
          >
            <el-form ref="accountForm">
              <el-form-item v-if="!isLoginPage">
                <el-input
                  v-model="formModel.nickname"
                  placeholder="请输入昵称"
                  :prefix-icon="EditPen"
                  size="large"
                ></el-input>
              </el-form-item>
              <el-form-item>
                <el-input
                  v-model="formModel.account"
                  placeholder="请输入账号"
                  :prefix-icon="User"
                  size="large"
                  :style="{ width: '100%' }"
                ></el-input>
              </el-form-item>
              <el-form-item>
                <el-input
                  v-model="formModel.password"
                  type="password"
                  show-password="true"
                  placeholder="请输入密码"
                  :prefix-icon="Lock"
                  size="large"
                  :style="{ width: '418px' }"
                ></el-input>
              </el-form-item>
              <el-form-item>
                <el-input
                  v-model="formModel.repassword"
                  type="password"
                  show-password="true"
                  placeholder="请再次输入密码"
                  :prefix-icon="Lock"
                  size="large"
                ></el-input>
              </el-form-item>
              <el-form-item v-if="!isLoginPage">
                <el-input
                  v-model="formModel.invitationCode"
                  placeholder="请输入邀请码，没有可不填"
                  :prefix-icon="Paperclip"
                  size="large"
                ></el-input>
              </el-form-item>
              <el-form-item class="flex">
                <el-checkbox
                  v-if="isLoginPage"
                  v-model="autoLogin"
                  label="自动登录"
                  size="large"
                />
                <el-checkbox v-else v-model="agreementChecked">
                  同意并接受相关<el-link
                    :underline="false"
                    :style="{
                      display: 'inline-block',
                      'font-size': '15px',
                      'line-height': 1,
                      'font-weight': 500
                    }"
                    >协议</el-link
                  >
                </el-checkbox>
                <el-link
                  :underline="false"
                  @click="isLoginPage = !isLoginPage"
                  >{{
                    isLoginPage
                      ? '还没账号?点击前往注册'
                      : '已有账号?点击前往登录'
                  }}</el-link
                >
              </el-form-item>
              <el-form-item>
                <el-button type="primary" class="btn">{{
                  isLoginPage ? '登录' : '注册'
                }}</el-button>
              </el-form-item>
            </el-form>
          </el-tab-pane>
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
    padding-top: 46px;
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
          img {
            width: 100%;
            height: 100%;
          }
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
  display: flex;
  flex-direction: column;
  text-align: center;
  .flex {
    ::v-deep .el-form-item__content {
      justify-content: space-between;
    }
  }
  .btn {
    width: 100%;
  }
}

.el-link {
  --el-link-text-color: var(--el-color-primary);
  --el-link-hover-text-color: var(--el-text-color-regular);
}
</style>
