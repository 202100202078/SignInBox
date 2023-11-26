<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

//当前处于menu哪个tab下
const cur = ref(0)

const handleManageCommand = (command) => {
  router.push(command)
}

const handleAvatarCommand = (command) => {
  //如果是退出登录需要清除本地用户信息
  console.log('清除本地用户信息')
  router.push(command)
}
</script>

<template>
  <div class="my-layout">
    <el-container>
      <el-header>
        <div class="el-header-left">
          <a @click="$router.replace('/')">
            <img src="@/assets/avg/logo.svg" alt="logo" class="logo" />
            <h1>api-box 接口开放平台</h1>
          </a>
        </div>
        <div class="el-header-main">
          <ul class="el-header-main-menu">
            <li
              @click="$router.push('/home/welcome'), (cur = 0)"
              :class="{ active: cur === 0 }"
            >
              <div class="el-header-main-menu-item">
                <span class="iconfont icon-xiaolian"> </span>
                <span>欢迎</span>
              </div>
            </li>
            <li
              @click="$router.push('/home/interface'), (cur = 1)"
              :class="{ active: cur === 1 }"
            >
              <div class="el-header-main-menu-item">
                <span class="iconfont icon-jiekou"> </span>
                <span>接口大全</span>
              </div>
            </li>
            <li
              @click="$router.push('/home/recharge'), (cur = 2)"
              :class="{ active: cur === 2 }"
            >
              <div class="el-header-main-menu-item">
                <span class="iconfont icon-chongzhi"> </span>
                <span>充值中心</span>
              </div>
            </li>
            <li
              @click="$router.push('/home/order'), (cur = 3)"
              :class="{ active: cur === 3 }"
            >
              <div class="el-header-main-menu-item">
                <span class="iconfont icon-wodedingdan"> </span>
                <span>我的订单</span>
              </div>
            </li>
            <li class="el-header-main-menu-manageitem">
              <el-dropdown @command="handleManageCommand">
                <span class="el-dropdown-link">
                  <div class="el-header-main-menu-item">
                    <span class="iconfont icon-admin-manage"> </span>
                    <span>管理页</span>
                  </div>
                </span>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item command="/admin/interface"
                      >接口管理</el-dropdown-item
                    >
                    <el-dropdown-item command="/admin/recharge"
                      >商品管理</el-dropdown-item
                    >
                    <el-dropdown-item command="/admin/user"
                      >用户管理</el-dropdown-item
                    >
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            </li>
          </ul>
        </div>
        <div class="el-header-right">
          <div class="el-header-right-actions">
            <span>📘 开发者文档</span>
          </div>
          <div class="el-header-right-avatar">
            <el-dropdown @command="handleAvatarCommand">
              <span class="el-dropdown-link">
                <span>头像</span>
                <span>用户昵称</span>
              </span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item command="/home/user"
                    >个人中心</el-dropdown-item
                  >
                  <el-dropdown-item command="/login">退出登录</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
        </div>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer>
        <p>@后端：庄润德、王志建</p>
        <p>@前端：张炜烽</p>
      </el-footer>
    </el-container>
  </div>
</template>

<style lang="scss" scoped>
.my-layout {
  height: 100vh;
  background: linear-gradient(#ffffff, #f5f5f5 28%);
  .el-container {
    height: 100%;
    align-items: center;
    .el-header {
      position: fixed;
      left: 0;
      top: 0;
      display: flex;
      width: 100%;
      font-size: 14px;
      height: 56px;
      color: #000000e0;
      line-height: 56px;
      background-color: rgba(255, 255, 255, 0.6);
      z-index: 100;
      transition: background-color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      border-bottom: 1px solid rgba(5, 5, 5, 0.06);
      .el-header-left {
        // width: 222px;
        > a {
          display: flex;
          justify-content: space-between;
          align-items: center;
          min-height: 22px;
          font-size: 16px;
          cursor: pointer;
          .logo {
            margin-right: 4px;
            height: 22px;
            width: auto;
          }
        }
      }
      .el-header-main {
        display: flex;
        align-items: center;
        padding: 6px;
        flex: 1;
        .el-header-main-menu {
          width: 100%;
          display: flex;
          align-items: center;
          li {
            display: flex;
            text-align: center;
            padding: 0 16px;
            width: 110px;
            height: 40px;
            color: rgba(0, 0, 0, 0.7);
            border-radius: 6px;
            &:hover {
              background-color: rgba(0, 0, 0, 0.1);
              color: rgba(0, 0, 0, 1);
              transition: color 0.3s;
              cursor: pointer;
            }
            .el-header-main-menu-item {
              width: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
              .iconfont {
                margin-right: 4px;
                font-size: 18px;
                // display: flex;
                // align-items: center;
                // width: 16px;
                // height: 16px;
                // background: url('@/assets/avg/笑脸.svg') no-repeat center/cover;
                // img {
                //   width: 100%;
                //   height: 100%;
                // }
              }
            }
          }
          .el-header-main-menu-manageitem {
            :deep(:focus-visible) {
              outline: none;
            }
            display: flex;
            justify-content: center;
            align-items: center;
            .el-header-main-menu-item {
              width: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
              .icon {
                display: flex;
                align-items: center;
                width: 16px;
                height: 16px;
                // background: url('@/assets/avg/笑脸.svg') no-repeat center/cover;
                img {
                  width: 100%;
                  height: 100%;
                }
              }
            }
          }
          .active {
            color: rgba(0, 0, 0, 1);
          }
        }
      }
      .el-header-right {
        width: 232px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        .el-header-right-actions {
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 16px;
          color: rgba(0, 0, 0, 0.7);
          border-radius: 6px;
          cursor: pointer;
          &:hover {
            color: rgba(0, 0, 0, 1);
            transition: color 0.3s;
          }
        }
        .el-header-right-avatar {
          margin-left: 6px;
          display: flex;
          align-items: center;
          font-size: 16px;
          border-radius: 6px;
          height: 56px;
          line-height: 56px;
          &:hover {
            background-color: rgba(0, 0, 0, 0.1);
            color: rgba(0, 0, 0, 1);
            transition: color 0.3s;
          }
          .el-dropdown {
            :deep(:focus-visible) {
              outline: none;
            }
            .el-dropdown-link {
              cursor: pointer;
              color: rgba(0, 0, 0, 0.7);
              font-size: 16px;
              display: flex;
              align-items: center;
            }
          }
        }
      }
    }
    .el-main {
      margin-top: 56px;
    }
  }
}
</style>
