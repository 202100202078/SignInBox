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
          <el-button type="primary" :icon="Search" class="searchBtn"
            >Search</el-button
          >
        </template>
      </el-input>
    </el-card>
    <div class="main">
      <el-card shadow="hover"> Hover </el-card>
      <el-card shadow="hover"> Hover </el-card>
      <el-card shadow="hover"> Hover </el-card>
      <el-card shadow="hover"> Hover </el-card>
      <el-card shadow="hover"> Hover </el-card>
    </div>
    <el-pagination background layout="prev, pager, next" :total="1000" />
  </div>
</template>

<style lang="scss" scoped>
.my-container {
  .header {
    padding: 24px;
    width: 1240px;
    height: 142px;
    text-align: center;
    background-color: #fff;
    .el-input {
      width: 50%;
      .searchBtn {
        display: flex;
        align-items: center;
        // background-color: blue;
      }
    }
  }
  .main {
    margin-top: 32px;
    display: flex;
    flex-wrap: wrap;
    height: 582px;
    .el-card {
      margin-left: 16px;
      width: 232px;
      height: 270px;
    }
  }
}
</style>
