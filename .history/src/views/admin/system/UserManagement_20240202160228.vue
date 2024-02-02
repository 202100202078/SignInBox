<script setup>
import MyDialog from './components/MyDialog.vue'
import FilterForm from './components/FilterForm.vue'
import ConfirmDialog from './components/ConfirmDialog.vue'
import { Refresh } from '@element-plus/icons-vue'
import { ref } from 'vue'
// 确认提示框ref
const confirmRef = ref()
// 确认提示框内容
const confirmContent = ref('测试')
// 提示框用途
const mode = ref('edit')
// 当前点击用户
const curUser = ref({})

// 一个响应式对象存储整个筛选表单的数据
const filterForm = ref({
  username: '',
  nickName: '',
  status: '',
  datePicker: '',
  beginTime: '',
  endTime: '',
  pageSize: 5,
  current: 1
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

const handleSizeChange = (size) => {
  //当每页条数变化时，可能当前页数已经不存在了
  //因此我们统一重新请求渲染第一页数据
  filterForm.value.current = 1
  filterForm.value.pageSize = size
  // 重新获取当前页数据
}
const handleCurrentChange = (page) => {
  //当每页条数变化时，可能当前页数已经不存在了
  //因此我们统一重新请求渲染第一页数据
  //根据页数重新请求渲染即可
  filterForm.value.pagenum = page
  // 重新请求数据
}

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
    username: 'zs',
    nickName: '张三',
    status: false,
    createDate: '2023-04-23 16:11:38'
  },
  {
    userId: 1,
    username: 'zs',
    nickName: '张三',
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
  mode.value = 'delete'
  const userIds = multipleSelection.value.map((item) => item.userId).join(',')
  confirmContent.value = `是否确认删除角色编号为"${userIds}"的数据项？`
  confirmRef.value.open()
}

// 用户状态改变
const handleStatusChange = (row) => {
  mode.value = '系统提示'
  mode.value = 'edit'
  curUser.value = row
  confirmContent.value = `确认要"${row.status === false ? '启用' : '停用'}""${
    row.username
  }"用户吗？`
  confirmRef.value.open()
}
// 确认用户状态改变
const handleTriggerConfirm = (row) => {
  // console.log(row)
  // 修改用户状态
  row.status = !row.status
  // 发请求修改后台数据
}

// dialog表单
const formModel = ref({
  nickName: '',
  email: '',
  username: '',
  password: '',
  role: '',
  gender: '',
  status: '',
  desc: ''
})

const rules = {}
</script>

<template>
  <div class="user-managemant-page">
    <ConfirmDialog
      ref="confirmRef"
      :content="confirmContent"
      :mode="mode"
      :cur="curUser"
      @confirmDelete="handleDeleteConfirm"
      @confirmTrigger="handleTriggerConfirm"
    >
      <slot #form>
        <el-form>
          <el-form-item>
            <el-input></el-input>
          </el-form-item>
        </el-form>
      </slot>
    </ConfirmDialog>
    <MyDialog :title="dialogTitle" ref="myDialogRef">
      <template #form>
        <el-form
          :model="formModel"
          label-width="80px"
          label-position="left"
          :rules="rules"
          class="dialog-form"
        >
          <el-form-item label="用户昵称">
            <el-input v-model="formModel.nickName" />
          </el-form-item>
          <el-form-item label="手机号码">
            <el-input v-model="formModel.nickName" />
          </el-form-item>
          <el-form-item label="用户名称">
            <el-input v-model="formModel.username" />
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
    <FilterForm @reset="handleReset" @query="handleQuery" :rules="rules">
      <el-form-item label="用户名称" prop="username">
        <el-input placeholder="请输入" v-model="filterForm.username"></el-input>
      </el-form-item>
      <el-form-item label="用户昵称" prop="nickName">
        <el-input placeholder="请输入" v-model="filterForm.nickName"></el-input>
      </el-form-item>
      <el-form-item label="状态" prop="status">
        <el-select v-model="filterForm.status" placeholder="请选择">
          <el-option
            v-for="item in statusOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="创建时间" prop="createTime">
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
      <div class="left">
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
      <div class="right">
        <el-tooltip effect="dark" content="刷新" placement="top">
          <el-button :icon="Refresh" circle @click="getDataList" />
        </el-tooltip>
      </div>
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
        prop="userId"
        label="用户编号"
        width="120"
      />
      <el-table-column
        align="center"
        prop="username"
        label="用户名称"
        width="120"
      />
      <el-table-column
        align="center"
        prop="nickName"
        label="用户昵称"
        width="120"
      />
      <el-table-column
        align="center"
        prop="nickName"
        label="手机号码"
        width="120"
      />
      <el-table-column label="状态" align="center" width="120">
        <template #default="scope">
          <el-switch
            v-model="scope.row.status"
            disabled
            @click="handleStatusChange(scope.row, $event)"
          />
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="createDate"
        label="创建时间"
        width="180"
        show-overflow-tooltip
      />
      <el-table-column label="操作" show-overflow-tooltip align="center">
        <template #default="scope">
          <el-button size="small" type="info" plain>重置密码</el-button>
          <el-button size="small" type="info" plain>分配角色</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination">
      <el-pagination
        v-model:current-page="filterForm.current"
        v-model:page-size="filterForm.pageSize"
        :page-sizes="[5, 10, 15, 20, 25]"
        :background="true"
        layout="total, sizes, prev, pager, next, jumper"
        :total="40"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.user-managemant-page {
  .pagination {
    margin-top: 16px;
    display: flex;
    justify-content: flex-end;
  }
  .el-form-item {
    width: 30%;
    .el-select {
      width: 100%;
    }
  }
  .dialog-form .el-form-item {
    width: 100%;
  }
  .user-managemant-page-btns {
    margin-bottom: 16px;
    display: flex;
    justify-content: space-between;
  }
  // 去除switch禁用 css
  :deep .el-switch.is-disabled {
    opacity: 1;
  }
  :deep .el-switch.is-disabled .el-switch__core,
  :deep .el-switch.is-disabled .el-switch__label {
    cursor: pointer;
  }
}
</style>
