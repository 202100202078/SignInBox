<script setup>
import { ref } from 'vue'
const dialogFormVisible = ref(false)

const props = defineProps({
  title: String
})

const open = () => {
  dialogFormVisible.value = true
}

const confirm = () => {
  // 关闭dialog
  dialogFormVisible.value = false
  // 根据title的不同向父级发送不同命令
  if (props.title === '添加菜单' || props.title === '添加角色') {
    emit('onAddConfirm')
  } else if (props.title === '编辑菜单') {
    emit('onEditConfirm')
  } else if (props.title === '添加子菜单') {
    emit('onAddChildConfirm')
  }
}

const emit = defineEmits(['onAddConfirm', 'onEditConfirm', 'onAddChildConfirm'])

defineExpose({
  open
})
</script>

<template>
  <el-dialog v-model="dialogFormVisible" :title="title" align-center>
    <slot name="form"> </slot>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="confirm"> Confirm </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<style lang="scss" scoped></style>
