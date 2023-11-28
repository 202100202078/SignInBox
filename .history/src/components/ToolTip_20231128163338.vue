<script setup>
defineProps({
  content: String,
  iconfontClassName: String
})
</script>

<template>
  <el-tooltip class="box-item" effect="dark" :content="content" placement="top">
    <span :class="iconfontClassName"></span>1
  </el-tooltip>
</template>

<style lang="scss" scoped>
.box-item {
  .iconfont {
    cursor: pointer;
    &:hover {
      color: #1677ff;
    }
  }
}
</style>
