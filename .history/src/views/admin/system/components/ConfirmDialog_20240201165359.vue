<script setup>
import { ref } from 'vue'
const dialogVisible = ref(false)

const open = () => {
  dialogVisible.value = true
}

defineProps({
  title: {
    type: String,
    required: true,
    default: '系统提示'
  }
})

defineExpose({
  open
})
</script>

<template>
  <el-dialog v-model="dialogVisible" title="Tips" width="30%" align-center>
    <span>This is a message</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogVisible = false">
          Confirm
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<style scoped lang="scss"></style>
