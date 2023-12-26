<script setup>
import { ref } from 'vue'

//筛选表单的显示隐藏
const isShow = ref(false)
// const params = ref({})
// 一个响应式对象存储整个筛选表单的数据(默认显示的两个item需要父子双向绑定)

const datePicker = ref()

const handleReset = () => {
  console.log('reset')
}
const handleQuery = () => {
  console.log('query')
}
const handleTrigger = () => {
  // console.log('trigger')
  isShow.value = !isShow.value
}
</script>

<template>
  <div class="user-managemant-page">
    <FilterLayout
      label1="用户名称"
      label2="手机号码"
      :isShow="isShow"
      @reset="handleReset"
      @query="handleQuery"
      @trigger="handleTrigger"
    >
      <el-form-item label="状态" v-show="isShow">
        <el-select v-model="status" placeholder="请选择">
          <el-option
            v-for="item in statusOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="创建时间" v-show="isShow">
        <el-date-picker
          v-model="datePicker"
          type="daterange"
          range-separator="To"
          start-placeholder="Start date"
          end-placeholder="End date"
          :size="default"
        />
      </el-form-item>
    </FilterLayout>
  </div>
</template>

<style lang="scss" scoped>
.user-managemant-page {
  .el-form-item {
    width: 30%;
    .el-select {
      width: 100%;
    }
  }
}
</style>
