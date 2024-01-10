<script setup>
import { ref } from 'vue'
const dialogFormVisible = ref(false)

defineProps({
  title: String
})

const open = () => {
  dialogFormVisible.value = true
}

const confirm = () => {
  dialogFormVisible.value = false
  console.log(title)
  if (title === '添加菜单') {
    emit('onAddConfirm')
  } else if (title === '编辑菜单') {
    emit('onEditConfirm')
  }
}

const emit = defineEmits(['onConfirm'])

defineExpose({
  open
})
</script>

<template>
  <el-dialog v-model="dialogFormVisible" :title="title" align-center>
    <slot name="form">
      <div>我是内部表单</div>
    </slot>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="confirm"> Confirm </el-button>
      </span>
    </template>
  </el-dialog>
</template>
