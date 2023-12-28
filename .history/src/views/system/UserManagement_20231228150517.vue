<script setup>
import MyDialog from './components/MyDialog.vue'
import { ref } from 'vue'

import axios from 'axios'

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

const test = () => {
  console.log(datePicker.value[1])
  axios
    .get('http://10.161.8.214:9604/api/service/list', {
      params: {
        endTime: datePicker.value[1]
      }
    })
    .then((res) => {
      console.log(res)
    })
}

const multipleTableRef = ref()
const multipleSelection = ref([])

const handleSelectionChange = (val) => {
  multipleSelection.value = val
}

const myDialogRef = ref()
const title = ref('添加用户')

const addUserFn = () => {
  title.value = '添加用户'
  myDialogRef.value.open()
}
const editUserFn = () => {
  title.value = '修改用户'
  myDialogRef.value.open()
}
const delUserFn = () => {
  title.value = '系统提示'
  myDialogRef.value.open()
}
</script>

<template>
  <MyDialog :title="title" ref="myDialogRef">
    <template #form>
      <el-form :model="form" label-width="120px">
        <el-form-item label="Activity name">
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="Activity zone">
          <el-select
            v-model="form.region"
            placeholder="please select your zone"
          >
            <el-option label="Zone one" value="shanghai" />
            <el-option label="Zone two" value="beijing" />
          </el-select>
        </el-form-item>
        <el-form-item label="Activity time">
          <el-col :span="11">
            <el-date-picker
              v-model="form.date1"
              type="date"
              placeholder="Pick a date"
              style="width: 100%"
            />
          </el-col>
          <el-col :span="2" class="text-center">
            <span class="text-gray-500">-</span>
          </el-col>
          <el-col :span="11">
            <el-time-picker
              v-model="form.date2"
              placeholder="Pick a time"
              style="width: 100%"
            />
          </el-col>
        </el-form-item>
        <el-form-item label="Instant delivery">
          <el-switch v-model="form.delivery" />
        </el-form-item>
        <el-form-item label="Activity type">
          <el-checkbox-group v-model="form.type">
            <el-checkbox label="Online activities" name="type" />
            <el-checkbox label="Promotion activities" name="type" />
            <el-checkbox label="Offline activities" name="type" />
            <el-checkbox label="Simple brand exposure" name="type" />
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="Resources">
          <el-radio-group v-model="form.resource">
            <el-radio label="Sponsor" />
            <el-radio label="Venue" />
          </el-radio-group>
        </el-form-item>
        <el-form-item label="Activity form">
          <el-input v-model="form.desc" type="textarea" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">Create</el-button>
          <el-button>Cancel</el-button>
        </el-form-item>
      </el-form>
    </template>
  </MyDialog>
  <button @click="test">按钮</button>
  <div class="user-managemant-page">
    <FilterLayout
      label1="用户名称"
      label2="手机号码"
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
          value-format="YYYY-MM-DD HH:mm:ss"
        />
      </el-form-item>
    </FilterLayout>
    <div class="user-managemant-page-btns">
      <el-button plain type="primary" @click="addUserFn">添加</el-button>
      <el-button plain type="success" @click="editUserFn">修改</el-button>
      <el-button plain type="danger" @click="delUserFn">删除</el-button>
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
