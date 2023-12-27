<script setup>
import { ref } from 'vue'

import axios from 'axios'

//筛选表单的显示隐藏
const isShow = ref(false)
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
    userId: 1,
    uname: 'zs',
    nickName: '张三',
    phone: '15888888888',
    state: false,
    createDate: '2023-04-23 16:11:38'
  },
  {
    userId: 1,
    uname: 'zs',
    nickName: '张三',
    phone: '15888888888',
    state: false,
    createDate: '2023-04-23 16:11:38'
  },
  {
    userId: 1,
    uname: 'zs',
    nickName: '张三',
    phone: '15888888888',
    state: false,
    createDate: '2023-04-23 16:11:38'
  },
  {
    userId: 1,
    uname: 'zs',
    nickName: '张三',
    phone: '15888888888',
    state: false,
    createDate: '2023-04-23 16:11:38'
  },
  {
    userId: 1,
    uname: 'zs',
    nickName: '张三',
    phone: '15888888888',
    state: false,
    createDate: '2023-04-23 16:11:38'
  },
  {
    userId: 1,
    uname: 'zs',
    nickName: '张三',
    phone: '15888888888',
    state: false,
    createDate: '2023-04-23 16:11:38'
  },
  {
    userId: 1,
    uname: 'zs',
    nickName: '张三',
    phone: '15888888888',
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
const multipleSelection = ref([])

const handleSelectionChange = (val) => {
  multipleSelection.value = val
}
</script>

<template>
  <!-- <button @click="test">按钮</button> -->
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
        />
      </el-form-item>
    </FilterLayout>
    <div class="user-managemant-page-btns">
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
        property="userId"
        label="用户编号"
        width="120"
      />
      <el-table-column
        align="center"
        property="uname"
        label="用户名称"
        width="120"
      />
      <el-table-column
        align="center"
        property="nickName"
        label="用户昵称"
        width="120"
      />
      <el-table-column
        align="center"
        property="phone"
        label="手机号码"
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
          <el-button size="small" type="info" plain>重置密码</el-button>
          <el-button size="small" type="info" plain>分配角色</el-button>
        </template>
      </el-table-column>
    </el-table>
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
  .user-managemant-page-btns {
    margin-bottom: 16px;
  }
}
</style>
