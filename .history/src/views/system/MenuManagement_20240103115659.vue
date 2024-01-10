<script setup>
import {
  getMenuList,
  addMenuItem,
  removeMenuItem,
  getMenuItem,
  editMenuItem
} from '@/api/system/menu.js'
import MyDialog from './components/MyDialog.vue'
import { ref } from 'vue'
//筛选表单的显示隐藏
const isShow = ref(true)
// const params = ref({})
// 一个响应式对象存储整个筛选表单的数据(默认显示的两个item需要父子双向绑定)

// const datePicker = ref('')

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

const tableData = ref([
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
])

const myDialogRef = ref()
const title = ref('添加菜单')

const data = ref([
  {
    parentId: 0,
    moduleName: '',
    children: []
  }
])

const filterForm = ref({
  moduleName: '',
  status: ''
})

const formModel = ref({
  moduleName: '',
  status: '0',
  parentId: 0,
  perms: '',
  visible: '0',
  moduleSort: 0,
  moduleType: 'M'
})

const rules = ref({
  moduleName: [{ required: true, message: '请输入菜单名称', trigger: 'blur' }]
})

const addMenuFn = async () => {
  title.value = '添加菜单'
  myDialogRef.value.open()
}

const handleAddConfirm = async () => {
  await addMenuItem(formModel.value)
  // console.log(res)
  ElMessage.success('操作成功')
  getDataList()
}

const handleEditConfirm = async () => {
  await editMenuItem(formModel.value)
  // console.log(res)
  ElMessage.success('操作成功')
  getDataList()
}

const delModule = async (moduleId) => {
  // console.log(moduleId)
  await removeMenuItem(moduleId)
  // console.log(res)
  getDataList()
  ElMessage.success('操作成功')
}

const editMenuFn = async (moduleId) => {
  title.value = '编辑菜单'
  myDialogRef.value.open()
  const res = await getMenuItem(moduleId)
  // console.log(res.data.data)
  formModel.value = res.data.data
}

const getDataList = async () => {
  const res = await getMenuList()
  tableData.value = res.data.data
  data.value = res.data.data
  console.log(res)
}

getDataList()
</script>

<template>
  <MyDialog
    ref="myDialogRef"
    :title="title"
    @onAddConfirm="handleAddConfirm"
    @onEditConfirm="handleEditConfirm"
  >
    <template #form>
      <el-form
        :model="formModel"
        label-width="80px"
        label-position="left"
        :rules="rules"
      >
        <el-form-item label="上级菜单">
          <el-tree-select
            v-model="formModel.parentId"
            :data="data"
            check-strictly
            :props="{ label: 'moduleName', value: 'parentId' }"
            :render-after-expand="false"
          />
        </el-form-item>
        <el-form-item label="菜单类型">
          <el-radio-group v-model="formModel.moduleType">
            <el-radio label="M">目录</el-radio>
            <el-radio label="C">菜单</el-radio>
            <el-radio label="F">按钮</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="菜单名称" prop="moduleName">
          <el-input v-model="formModel.moduleName" />
        </el-form-item>
        <el-form-item
          v-show="formModel.moduleType !== 'M'"
          label="权限标识"
          prop="perms"
        >
          <el-input v-model="formModel.perms" />
        </el-form-item>
        <el-form-item label="显示排序">
          <el-input-number v-model="formModel.moduleSort" :min="0" />
        </el-form-item>
        <el-form-item v-show="formModel.moduleType !== 'F'" label="显示状态">
          <el-radio-group v-model="formModel.visible">
            <el-radio label="0">显示</el-radio>
            <el-radio label="1">隐藏</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="菜单状态">
          <el-radio-group v-model="formModel.status">
            <el-radio label="0">正常</el-radio>
            <el-radio label="1">停用</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
    </template>
  </MyDialog>

  <div class="menu-management-page">
    <FilterLayout
      label1="菜单名称"
      label2="状态"
      :default-show1="false"
      :default-show2="false"
      :is-show="isShow"
      :show-collapse="false"
      @reset="handleReset"
      @query="handleQuery"
      @trigger="handleTrigger"
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
      <el-button plain type="primary" @click="addMenuFn">添加</el-button>
    </div>
    <el-table
      :data="tableData"
      style="width: 100%"
      row-key="parentId"
      border
      :header-cell-style="{
        background: '#F5F7FA',
        color: '#909399'
      }"
    >
      <el-table-column prop="moduleName" label="菜单名称" />
      <el-table-column prop="moduleSort" label="排序" />
      <el-table-column prop="perms" label="权限标识" />
      <el-table-column prop="status" label="状态">
        <template #default="scope"> {{ scope.row.state }} </template>
      </el-table-column>
      <el-table-column
        prop="createTime"
        label="创建时间"
        show-overflow-tooltip
      />
      <el-table-column width="300" label="操作">
        <template #default="scope">
          <el-button size="small" plain type="primary">添加</el-button>
          <el-button
            size="small"
            plain
            type="success"
            @click="editMenuFn(scope.row.moduleId)"
            >修改</el-button
          >
          <el-button
            size="small"
            plain
            type="danger"
            @click="delModule(scope.row.moduleId)"
            >删除</el-button
          >
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
