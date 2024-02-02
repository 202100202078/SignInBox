<script setup>
import { ref } from 'vue'
import { getTreeSelect } from '@/api/admin/system/menu.js'
import MyDialog from './components/MyDialog.vue'
import ConfirmDialog from './components/ConfirmDialog.vue'
import FilterForm from './components/FilterForm.vue'
// 确认提示框ref
const confirmRef = ref()
// 确认提示框内容
const confirmContent = ref('测试')
// 提示框用途
const mode = ref('edit')

// 一个响应式对象存储整个筛选表单的数据
const filterForm = ref({
  uname: '',
  phone: '',
  status: '',
  datePicker: ''
})

const statusOptions = [
  {
    value: '0',
    label: '正常'
  },
  {
    value: '1',
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

// dialog组件ref
const myDialogRef = ref()
// dialog的标题
const dialogTitle = ref('添加角色')

// 点击添加角色
const addUserFn = () => {
  dialogTitle.value = '添加角色'
  myDialogRef.value.open()
}
// 点击修改角色
const editUserFn = () => {
  dialogTitle.value = '修改角色'
  // 将当前多选框选中数据渲染到dialog中
  const curSelection = multipleSelection.value[0]
  formModel.value = curSelection
  myDialogRef.value.open()
}
// 点击删除角色
const delUserFn = () => {
  dialogTitle.value = '系统提示'
  myDialogRef.value.open()
}
// 确认添加角色
const handleAddConfirm = () => {
  formModel.value.ids = treeRef.value.getCheckedKeys(false)
}
// 确认编辑角色
const handleEditConfirm = () => {}

const tableData = [
  {
    roleId: 1,
    roleName: 'zs',
    roleSort: '15888888888',
    roleKey: 'admin',
    status: false,
    createDate: '2023-04-23 16:11:38'
  }
]

const multipleTableRef = ref()
const multipleSelection = ref([])

const handleSelectionChange = (val) => {
  multipleSelection.value = val
}

const handleStatusChange = (roleName, newVal) => {
  confirmContent.value = `确认要"${
    newVal === true ? '启用' : '停用'
  }""${roleName}"角色吗？`
  confirmRef.value.open()
}

// dialog表单
const formModel = ref({
  moduleIds: [],
  remark: '',
  roleKey: '',
  roleName: '',
  roleSort: 0,
  status: ''
})

const treeData = ref([
  {
    id: 0,
    name: '主类目',
    children: [
      {
        id: 1,
        name: '系统管理',
        children: [
          { id: 11, name: '用户管理' },
          { id: 12, name: '角色管理' },
          { id: 13, name: '菜单管理' }
        ]
      },
      { id: 2, name: '系统监控' },
      { id: 3, name: '系统工具' }
    ]
  }
])

const treeRef = ref()

const getTreeSelectData = async () => {
  const res = await getTreeSelect()
  treeData.value = res.data.data
}
getTreeSelectData()
// const rules = {}
</script>

<template>
  <div class="role-management-page">
    <ConfirmDialog
      ref="confirmRef"
      :content="confirmContent"
      :mode="mode"
    ></ConfirmDialog>
    <MyDialog
      :title="dialogTitle"
      ref="myDialogRef"
      @onAddConfirm="handleAddConfirm"
      @onEditConfirm="handleEditConfirm"
    >
      <template #form>
        <el-form
          :model="formModel"
          label-width="80px"
          label-position="left"
          :rules="rules"
          class="dialog-form"
        >
          <el-form-item label="角色名称">
            <el-input
              v-model="formModel.roleName"
              placeholder="请输入角色名称"
            />
          </el-form-item>
          <el-form-item label="权限字段">
            <el-input
              v-model="formModel.roleKey"
              placeholder="请输入权限字段"
            />
          </el-form-item>
          <el-form-item label="角色顺序">
            <el-input-number v-model="formModel.roleSort" :min="0" />
          </el-form-item>
          <el-form-item label="状态">
            <el-radio-group v-model="formModel.status">
              <el-radio :label="true">正常</el-radio>
              <el-radio :label="false">停用</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="菜单权限">
            <el-tree
              ref="treeRef"
              :data="treeData"
              node-key="id"
              :props="{ label: 'name', value: 'id' }"
              show-checkbox
              :style="{
                width: '100%',
                border: '1px solid var(--el-border-color)'
              }"
            />
          </el-form-item>
          <el-form-item label="备注">
            <el-input
              v-model="formModel.remark"
              type="textarea"
              placeholder="请输入内容"
            />
          </el-form-item>
        </el-form>
      </template>
    </MyDialog>
    <FilterForm @reset="handleReset" @query="handleQuery">
      <el-form-item label="角色名称">
        <el-input
          placeholder="请输入角色名称"
          v-model="filterForm.uname"
        ></el-input>
      </el-form-item>
      <el-form-item label="权限字符">
        <el-input
          placeholder="请输入权限字符"
          v-model="filterForm.phone"
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
    <div class="role-management-page-btns">
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
        prop="roleId"
        label="角色编号"
        width="120"
      />
      <el-table-column
        align="center"
        prop="roleName"
        label="角色名称"
        width="120"
      />
      <el-table-column
        align="center"
        prop="roleKey"
        label="权限字段"
        width="120"
      />
      <el-table-column
        align="center"
        prop="roleSort"
        label="显示顺序"
        width="120"
      />
      <el-table-column prop="status" align="center" label="状态" width="120">
        <template #default="scope">
          <el-switch
            v-model="scope.row.state"
            @change="handleStatusChange(scope.row.roleName, $event)"
          />
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="createDate"
        label="创建时间"
        width="170"
        show-overflow-tooltip
      />
      <el-table-column label="操作" show-overflow-tooltip align="center">
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
  .dialog-form .el-form-item {
    width: 100%;
  }
  .role-management-page-btns {
    margin-bottom: 16px;
  }
}
</style>
