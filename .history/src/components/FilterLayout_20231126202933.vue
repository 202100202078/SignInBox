<script setup>
defineProps({
  label1: String,
  label2: String
})
</script>

<template>
  <div class="filter-card">
    <el-card shadow="never">
      <el-form>
        <el-form-item label="label1">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="label2">
          <el-input></el-input>
        </el-form-item>
        <slot></slot>
      </el-form>
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
