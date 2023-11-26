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
      >
        <template #append>
          <el-button
            type="primary"
            :icon="Search"
            dark="true"
            class="el-button–mini"
            >Search</el-button
          >
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
    text-align: center;
    .el-input {
      width: 50%;
      .el-button–mini {
        color: #fff;
        background-color: #fc813b;
        border-color: #fc813b;
      }
      .el-button–mini:hover {
        background-color: #ef9e6f;
        border-color: #ef9e6f;
      }
      .el-button–mini:focus {
        background-color: #ef9e6f;
        border-color: #ef9e6f;
      }
    }
  }
}
</style>
