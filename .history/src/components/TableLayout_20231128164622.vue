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
          <el-button class="button" type="primary" v-if="title === '我的订单'"
            >+ 新建</el-button
          >
          <ToolTip
            content="刷新"
            iconfontClassName="iconfont icon-shuaxin"
          ></ToolTip>
          <ToolTip
            content="刷新"
            iconfontClassName="iconfont icon-shuaxin"
          ></ToolTip>
          <ToolTip
            content="刷新"
            iconfontClassName="iconfont icon-shuaxin"
          ></ToolTip>
        </div>
      </div>
    </template>
    <slot>我是Table</slot>
    <template #footer>Footer content</template>
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
        font-size: 18px;
      }
    }
  }
}
</style>
