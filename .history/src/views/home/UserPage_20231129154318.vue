<script setup></script>

<template>
  <div class="user-page">
    <el-card shadow="never" class="boxCard">
      <el-card shadow="never" class="userInfoSetting">
        <template #header>
          <div class="card-header">
            <span><strong>个人信息设置</strong></span>
            <div class="right">
              <el-button class="button">绑定邮箱</el-button>
              <el-button class="button">提交修改</el-button>
            </div>
          </div>
        </template>
        <div class="content">
          <div class="avatar">
            <div class="container">
              <div class="item"></div>
              <span class="actions"></span>
            </div>
            <el-dialog v-model="dialogVisible">
              <img w-full :src="dialogImageUrl" />
            </el-dialog>
          </div>
        </div>
      </el-card>
    </el-card>
  </div>
</template>

<style lang="scss" scoped>
.user-page {
  width: 1240px;
  .boxCard {
    .userInfoSetting {
      .card-header {
        display: flex;
        justify-content: space-between;
      }
      .content {
        .avatar {
          .container {
            margin: 0 8px 8px 0;
            width: 102px;
            height: 102px;
            border: 1px solid #d9d9d9;
            border-radius: 50%;
            .item {

            }
            .actions {
              
            }
          }
        }
      }
    }
  }
}
</style>
