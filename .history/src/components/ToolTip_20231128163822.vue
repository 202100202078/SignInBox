<script setup>
defineProps({
  content: String,
  iconfontClassName: String
})
</script>

<template>
  <el-tooltipeffect="dark" :content="content" placement="top">
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
