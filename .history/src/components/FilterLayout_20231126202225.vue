<script setup>
defineProps({
  label1: String,
  label2: String
})
</script>

<template>
  <div class="filter-card">
    <el-card shadow="never">
      <el-input label=""></el-input>
      <slot></slot>
    </el-card>
  </div>
</template>

<style lang="scss" scoped>
.filter-card {
  width: 1240px;
}
</style>
