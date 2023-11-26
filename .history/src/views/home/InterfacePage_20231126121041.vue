<script setup>
import { Search } from '@element-plus/icons-vue'
import { ref } from 'vue'
//搜索框
const searchInput = ref('')
</script>

<template>
  <div class="my-container">
    <el-card shadow="hover" class="header">
      <el-input
        v-model="searchInput"
        placeholder="没有找到心仪的接口？快搜索一下吧"
        size="large"
        show-word-limit
        maxlength="50"
        :style="{ width: '50%' }"
      >
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
