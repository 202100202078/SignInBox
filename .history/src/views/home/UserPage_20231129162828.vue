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
          <div class="description">
            <table>
              <tbody>
                <tr class="ant-descriptions-row">
                  <td class="ant-descriptions-item" colspan="1"></td>
                </tr>
                <tr class="ant-descriptions-row">
                  <td class="ant-descriptions-item" colspan="1"></td>
                </tr>
                <tr class="ant-descriptions-row">
                  <td class="ant-descriptions-item" colspan="1">
                    <div class="ant-descriptions-item-container">
                      <span class="ant-descriptions-item-content"
                        ><h4>我的id：</h4>
                        <div class="ant-typography css-18iikkb">
                          1705751115380944897
                          <div
                            role="button"
                            tabindex="0"
                            class="ant-typography-copy"
                            aria-label="Copy"
                            style="
                              border: 0px;
                              background: transparent;
                              padding: 0px;
                              line-height: inherit;
                              display: inline-block;
                            "
                          >
                            <span
                              role="img"
                              aria-label="copy"
                              class="anticon anticon-copy"
                              ><svg
                                viewBox="64 64 896 896"
                                focusable="false"
                                data-icon="copy"
                                width="1em"
                                height="1em"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  d="M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"
                                ></path></svg
                            ></span>
                          </div></div
                      ></span>
                    </div>
                  </td>
                </tr>
                <tr class="ant-descriptions-row">
                  <td class="ant-descriptions-item" colspan="1">
                    <div class="ant-descriptions-item-container">
                      <span class="ant-descriptions-item-content"
                        ><h4>我的邮箱：</h4>
                        <div class="ant-typography css-18iikkb">
                          未绑定邮箱
                        </div></span
                      >
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
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
