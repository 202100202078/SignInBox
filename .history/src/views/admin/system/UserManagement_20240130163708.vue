<script setup>
import MyDialog from './components/MyDialog.vue'
import FilterForm from './components/FilterForm.vue'
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
  // 重置筛选表单
  filterForm.value = {}
}
const handleQuery = () => {
  console.log('query')
}

// 渲染的表格
const tableData = [
  {
    userId: 1,
    uname: 'zs',
    nickName: '张三',
    phone: '15888888888',
    status: false,
    createDate: '2023-04-23 16:11:38'
  },
  {
    userId: 1,
    uname: 'zs',
    nickName: '张三',
    phone: '15888888888',
    status: false,
    createDate: '2023-04-23 16:11:38'
  },
  {
    userId: 1,
    uname: 'zs',
    nickName: '张三',
    phone: '15888888888',
    status: false,
    createDate: '2023-04-23 16:11:38'
  },
  {
    userId: 1,
    uname: 'zs',
    nickName: '张三',
    phone: '15888888888',
    status: false,
    createDate: '2023-04-23 16:11:38'
  },
  {
    userId: 1,
    uname: 'zs',
    nickName: '张三',
    phone: '15888888888',
    status: false,
    createDate: '2023-04-23 16:11:38'
  },
  {
    userId: 1,
    uname: 'zs',
    nickName: '张三',
    phone: '15888888888',
    status: false,
    createDate: '2023-04-23 16:11:38'
  },
  {
    userId: 1,
    uname: 'zs',
    nickName: '张三',
    phone: '15888888888',
    status: false,
    createDate: '2023-04-23 16:11:38'
  }
]

//表格多选
const multipleTableRef = ref()
const multipleSelection = ref([])

const handleSelectionChange = (val) => {
  multipleSelection.value = val
}

// dialog组件ref
const myDialogRef = ref()
// dialog的标题
const dialogTitle = ref('添加用户')

// 点击添加用户
const addUserFn = () => {
  dialogTitle.value = '添加用户'
  myDialogRef.value.open()
}
// 点击修改用户
const editUserFn = () => {
  dialogTitle.value = '修改用户'
  // 将当前多选框选中数据渲染到dialog中
  const curSelection = multipleSelection.value[0]
  formModel.value = curSelection
  myDialogRef.value.open()
}
// 点击删除用户
const delUserFn = () => {
  dialogTitle.value = '系统提示'
  myDialogRef.value.open()
}

// dialog表单
const formModel = ref({
  nickName: '',
  phone: '',
  email: '',
  uname: '',
  password: '',
  role: '',
  gender: '',
  status: '',
  desc: ''
})

const rules = {}
</script>

<template>
  <MyDialog :title="dialogTitle" ref="myDialogRef">
    <template #form>
      <el-form
        :model="formModel"
        label-width="80px"
        label-position="left"
        :rules="rules"
      >
        <el-form-item label="用户昵称">
          <el-input v-model="formModel.nickName" />
        </el-form-item>
        <el-form-item label="手机号码">
          <el-input v-model="formModel.phone" />
        </el-form-item>
        <el-form-item label="用户名称">
          <el-input v-model="formModel.uname" />
        </el-form-item>
        <el-form-item label="用户密码">
          <el-input v-model="formModel.password" type="password" />
        </el-form-item>
        <el-form-item label="用户性别">
          <el-select v-model="formModel.gender" placeholder="请选择性别">
            <el-option label="男" value="1" />
            <el-option label="女" value="2" />
            <el-option label="未知" value="3" />
          </el-select>
        </el-form-item>
        <el-form-item label="角色">
          <el-select v-model="formModel.role" placeholder="请选择角色">
            <el-option label="普通角色" value="normal" />
          </el-select>
        </el-form-item>
        <el-form-item label="状态">
          <el-radio-group v-model="formModel.status">
            <el-radio :label="true">正常</el-radio>
            <el-radio :label="false">停用</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="备注">
          <el-input
            v-model="formModel.desc"
            type="textarea"
            placeholder="请输入内容"
          />
        </el-form-item>
      </el-form>
    </template>
  </MyDialog>
  <div class="user-managemant-page">
    <FilterForm @reset="handleReset" @query="handleQuery">
      <el-form-item label="用户名称">
        <el-input placeholder="请输入" v-model="filterForm.uname"></el-input>
      </el-form-item>
      <el-form-item label="手机号码">
        <el-input placeholder="请输入" v-model="filterForm.phone"></el-input>
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
      <el-form-item label="创建时间">
        <el-date-picker
          v-model="filterForm.datePicker"
          type="daterange"
          range-separator="To"
          start-placeholder="Start date"
          end-placeholder="End date"
        />
      </el-form-item>
    </FilterForm>
    <div class="user-managemant-page-btns">
      <el-button plain type="primary" @click="addUserFn">添加</el-button>
      <el-button
        plain
        type="success"
        @click="editUserFn"
        :disabled="multipleSelection.length !== 1"
        >修改</el-button
      >
      <el-button
        plain
        type="danger"
        @click="delUserFn"
        :disabled="multipleSelection.length === 0"
        >删除</el-button
      >
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
      <el-table-column label="状态" align="center" width="120">
        <template #default="scope">
          <el-switch v-model="scope.row.status" />
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
