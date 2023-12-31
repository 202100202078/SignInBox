<script setup>
import { getMenuList, addMenuItem } from '@/api/system/menu.js'
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

const tableData = [
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
]

const multipleTableRef = ref()

const myDialogRef = ref()
const title = ref('添加菜单')

const addMenuFn = async () => {
  title.value = '添加菜单'
  myDialogRef.value.open()
  const res = await getMenuList()
  console.log(res)
}

const data = [
  {
    value: '1',
    label: 'Level one 1',
    children: [
      {
        value: '1-1',
        label: 'Level two 1-1',
        children: [
          {
            value: '1-1-1',
            label: 'Level three 1-1-1'
          }
        ]
      }
    ]
  },
  {
    value: '2',
    label: 'Level one 2',
    children: [
      {
        value: '2-1',
        label: 'Level two 2-1',
        children: [
          {
            value: '2-1-1',
            label: 'Level three 2-1-1'
          }
        ]
      },
      {
        value: '2-2',
        label: 'Level two 2-2',
        children: [
          {
            value: '2-2-1',
            label: 'Level three 2-2-1'
          }
        ]
      }
    ]
  },
  {
    value: '3',
    label: 'Level one 3',
    children: [
      {
        value: '3-1',
        label: 'Level two 3-1',
        children: [
          {
            value: '3-1-1',
            label: 'Level three 3-1-1'
          }
        ]
      },
      {
        value: '3-2',
        label: 'Level two 3-2',
        children: [
          {
            value: '3-2-1',
            label: 'Level three 3-2-1'
          }
        ]
      }
    ]
  }
]

const formModel = ref({
  moduleName: '',
  status: '正常',
  parentId: 0,
  perms: '',
  visible: '显示',
  moduleSort: 0,
  moduleType: '目录',
  icon: ''
})

const handleConfirm = async () => {
  const res = await addMenuItem(formModel.value)
  console.log(res)
}

const rules = {
  moduleName: [
    { required: true, message: '请输入', trigger: 'blur' }
  ]
}
</script>

<template>
  <MyDialog :title="title" ref="myDialogRef" @onConfirm="handleConfirm">
    <template #form>
      <el-form
        :model="form"
        label-width="80px"
        label-position="left"
        :rules="rules"
      >
        <el-form-item label="上级菜单">
          <el-tree-select
            v-model="formModel.parentId"
            :data="data"
            check-strictly
            :render-after-expand="false"
          />
        </el-form-item>
        <el-form-item label="菜单类型">
          <el-radio-group v-model="formModel.moduleType">
            <el-radio label="目录" />
            <el-radio label="菜单" />
            <el-radio label="按钮" />
          </el-radio-group>
        </el-form-item>
        <el-form-item label="菜单名称">
          <el-input v-model="formModel.moduleName" />
        </el-form-item>
        <el-form-item label="显示排序">
          <el-input-number v-model="formModel.moduleSort" :min="0" />
        </el-form-item>
        <el-form-item label="显示状态">
          <el-radio-group v-model="formModel.visible">
            <el-radio label="显示" />
            <el-radio label="隐藏" />
          </el-radio-group>
        </el-form-item>
        <el-form-item label="菜单状态">
          <el-radio-group v-model="formModel.status">
            <el-radio label="正常" />
            <el-radio label="停用" />
          </el-radio-group>
        </el-form-item>
        <!-- <el-form-item label="邮箱">
          <el-input v-model="form.email" />
        </el-form-item>
        <el-form-item label="用户名称">
          <el-input v-model="form.uname" />
        </el-form-item>
        <el-form-item label="用户密码">
          <el-input v-model="form.password" type="password" />
        </el-form-item>
        <el-form-item label="用户性别">
          <el-select v-model="form.gender" placeholder="请选择性别">
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
        <el-form-item label="备注">
          <el-input
            v-model="form.desc"
            type="textarea"
            placeholder="请输入内容"
          />
        </el-form-item> -->
      </el-form>
    </template>
  </MyDialog>

  <div class="menu-management-page">
    <FilterLayout
      label1="菜单名称"
      label2="状态"
      :defaultShow1="false"
      :defaultShow2="false"
      :isShow="isShow"
      :showCollapse="false"
      @reset="handleReset"
      @query="handleQuery"
      @trigger="handleTrigger"
    >
      <el-form-item label="菜单名称">
        <el-input
          v-model="formModel.moduleName"
          placeholder="请输入"
        ></el-input>
      </el-form-item>
      <el-form-item label="状态">
        <el-select v-model="formModel.status" placeholder="请选择">
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
      :ref="multipleTableRef"
      :data="tableData"
      style="width: 100%"
      row-key="id"
      :header-cell-style="{
        background: '#F5F7FA',
        color: '#909399'
      }"
    >
      <el-table-column
        width="156"
        align="center"
        prop="menuName"
        label="菜单名称"
      />
      <el-table-column width="156" align="center" prop="order" label="排序" />
      <el-table-column
        width="156"
        align="center"
        prop="authority"
        label="权限标识"
      />
      <el-table-column
        width="156"
        align="center"
        prop="comPath"
        label="组件路径"
      />
      <el-table-column width="156" align="center" prop="state" label="状态">
        <template #default="scope"> {{ scope.row.state }} </template>
      </el-table-column>
      <el-table-column
        width="156"
        align="center"
        prop="createDate"
        label="创建时间"
        show-overflow-tooltip
      />
      <el-table-column width="300" align="center" label="操作">
        <template #default>
          <el-button size="small" plain type="primary">添加</el-button>
          <el-button size="small" plain type="success">修改</el-button>
          <el-button size="small" plain type="danger">删除</el-button>
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
