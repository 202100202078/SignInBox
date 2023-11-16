<script setup>
import { ElMessage } from 'element-plus'
ElMessage.success('hhh')
</script>

<template>
  <div>
    <button @click="ElMessage.success('hhh')">按钮</button>
    <router-view></router-view>
  </div>
</template>

<style scoped></style>
