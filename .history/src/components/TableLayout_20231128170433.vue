<script setup>
defineProps({
  title: String
})
</script>

<template>
  <el-card class="box-card" shadow="never">
    <template #header>
      <div class="card-header">
        <span class="left">{{ title }}</span>
        <div class="right">
          <el-button class="button" type="primary" v-if="!title === '我的订单'"
            >+ 新建</el-button
          >
          <ToolTip
            content="刷新"
            iconfontClassName="iconfont icon-shuaxin"
          ></ToolTip>
          <ToolTip
            content="密度"
            iconfontClassName="iconfont icon-midutu"
          ></ToolTip>
          <ToolTip
            content="列设置"
            iconfontClassName="iconfont icon-shezhi"
          ></ToolTip>
        </div>
      </div>
    </template>
    <slot>我是Table</slot>
    <div class="card-footer">
      <el-pagination
        v-model:current-page="currentPage1"
        :page-size="100"
        :small="small"
        :disabled="disabled"
        :background="background"
        layout="total, prev, pager, next"
        :total="1000"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </el-card>
</template>

<style lang="scss" scoped>
.box-card {
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .right {
      display: flex;
      align-items: center;
      :deep .iconfont {
        margin-left: 8px;
        font-size: 18px;
      }
    }
  }
  .card-footer {
    margin-top: 10px;
  }
}
</style>
