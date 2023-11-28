<script setup>
defineProps({
  content: String,
  iconfontClassName: String
})
</script>

<template>
  <el-tooltip effect="dark" :content="content" placement="top">
    <slot #main></slot>
    <span :class="iconfontClassName"></span>
  </el-tooltip>
</template>

<style lang="scss" scoped>
.iconfont {
  margin: 4px;
  cursor: pointer;
  &:hover {
    color: #1677ff;
  }
}
</style>
