<script setup>
import { ref } from 'vue'
//当前处于menu哪个tab下
const cur = ref(0)
</script>

<template>
  <div class="my-layout">
    <el-container>
      <el-header>
        <div class="el-header-left">
          <a @click="$router.replace('/')">
            <img
              height="22"
              weight="auto"
              src="@/assets/avg/logo.svg"
              alt="logo"
            />
            <h1>API 接口开放平台</h1>
          </a>
        </div>
        <div class="el-header-main">
          <ul class="el-header-main-menu">
            <li
              @click="$router.push('/home/welcome'), (cur = 0)"
              :class="{ active: cur === 0 }"
            >
              <div class="el-header-main-menu-item">
                <span class="icon">
                  <img src="@/assets/avg/笑脸.svg" alt="" />
                </span>
                <span>欢迎</span>
              </div>
            </li>
            <li
              @click="$router.push('/home/interface'), (cur = 1)"
              :class="{ active: cur === 1 }"
            >
              <div class="el-header-main-menu-item">
                <span class="icon">
                  <img src="@/assets/avg/数据接口.svg" alt="" />
                </span>
                <span>接口大全</span>
              </div>
            </li>
            <li
              @click="$router.push('/home/recharge'), (cur = 2)"
              :class="{ active: cur === 2 }"
            >
              <div class="el-header-main-menu-item">
                <span class="icon"></span><span>充值中心</span>
              </div>
            </li>
            <li
              @click="$router.push('/home/order'), (cur = 3)"
              :class="{ active: cur === 3 }"
            >
              <div class="el-header-main-menu-item">
                <span class="icon"></span><span>我的订单</span>
              </div>
            </li>
            <li @click="$router.push('/')">
              <div class="el-header-main-menu-item">
                <span class="icon"></span><span>管理页</span>
              </div>
            </li>
          </ul>
        </div>
        <div class="el-header-right">right</div>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<style lang="scss" scoped>
.my-layout {
  height: 100vh;
  .el-container {
    height: 100%;
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
      .el-header-left {
        width: 222px;
        > a {
          display: flex;
          justify-content: space-between;
          align-items: center;
          min-height: 22px;
          font-size: 16px;
          cursor: pointer;
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
      }
    }
    .el-main {
      margin-top: 56px;
    }
  }
}
</style>
