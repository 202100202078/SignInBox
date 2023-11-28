<template>
  <el-card class="box-card" shadow="never">
    <template #header>
      <div class="card-header">
        <span>Card name</span>
        <el-button class="button" type="primary">Operation button</el-button>
      </div>
    </template>
    <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
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
