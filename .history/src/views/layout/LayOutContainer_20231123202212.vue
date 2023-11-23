<script setup></script>

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
          <ul>
            <li>
              <span><span></span><span></span></span>
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
        padding: 6px;
        flex: 1;
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
