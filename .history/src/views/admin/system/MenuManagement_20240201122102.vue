<script setup>
import {
  getMenuList,
  getTreeSelect,
  addMenuItem,
  removeMenuItem,
  getMenuItem,
  editMenuItem
} from '@/api/admin/system/menu.js'
import FilterForm from './components/FilterForm.vue'
import MyDialog from './components/MyDialog.vue'
import { ref } from 'vue'
// 一个响应式对象存储整个筛选表单的数据
const filterForm = ref({
  moduleName: '',
  status: ''
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
  filterForm.value = {}
}
const handleQuery = () => {
  console.log('query')
}

const tableData = ref([
  {
    moduleId: 0,
    moduleName: '主目录',
    moduleSort: 1,
    authority: 'system:user:list',
    perms: 'system/user/index',
    status: '正常',
    createTime: '2023-04-23 16:11:49',
    children: [
      {
        moduleId: 1,
        moduleName: '系统管理',
        moduleSort: 1,
        authority: 'system:user:list',
        perms: 'system/user/index',
        status: '正常',
        createTime: '2023-04-23 16:11:49',
        children: [
          {
            moduleId: 11,
            moduleName: '用户管理',
            moduleSort: 1,
            authority: 'system:user:list',
            perms: 'system/user/index',
            status: '正常',
            createTime: '2023-04-23 16:11:49'
          },
          {
            moduleId: 12,
            moduleName: '角色管理',
            moduleSort: 1,
            authority: 'system:user:list',
            perms: 'system/user/index',
            status: '正常',
            createTime: '2023-04-23 16:11:49'
          },
          {
            moduleId: 13,
            moduleName: '菜单管理',
            moduleSort: 1,
            authority: 'system:user:list',
            perms: 'system/user/index',
            status: '正常',
            createTime: '2023-04-23 16:11:49'
          }
        ]
      },
      {
        moduleId: 2,
        moduleName: '系统监控',
        moduleSort: 1,
        authority: 'system:user:list',
        perms: 'system/user/index',
        status: '正常',
        createTime: '2023-04-23 16:11:49'
      },
      {
        moduleId: 3,
        moduleName: '系统工具',
        moduleSort: 1,
        authority: 'system:user:list',
        perms: 'system/user/index',
        status: '正常',
        createTime: '2023-04-23 16:11:49'
      }
    ]
  }
])

const myDialogRef = ref()
const title = ref('添加菜单')

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
// dialog参数
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
  //默认上级菜单id为0
  formModel.value.parentId = 0
  myDialogRef.value.open()
}

const delModule = async (moduleId) => {
  // console.log(moduleId)
  await removeMenuItem(moduleId)
  // console.log(res)
  // getDataList()
  ElMessage.success('操作成功')
}

const editMenuFn = async (moduleId) => {
  title.value = '编辑菜单'
  myDialogRef.value.open()
  const res = await getMenuItem(moduleId)
  // console.log(res.data.data)
  formModel.value = res.data.data
}

const addChildMenuFn = (moduleId) => {
  title.value = '添加子菜单'
  console.log(moduleId)
  formModel.value.parentId = moduleId
  myDialogRef.value.open()
}

const handleAddConfirm = async () => {
  await addMenuItem(formModel.value)
  // console.log(res)
  ElMessage.success('操作成功')
  // getDataList()
}

const handleEditConfirm = async () => {
  await editMenuItem(formModel.value)
  // console.log(res)
  ElMessage.success('操作成功')
  // getDataList()
}

const handleAddChildConfirm = async () => {
  await addMenuItem(formModel.value)
  // console.log(res)
  ElMessage.success('操作成功')
  // getDataList()
}

const getDataList = async () => {
  const res = await getTreeSelect()
  // tableData.value = res.data.data
  // treeData.value = res.data.data
  console.log(res)
}

const getTreeSelectData = async () => {
  const res = await getTreeSelect()
  treeData.value = res.data.data
}
getTreeSelectData()
getDataList()
</script>

<template>
  <div class="menu-management-page">
    <MyDialog
      ref="myDialogRef"
      :title="title"
      @onAddConfirm="handleAddConfirm"
      @onEditConfirm="handleEditConfirm"
      @onAddChildConfirm="handleAddChildConfirm"
    >
      <template #form>
        <el-form
          :model="formModel"
          label-width="80px"
          label-position="left"
          :rules="rules"
          class="dialog-form"
        >
          <el-form-item label="上级菜单">
            <el-tree-select
              v-model="formModel.parentId"
              :data="treeData"
              check-strictly
              :props="{ label: 'moduleName', value: 'moduleId' }"
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
    <FilterForm @reset="handleReset" @query="handleQuery">
      <el-form-item label="菜单名称">
        <el-input
          placeholder="请输入菜单名称"
          v-model="filterForm.moduleName"
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
    </FilterForm>
    <div class="menu-management-page-btns">
      <el-button plain type="primary" @click="addMenuFn">添加</el-button>
    </div>

    <el-table
      :data="tableData"
      style="width: 100%"
      row-key="moduleId"
      :bmoduleSort="true"
      :header-cell-style="{
        background: '#F5F7FA',
        color: '#909399'
      }"
    >
      <el-table-column prop="moduleName" label="菜单名称" />
      <el-table-column prop="moduleSort" label="排序" />
      <el-table-column prop="perms" label="权限标识" />
      <el-table-column prop="status" label="状态">
        <template #default="scope"> {{ scope.row.status }} </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="createTime"
        label="创建时间"
        show-overflow-tooltip
      />
      <el-table-column width="300" label="操作" align="center">
        <template #default="scope">
          <el-button
            size="small"
            plain
            type="primary"
            @click="addChildMenuFn(scope.row.moduleId)"
            >添加</el-button
          >
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
  .dialog-form .el-form-item {
    width: 100%;
  }
  .menu-management-page-btns {
    margin-bottom: 16px;
  }
}
</style>
