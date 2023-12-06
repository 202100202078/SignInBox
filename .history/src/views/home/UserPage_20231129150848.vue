<template>
  <div class="user-page">
    <el-card shadow="never">
      <el-card shadow="never">
        <template #header>
          <div class="card-header">
            <span><strong>个人信息设置</strong></span>
            <el-button class="button">Operation button</el-button>
          </div>
        </template>
        <div v-for="o in 4" :key="o" class="text item">
          {{ 'List item ' + o }}
        </div>
      </el-card>
    </el-card>
  </div>
</template>

<style lang="scss" scoped>
.user-page {
  width: 1240px;
}
</style>
