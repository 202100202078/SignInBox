<script setup>
import { ref } from 'vue'

//筛选表单的显示隐藏
const isShow = ref(true)
// const params = ref({})
// 一个响应式对象存储整个筛选表单的数据(默认显示的两个item需要父子双向绑定)

const datePicker = ref('')

const status = ref('')
const statusOptions = [
  {
    value: 'Option1',
    label: '正常'
  },
  {
    value: 'Option2',
    label: '停用'
  }
]

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
  <div class="menu-management-page">
    <FilterLayout
      label1="菜单名称"
      label2="状态"
      :isShow="isShow"
      :showCollapse="false"
      @reset="handleReset"
      @query="handleQuery"
      @trigger="handleTrigger"
    >
    </FilterLayout>
  </div>
</template>
