<template>
  <div class="my-layout">
    <el-container>
      <el-header>Header</el-header>
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
      height: 56px;
      line-height: 56px;
      background-color: rgba(255, 255, 255, 0.6);
      z-index: 100;
    }
  }
}
</style>
