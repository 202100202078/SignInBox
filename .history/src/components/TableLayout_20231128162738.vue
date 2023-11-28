<script setup>
defineProps({
  title: String
})
</script>

<template>
  <el-card class="box-card" shadow="never">
    <template #header>
      <div class="card-header">
        <span>{{ title }}</span>
        <el-button class="button" type="primary" v-if="!title === '我的订单'"
          >+ 新建</el-button
        >
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
  }
}
</style>
