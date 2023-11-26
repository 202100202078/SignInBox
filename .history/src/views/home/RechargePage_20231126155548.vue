<template>
  <div class="recharge-page">
    <el-card class="box-card">
      <div v-for="o in 4" :key="o" class="text item">
        {{ 'List item ' + o }}
      </div>
    </el-card>
  </div>
</template>

<style lang="scss" scoped>
.recharge-page {
  
}
</style>