<script setup>
import { ref } from 'vue'
import EpWarningFilled from '~icons/ep/warning-filled'
const dialogVisible = ref(false)

const open = () => {
  dialogVisible.value = true
}

defineProps({
  title: {
    type: String,
    required: true,
    default: '系统提示'
  },
  content: {
    type: String,
    required: true
  }
})

const emit = defineEmits([''])

defineExpose({
  open
})
</script>

<template>
  <el-dialog v-model="dialogVisible" :title="title" width="30%" align-center>
    <div class="content">
      <EpWarningFilled class="icon"></EpWarningFilled>
      <span>{{ content }}</span>
    </div>
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

<style scoped lang="scss">
.content {
  display: flex;
  align-items: center;
  .icon {
    margin-right: 4px;
    font-size: 22px;
    color: rgb(255, 186, 0);
  }
}
</style>
