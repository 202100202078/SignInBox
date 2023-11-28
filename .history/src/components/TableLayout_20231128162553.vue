<template>
  <el-card class="box-card" shadow="never">
    <template #header>
      <div class="card-header">
        <span>Card name</span>
        <el-button class="button" type="primary">+ 新建</el-button>
      </div>
    </template>
    <slot>我是Table</slot>
    <template #footer>Footer content</template>
  </el-card>
</template>

<style lang="scss" scoped>
.box-card {
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
