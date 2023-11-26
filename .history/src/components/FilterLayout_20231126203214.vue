<script setup>
defineProps({
  label1: String,
  label2: String
})
</script>

<template>
  <div class="filter-card">
    <el-card shadow="never">
      <div class="filterForm">
        <el-form :inline="true">
          <el-form-item :label="label1">
            <el-input></el-input>
          </el-form-item>
          <el-form-item :label="label2">
            <el-input></el-input>
          </el-form-item>
          <slot></slot>
        </el-form>
      </div>
    </el-card>
  </div>
</template>

<style lang="scss" scoped>
.filter-card {
  width: 1240px;
  .filterForm {
    .el-input {
      width: 298px;
    }
  }
}
</style>
