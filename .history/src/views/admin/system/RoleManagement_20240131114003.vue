<script setup>
import { ref } from 'vue'

// 一个响应式对象存储整个筛选表单的数据
const filterForm = ref({
  uname: '',
  phone: '',
  status: '',
  datePicker: ''
})

const statusOptions = [
  {
    value: '正常',
    label: '正常'
  },
  {
    value: '停用',
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

const multipleTableRef = ref()
const multipleSelection = ref([])

const handleSelectionChange = (val) => {
  multipleSelection.value = val
}
</script>

<template>
  <div class="role-management-page">
    <FilterLayout
      label1="角色名称"
      label2="权限字段"
      :isShow="isShow"
      :showCollapse="false"
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
        />
      </el-form-item>
    </FilterLayout>

    <div class="role-management-page-btns">
      <el-button plain type="primary">添加</el-button>
      <el-button plain type="success">修改</el-button>
      <el-button plain type="danger">删除</el-button>
    </div>
    <el-table
      :ref="multipleTableRef"
      :data="tableData"
      style="width: 100%"
      @selection-change="handleSelectionChange"
      :header-cell-style="{
        background: '#F5F7FA',
        color: '#909399'
      }"
    >
      <el-table-column align="center" type="selection" width="55" />
      <el-table-column
        align="center"
        property="roleId"
        label="角色编号"
        width="120"
      />
      <el-table-column
        align="center"
        property="rname"
        label="角色名称"
        width="120"
      />
      <el-table-column
        align="center"
        property="authority"
        label="权限字段"
        width="120"
      />
      <el-table-column
        align="center"
        property="displayOrder"
        label="显示顺序"
        width="120"
      />
      <el-table-column align="center" label="状态" width="120">
        <template #default="scope">
          <el-switch v-model="scope.row.state" />
        </template>
      </el-table-column>
      <el-table-column
        property="createDate"
        label="创建时间"
        width="120"
        show-overflow-tooltip
      />
      <el-table-column label="操作" show-overflow-tooltip>
        <template #default="scope">
          <el-button size="small" type="info" plain>数据权限</el-button>
          <el-button size="small" type="info" plain>分配用户</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<style lang="scss" scoped>
.role-management-page {
  .el-form-item {
    width: 30%;
    .el-select {
      width: 100%;
    }
  }
  .role-management-page-btns {
    margin-bottom: 16px;
  }
}
</style>
