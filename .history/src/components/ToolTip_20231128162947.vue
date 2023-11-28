<script setup>
defineProps({
  content: String
  iconfontClassName:String
})
</script>

<template>
  <el-tooltip
    class="box-item"
    effect="dark"
    content="用于平台接口调用"
    placement="top"
  >
    <span class="iconfont icon-gantanhao-quan"></span>
  </el-tooltip>
</template>
