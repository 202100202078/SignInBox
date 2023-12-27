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

const tableData = [
  {
    roleId: 1,
    rname: 'zs',
    displayOrder: '15888888888',
    authority: 'admin',
    state: false,
    createDate: '2023-04-23 16:11:38'
  },
  {
    roleId: 1,
    rname: 'zs',
    displayOrder: '15888888888',
    authority: 'admin',
    state: false,
    createDate: '2023-04-23 16:11:38'
  },
  {
    roleId: 1,
    rname: 'zs',
    displayOrder: '15888888888',
    authority: 'admin',
    state: false,
    createDate: '2023-04-23 16:11:38'
  },
  {
    roleId: 1,
    rname: 'zs',
    displayOrder: '15888888888',
    authority: 'admin',
    state: false,
    createDate: '2023-04-23 16:11:38'
  },
  {
    roleId: 1,
    rname: 'zs',
    displayOrder: '15888888888',
    authority: 'admin',
    state: false,
    createDate: '2023-04-23 16:11:38'
  },
  {
    roleId: 1,
    rname: 'zs',
    displayOrder: '15888888888',
    authority: 'admin',
    state: false,
    createDate: '2023-04-23 16:11:38'
  },
  {
    roleId: 1,
    rname: 'zs',
    displayOrder: '15888888888',
    authority: 'admin',
    state: false,
    createDate: '2023-04-23 16:11:38'
  }
]

// const test = () => {
//   console.log(datePicker.value[1])
//   axios
//     .get('http://10.161.119.50:9604/api/service/list', {
//       params: {
//         endTime: datePicker.value[1]
//       }
//     })
//     .then((res) => {
//       console.log(res)
//     })
// }

const multipleTableRef = ref()
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
    <div class="menu-management-page-btns">
      <el-button plain type="primary">添加</el-button>
    </div>
    <el-table
      :ref="multipleTableRef"
      :data="tableData"
      style="width: 100%"
      :header-cell-style="{
        background: '#F5F7FA',
        color: '#909399'
      }"
    >
    </el-table>
  </div>
</template>

<style lang="scss" scoped>
.menu-management-page {
  .el-form-item {
    width: 30%;
    .el-select {
      width: 100%;
    }
  }
  .menu-management-page-btns {
    margin-bottom: 16px;
  }
}
</style>
