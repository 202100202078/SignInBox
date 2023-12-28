<script setup>
import { ref } from 'vue'
const emit = defineEmits([])
const dialogFormVisible = ref(false)

defineProps({
  title: String
})

defineExpose({
  
})
</script>

<template>
  <el-dialog v-model="dialogFormVisible" :title="title">
    <slot name="form">
      <div>我是内部表单</div>
    </slot>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">
          Confirm
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>
