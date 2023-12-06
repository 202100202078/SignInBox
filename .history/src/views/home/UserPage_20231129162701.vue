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
                <tr class="descriptions-row">
                  <td class="descriptions-item" colspan="1">
                    <div class="descriptions-item-container">
                      <span class="descriptions-item-content"
                        ><h4>昵称：</h4>
                        <div class="typography css-18iikkb">
                          哈哈哈
                          <div
                            role="button"
                            tabindex="0"
                            class="typography-edit"
                            aria-label="编辑"
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
                              aria-label="edit"
                              class="anticon anticon-edit"
                              ><svg
                                viewBox="64 64 896 896"
                                focusable="false"
                                data-icon="edit"
                                width="1em"
                                height="1em"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  d="M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"
                                ></path></svg
                            ></span>
                          </div></div
                      ></span>
                    </div>
                  </td>
                </tr>
                <tr class="descriptions-row">
                  <td class="descriptions-item" colspan="1">
                    <div class="descriptions-item-container">
                      <span class="descriptions-item-content"
                        ><h4>我的邀请码：</h4>
                        <div class="typography css-18iikkb">
                          8PaVVjaf
                          <div
                            role="button"
                            tabindex="0"
                            class="typography-copy"
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
                <tr class="descriptions-row">
                  <td class="descriptions-item" colspan="1">
                    <div class="descriptions-item-container">
                      <span class="descriptions-item-content"
                        ><h4>我的id：</h4>
                        <div class="typography css-18iikkb">
                          1705751115380944897
                          <div
                            role="button"
                            tabindex="0"
                            class="typography-copy"
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
                <tr class="descriptions-row">
                  <td class="descriptions-item" colspan="1">
                    <div class="descriptions-item-container">
                      <span class="descriptions-item-content"
                        ><h4>我的邮箱：</h4>
                        <div class="typography css-18iikkb">
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
