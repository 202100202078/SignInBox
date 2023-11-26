<script setup>
defineProps({
  label1: String,
  label2: String
})
</script>

<template>
  <div class="filter-card">
    <el-card shadow="never">
      <el-input :label="label1"></el-input>
      <el-input :label="label2"></el-input>
      <slot></slot>
    </el-card>
  </div>
</template>

<style lang="scss" scoped>
.filter-card {
  width: 1240px;
  .el-input {
    width: 400px;
  }
}
</style>
