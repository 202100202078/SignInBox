<script setup>
import { ref } from 'vue'
import { Plus } from '@element-plus/icons-vue'

const fileList = ref([
  {
    name: 'food.jpeg',
    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
  }
])
//控制上传头像圆圈的显示隐藏
const isShow = ref(true)

const dialogImageUrl = ref('')
const dialogVisible = ref(false)

const handleRemove = (uploadFile, uploadFiles) => {
  isShow.value = false
  console.log(uploadFile, uploadFiles)
}

const handlePictureCardPreview = (uploadFile) => {
  dialogImageUrl.value = uploadFile.url
  dialogVisible.value = true
}

const handleAvatarChange = () => {
  isShow.value = true
}
</script>

<template>
  <div class="user-page">
    <el-card shadow="never" class="boxCard">
      <el-card shadow="never" class="userInfoSetting">
        <template #header>
          <div class="card-header">
            <span><strong>个人信息设置</strong></span>
            <div class="right">
              <el-button class="button">绑定邮箱</el-button>
              <el-button class="button">提交修改</el-button>
            </div>
          </div>
        </template>
        <div class="content">
          <div class="avatar">
            <el-upload
              v-model:file-list="fileList"
              list-type="picture-card"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove"
              :on-change="handleAvatarChange"
              :auto-upload="false"
              :limit="1"
              :class="{ showUpload: isShow }"
            >
              <el-icon><Plus /></el-icon>
            </el-upload>

            <el-dialog
              v-model="dialogVisible"
              :title="'头像名称'"
              center
              width="33%"
              :lock-scroll="true"
            >
              <img :src="dialogImageUrl" alt="头像不见了" />
            </el-dialog>
          </div>
        </div>
      </el-card>
    </el-card>
  </div>
</template>

<style lang="scss" scoped>
.user-page {
  width: 1240px;
  .boxCard {
    .userInfoSetting {
      .card-header {
        display: flex;
        justify-content: space-between;
      }
      .content {
        .avatar {
          img {
            width: 100%;
            height: 100%;
          }
          :deep .el-upload-list__item-status-label,
          :deep .el-icon--close-tip {
            display: none;
          }
          :deep .el-upload-list__item,
          :deep .el-upload {
            border-radius: 50%;
          }
          :deep .el-dialog {
            border-radius: 36px;
          }
          .showUpload {
            :deep .el-upload--picture-card {
              display: none;
            }
          }
        }
      }
    }
  }
}
</style>
