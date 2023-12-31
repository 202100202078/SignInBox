<script setup>
import { ref } from 'vue'

//筛选表单的显示隐藏
const isShow = ref(true)
// const params = ref({})
// 一个响应式对象存储整个筛选表单的数据(默认显示的两个item需要父子双向绑定)

// const datePicker = ref('')

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

const filterForm = {
  moduleName: '',
  status: ''
}

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
    menuName: '首页',
    order: 1,
    authority: 'system:user:list',
    comPath: 'system/user/index',
    state: '正常',
    createDate: '2023-04-23 16:11:49'
  },
  {
    id: 2,
    menuName: '首页',
    order: 1,
    authority: 'system:user:list',
    comPath: 'system/user/index',
    state: '正常',
    createDate: '2023-04-23 16:11:49'
  },
  {
    id: 3,
    menuName: '首页',
    order: 1,
    authority: '',
    comPath: '',
    state: '',
    createDate: '2023-04-23 16:11:49',
    children: [
      {
        id: 31,
        menuName: '首页',
        order: 1,
        authority: 'system:user:list',
        comPath: 'system/user/index',
        state: '正常',
        createDate: '2023-04-23 16:11:49'
      },
      {
        id: 32,
        menuName: '首页',
        order: 1,
        authority: 'system:user:list',
        comPath: 'system/user/index',
        state: '正常',
        createDate: '2023-04-23 16:11:49'
      }
    ]
  },
  {
    id: 4,
    menuName: '首页',
    order: 1,
    authority: 'system:user:list',
    comPath: 'system/user/index',
    state: '正常',
    createDate: '2023-04-23 16:11:49'
  }
]

const multipleTableRef = ref()
</script>

<template>
  <div class="menu-management-page">
    <FilterLayout
      label1="菜单名称"
      label2="状态"
      :defaultShow1="false"
      :defaultShow2="false"
      :isShow="isShow"
      :showCollapse="false"
      @reset="handleReset"
      @query="handleQuery"
      @trigger="handleTrigger"
      :filterForm="filterForm"
    >
      <el-form-item label="菜单名称">
        <el-input
          v-model="filterForm.moduleName"
          placeholder="请输入"
        ></el-input>
      </el-form-item>
      <el-form-item label="状态">
        <el-select v-model="filterForm.status" placeholder="请选择">
          <el-option
            v-for="item in statusOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
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
      <el-table-column
        width="156"
        align="center"
        prop="menuName"
        label="菜单名称"
      />
      <el-table-column width="156" align="center" prop="order" label="排序" />
      <el-table-column
        width="156"
        align="center"
        prop="authority"
        label="权限标识"
      />
      <el-table-column
        width="156"
        align="center"
        prop="comPath"
        label="组件路径"
      />
      <el-table-column width="156" align="center" prop="state" label="状态">
        <template #default="scope"> {{ scope.row.state }} </template>
      </el-table-column>
      <el-table-column
        width="156"
        align="center"
        prop="createDate"
        label="创建时间"
        show-overflow-tooltip
      />
      <el-table-column width="300" align="center" label="操作">
        <template #default>
          <el-button size="small" plain type="primary">添加</el-button>
          <el-button size="small" plain type="success">修改</el-button>
          <el-button size="small" plain type="danger">删除</el-button>
        </template>
      </el-table-column>
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
