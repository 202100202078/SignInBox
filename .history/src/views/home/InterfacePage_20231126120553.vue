<script setup>
import { ref } from 'vue'
//搜索框
const searchInput = ref('')
</script>

<template>
  <div class="my-container">
    <el-card shadow="hover" class="header">
      <el-input
        v-model="input3"
        placeholder="Please input"
        class="input-with-select"
      >
        <template #prepend>
          <el-select v-model="select" placeholder="Select" style="width: 115px">
            <el-option label="Restaurant" value="1" />
            <el-option label="Order No." value="2" />
            <el-option label="Tel" value="3" />
          </el-select>
        </template>
        <template #append>
          <el-button :icon="Search" />
        </template>
      </el-input>
    </el-card>
    <div class="main">main</div>
  </div>
</template>

<style lang="scss" scoped>
.my-container {
  .header {
    padding: 24px;
    width: 1240px;
    height: 142px;
  }
}
</style>
