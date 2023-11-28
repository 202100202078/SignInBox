<script setup>
defineProps({
  content: String,
  iconfontClassName: String
})
</script>

<template>
  <el-tooltip
    effect="dark"
    :content="content"
    placement="top"
    :style="{margin: 4px}"
  >
    <span :class="iconfontClassName"></span>
  </el-tooltip>
</template>

<style lang="scss" scoped>
.iconfont {
  cursor: pointer;
  &:hover {
    color: #1677ff;
  }
}
</style>
