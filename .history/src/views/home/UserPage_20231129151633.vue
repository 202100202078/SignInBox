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
        <div class="block">
          <el-avatar size="large" :src="@/assets/avg/logo.svg" />
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
    }
  }
}
</style>
