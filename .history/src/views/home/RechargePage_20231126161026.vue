<template>
  <div class="recharge-page">
    <el-card class="box-card" shadow="never">
      <el-card class="box-card" shadow="never">
        <template #header>
          <div class="card-header">
            <span><strong>我的钱包</strong></span>
            <el-tooltip
              class="box-item"
              effect="dark"
              content="用于平台接口调用"
              placement="top"
            >
              <span>字体图标感叹号</span>
            </el-tooltip>
          </div>
        </template>
        <div class="text item">
          <span class="desc">
            <strong>金币：</strong>
          </span>
          <span class="money">888</span>
        </div>
      </el-card>
      <el-card class="box-card" shadow="never">
        <template #header>
          <div class="card-header">
            <span><strong>积分商城 💰️</strong></span>
          </div>
        </template>
        <div class="text item">111</div>
      </el-card>
    </el-card>
  </div>
</template>

<style lang="scss" scoped>
.recharge-page {
  width: 1240px;
}
</style>
