<script setup>
import { ref } from 'vue'
import MyDialog from './components/MyDialog.vue'
import FilterForm from './components/FilterForm.vue'
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

const treeData = ref([
  {
    moduleId: 0,
    moduleName: '主类目',
    children: [
      {
        moduleId: 1,
        moduleName: '系统管理',
        children: [
          { moduleId: 11, moduleName: '用户管理' },
          { moduleId: 12, moduleName: '角色管理' },
          { moduleId: 13, moduleName: '菜单管理' }
        ]
      },
      { moduleId: 2, moduleName: '系统监控' },
      { moduleId: 3, moduleName: '系统工具' }
    ]
  }
])

// const rules = {}
</script>

<template>
  <div class="role-management-page">
    <MyDialog :title="dialogTitle" ref="myDialogRef">
      <template #form>
        <el-form
          :model="formModel"
          label-width="80px"
          label-position="left"
          :rules="rules"
          class="dialog-form"
        >
          <el-form-item label="角色名称">
            <el-input v-model="formModel.nickName" />
          </el-form-item>
          <el-form-item label="权限字段">
            <el-input v-model="formModel.phone" />
          </el-form-item>
          <el-form-item label="角色顺序">
            <el-input-number v-model="formModel.moduleSort" :min="0" />
          </el-form-item>
          <el-form-item label="状态">
            <el-radio-group v-model="formModel.status">
              <el-radio :label="true">正常</el-radio>
              <el-radio :label="false">停用</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="菜单权限">
            <el-tree
              v-model="formModel.moduleAuth"
              :data="treeData"
              :props="{ label: 'moduleName', value: 'moduleId' }"
              show-checkbox
              :style="{ width: '100%' }"
            />
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
        align="center"
        property="createDate"
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
