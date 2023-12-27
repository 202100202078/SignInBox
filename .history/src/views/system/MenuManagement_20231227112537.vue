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
    id: 1,
    date: '2016-05-02',
    name: 'wangxiaohu',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    id: 2,
    date: '2016-05-04',
    name: 'wangxiaohu',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    id: 3,
    date: '2016-05-01',
    name: 'wangxiaohu',
    address: 'No. 189, Grove St, Los Angeles',
    children: [
      {
        id: 31,
        date: '2016-05-01',
        name: 'wangxiaohu',
        address: 'No. 189, Grove St, Los Angeles'
      },
      {
        id: 32,
        date: '2016-05-01',
        name: 'wangxiaohu',
        address: 'No. 189, Grove St, Los Angeles'
      }
    ]
  },
  {
    id: 4,
    date: '2016-05-03',
    name: 'wangxiaohu',
    address: 'No. 189, Grove St, Los Angeles'
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
      row-key="id"
      :header-cell-style="{
        background: '#F5F7FA',
        color: '#909399'
      }"
    >
      <el-table-column prop="menuName" label="菜单名称" />
      <el-table-column prop="order" label="排序" />
      <el-table-column prop="authority" label="权限标识" />
      <el-table-column prop="comPath" label="权限标识" />
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
