<template>
  <div class="my-layout">
    <el-container>
      <el-header>
        <div class="el-header-"></div>
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
      font-size: 14px;
      height: 56px;
      color: rgba(0, 0, 0, 0.88);
      line-height: 56px;
      background-color: rgba(255, 255, 255, 0.6);
      z-index: 100;
      transition: background-color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
    .el-main {
      margin-top: 56px;
    }
  }
}
</style>
