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
      <el-card shadow="hover">
        <div class="el-card-content">
          <div class="photo">
            <img src="@/assets/avg/logo.svg" alt="" />
            <span class="comments">767</span>
          </div>
          <div class="title">随机土味情话</div>
          <div class="detail">获取土味情话</div>
        </div>
      </el-card>
      <el-card shadow="hover">
        <div class="el-card-content">
          <div class="photo">1</div>
          <div class="title">2</div>
          <div class="detail">3</div>
        </div>
      </el-card>
      <el-card shadow="hover">
        <div class="el-card-content">
          <div class="photo">1</div>
          <div class="title">2</div>
          <div class="detail">3</div>
        </div>
      </el-card>
      <el-card shadow="hover">
        <div class="el-card-content">
          <div class="photo">1</div>
          <div class="title">2</div>
          <div class="detail">3</div>
        </div>
      </el-card>
      <el-card shadow="hover">
        <div class="el-card-content">
          <div class="photo">1</div>
          <div class="title">2</div>
          <div class="detail">3</div>
        </div>
      </el-card>
      <el-card shadow="hover">
        <div class="el-card-content">
          <div class="photo">1</div>
          <div class="title">2</div>
          <div class="detail">3</div>
        </div>
      </el-card>
    </div>
    <div class="pageSetter">
      <el-pagination background layout="prev, pager, next" :total="20" />
    </div>
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
    width: 1260px;
    height: 582px;
    .el-card {
      margin-right: 20px;
      width: 232px;
      height: 270px;
      .el-card-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        .photo {
          position: relative;
          width: 90px;
          height: 90px;
          .img {
            width: 100%;
            height: 100%;
          }
          .comments {
            position: absolute;
            right: -32px;
            top: 0;
            padding: 4px;
            background-color: rgb(235, 77, 75);
            font-size: 12px;
            color: #fff;
            border-radius: 30%;
          }
        }
      }
    }
  }
  .pageSetter {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
