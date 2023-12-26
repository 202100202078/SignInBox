<script setup>
defineProps({
  content: String,
  iconfontClassName: String,
  istyle: Object
})
</script>

<template>
  <el-tooltip effect="dark" :content="content" placement="top">
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
