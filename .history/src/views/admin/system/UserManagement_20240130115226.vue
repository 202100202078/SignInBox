<script setup>
import MyDialog from './components/MyDialog.vue'
import FilterForm from './components/FilterForm.vue'
import { ref } from 'vue'

//筛选表单的显示隐藏
const isShow = ref(true)
// const params = ref({})
// 一个响应式对象存储整个筛选表单的数据(默认显示的两个item需要父子双向绑定)

// 时间选择器
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
  isShow.value = !isShow.value
}

// 渲染的表格
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

const multipleTableRef = ref()
const multipleSelection = ref([])

const handleSelectionChange = (val) => {
  multipleSelection.value = val
}

// dialog组件ref
const myDialogRef = ref()
// dialog的标题
const dialogTitle = ref('添加用户')

const addUserFn = () => {
  dialogTitle.value = '添加用户'
  myDialogRef.value.open()
}
const editUserFn = () => {
  dialogTitle.value = '修改用户'
  myDialogRef.value.open()
}
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
  password: false,
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
        <el-form-item label="邮箱">
          <el-input v-model="formModel.email" />
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
          <el-select v-model="form.role" placeholder="请选择角色">
            <el-option label="普通角色" value="normal" />
          </el-select>
        </el-form-item>
        <el-form-item label="状态">
          <el-radio-group v-model="form.status">
            <el-radio label="正常" />
            <el-radio label="停用" />
          </el-radio-group>
        </el-form-item>
        <el-form-item label="备注">
          <el-input
            v-model="form.desc"
            type="textarea"
            placeholder="请输入内容"
          />
        </el-form-item>
      </el-form>
    </template>
  </MyDialog>
  <div class="user-managemant-page">
    <FilterForm>
      <el-form-item label="登录名称">
        <el-input placeholder="请输入"></el-input>
      </el-form-item>
      <el-form-item label="手机号码">
        <el-input placeholder="请输入"></el-input>
      </el-form-item>
      <el-form-item label="状态">
        <el-select v-model="status" placeholder="请选择">
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
          v-model="datePicker"
          type="daterange"
          range-separator="To"
          start-placeholder="Start date"
          end-placeholder="End date"
        />
      </el-form-item>
    </FilterForm>
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
