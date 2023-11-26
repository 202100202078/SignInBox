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
              <span>感叹号</span>
            </el-tooltip>
          </div>
        </template>
        <div v-for="o in 4" :key="o" class="text item">
          {{ 'List item ' + o }}
        </div>
      </el-card>
      <div v-for="o in 4" :key="o" class="text item">
        {{ 'List item ' + o }}
      </div>
    </el-card>
  </div>
</template>

<style lang="scss" scoped>
.recharge-page {
  width: 1240px;
}
</style>
