<script setup>
// import { router } from 'vue-router'
import { login } from '@/api/login/login.js'
import { ref } from 'vue'
import {
  Message,
  Lock,
  User,
  EditPen,
  Paperclip
} from '@element-plus/icons-vue'
const emailForm = ref()
const accountForm = ref()

const formModel = ref({
  email: '',
  account: '',
  invitationCode: '',
  captcha: '',
  password: '',
  repassword: '',
  nickname: '',
  identityType: ''
})

const rules = {
  email: [
    { required: true, message: '请输入您的邮箱', trigger: 'blur' },
    {
      pattern: /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/,
      message: '您的邮箱格式有误',
      trigger: 'blur'
    }
  ],
  account: [
    { required: true, message: '请输入您的账号', trigger: 'blur' },
    { min: 5, max: 16, message: '账号为5-16位字符', trigger: 'blur' }
  ],
  invitationCode: [
    {
      pattern: /^\S{6,12}$/,
      message: '邀请码为6-12位的非空字符',
      trigger: 'blur'
    }
  ],
  captcha: [
    { required: true, message: '请输入验证码', trigger: 'blur' },
    { pattern: /^[0-9]{6}$/, message: '验证码为6位数字', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    {
      pattern: /^\S{6,15}$/,
      message: '密码必须是6-15位的非空字符',
      trigger: 'blur'
    }
  ],
  repassword: [
    { required: true, message: '请再次输入密码', trigger: 'blur' },
    {
      pattern: /^\S{6,15}$/,
      message: '密码必须是6-15的非空字符',
      trigger: 'blur'
    },
    {
      validator: (rule, value, callback) => {
        if (value !== formModel.value.password) {
          callback(new Error('两次输入密码不一致!'))
        } else {
          callback()
        }
      },
      trigger: 'blur'
    }
  ],
  nickname: [
    { required: true, message: '请输入你的昵称', trigger: 'blur' },
    {
      pattern: /^\S{6,18}$/,
      message: '昵称为6-12位的非空字符',
      trigger: 'blur'
    }
  ]
}

const activeName = ref('byEmail')

const isLoginPage = ref(true)

const autoLogin = ref(true)
const agreementChecked = ref(true)

const onSubmit = async (type) => {
  //先表单预校验
  await (type === 1 ? emailForm.value.validate() : accountForm.value.validate())
  if (isLoginPage.value) {
    console.log('登录')
    const res = await login(formModel)
  } else {
    console.log('注册')
  }
}

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
          <span class="title">API-BOX 接口开放平台</span>
        </div>
        <div class="describe">
          API-BOX 接口开放平台致力于提供稳定、安全、高效的接口调用服务
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
            <el-form ref="emailForm" :model="formModel" :rules="rules">
              <el-form-item v-if="!isLoginPage" prop="nickname">
                <el-input
                  v-model="formModel.nickname"
                  placeholder="请输入昵称"
                  :prefix-icon="EditPen"
                  size="large"
                ></el-input>
              </el-form-item>
              <el-form-item prop="email">
                <el-input
                  v-model="formModel.email"
                  placeholder="请输入邮箱账号"
                  :prefix-icon="Message"
                  size="large"
                ></el-input>
              </el-form-item>
              <el-form-item v-if="!isLoginPage" prop="invitationCode">
                <el-input
                  v-model="formModel.invitationCode"
                  placeholder="请输入邀请码，没有可不填"
                  :prefix-icon="Paperclip"
                  size="large"
                ></el-input>
              </el-form-item>
              <el-form-item prop="captcha">
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
                    href="https://gitee.com/ZZZWWWFFF/interface-platform-agreement"
                    target="_blank"
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
                <el-button type="primary" class="btn" @click="onSubmit(1)">{{
                  isLoginPage ? '登录' : '注册'
                }}</el-button>
              </el-form-item>
            </el-form>
          </el-tab-pane>
          <el-tab-pane
            :label="isLoginPage ? '平台账号登录' : '平台账号注册'"
            name="byAccount"
          >
            <el-form ref="accountForm" :model="formModel" :rules="rules">
              <el-form-item v-if="!isLoginPage" prop="nickname">
                <el-input
                  v-model="formModel.nickname"
                  placeholder="请输入昵称"
                  :prefix-icon="EditPen"
                  size="large"
                ></el-input>
              </el-form-item>
              <el-form-item prop="account">
                <el-input
                  v-model="formModel.account"
                  placeholder="请输入账号"
                  :prefix-icon="User"
                  size="large"
                  :style="{ width: '100%' }"
                ></el-input>
              </el-form-item>
              <el-form-item prop="password">
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
              <el-form-item v-if="!isLoginPage" prop="repassword">
                <el-input
                  v-model="formModel.repassword"
                  type="password"
                  show-password="true"
                  placeholder="请再次输入密码"
                  :prefix-icon="Lock"
                  size="large"
                ></el-input>
              </el-form-item>
              <el-form-item v-if="!isLoginPage" prop="invitationCode">
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
                    href="https://gitee.com/ZZZWWWFFF/interface-platform-agreement"
                    target="_blank"
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
                <el-button type="primary" class="btn" @click="onSubmit(2)">{{
                  isLoginPage ? '登录' : '注册'
                }}</el-button>
              </el-form-item>
            </el-form>
          </el-tab-pane>
          <div class="other">其他登录方式：1、2、3</div>
        </el-tabs>
      </el-main>
      <el-footer>
        <PageFooter></PageFooter>
      </el-footer>
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
