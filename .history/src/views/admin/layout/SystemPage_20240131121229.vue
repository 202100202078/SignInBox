<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { onMounted } from 'vue'
import { useUserStore } from '@/stores/modules/user.js'
import MySlider from './conponents/MySlider.vue'
const userStore = useUserStore()
const route = useRoute()
const router = useRouter()
// 控制侧边栏是否折叠
const isCollapse = ref(false)
// 记录当前侧边栏
const activeIndex = ref('')

const handleAvatarCommand = async (command) => {
  //如果是退出登录需要清除本地用户信息
  // console.log('清除本地用户信息')
  if (command === '/login') {
    await ElMessageBox.confirm('你确认退出登录吗？', '温馨提示', {
      type: 'warning',
      confirmButtonText: '确认',
      cancelButtonText: '取消'
    })
    userStore.setToken('')
    // userStore.setUser({})
    // router.push(`/login`)
  } else {
    // router.push(`/user/${command}`)
  }
  router.push(command)
}

// Tab标签相关
// let tabIndex = 2
// const editableTabsValue = ref('2')
// const editableTabs = ref([
//   {
//     title: 'Tab 1',
//     name: '1',
//     content: 'Tab 1 content'
//   },
//   {
//     title: 'Tab 2',
//     name: '2',
//     content: 'Tab 2 content'
//   }
// ])

// const handleTabsEdit = (targetName, action) => {
//   if (action === 'add') {
//     const newTabName = `${++tabIndex}`
//     editableTabs.value.push({
//       title: 'New Tab',
//       name: newTabName,
//       content: 'New Tab content'
//     })
//     editableTabsValue.value = newTabName
//   } else if (action === 'remove') {
//     const tabs = editableTabs.value
//     let activeName = editableTabsValue.value
//     if (activeName === targetName) {
//       tabs.forEach((tab, index) => {
//         if (tab.name === targetName) {
//           const nextTab = tabs[index + 1] || tabs[index - 1]
//           if (nextTab) {
//             activeName = nextTab.name
//           }
//         }
//       })
//     }

//     editableTabsValue.value = activeName
//     editableTabs.value = tabs.filter((tab) => tab.name !== targetName)
//   }
// }

onMounted(() => {
  // 页面刷新使得侧边栏为当前激活路由
  activeIndex.value = route.path
})
</script>

<template>
  <div class="system-layout">
    <el-container style="height: 100%">
      <MySlider :isCollapse="isCollapse" :activeIndex="activeIndex"></MySlider>
      <el-container>
        <el-header>
          <div class="header-top">
            <div class="header-top-left">
              <el-radio-group v-model="isCollapse" class="collapseBtns">
                <el-radio-button :label="false">expand</el-radio-button>
                <el-radio-button :label="true">collapse</el-radio-button>
              </el-radio-group>
              <el-breadcrumb separator="/">
                <el-breadcrumb-item
                  v-for="(item, index) in $route.meta.breadInfo"
                  :key="index"
                  >{{ item }}</el-breadcrumb-item
                >
              </el-breadcrumb>
            </div>
            <div class="header-top-right">
              <el-dropdown @command="handleAvatarCommand">
                <span class="el-dropdown-link">
                  <span>头像</span>
                  <span>用户昵称</span>
                </span>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item command="/home/user"
                      >个人中心</el-dropdown-item
                    >
                    <el-dropdown-item command="/login"
                      >退出登录</el-dropdown-item
                    >
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            </div>
          </div>
          <!-- <div class="header-bottom">
            <el-tabs
              v-model="editableTabsValue"
              type="card"
              editable
              class="my-tabs"
              @edit="handleTabsEdit"
            >
              <el-tab-pane label="首页" :closeable="false">32444444444444</el-tab-pane>
              <el-tab-pane
                v-for="item in editableTabs"
                :key="item.name"
                :label="item.title"
                :name="item.name"
              >
                {{ item.content }}
              </el-tab-pane>
            </el-tabs>
          </div> -->
        </el-header>
        <el-main>
          <router-view v-slot="{ Component }">
            <transition name="slide-fade">
              <component :is="Component" />
            </transition>
          </router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="scss" scoped>
.system-layout {
  height: 100vh;

  .header-top {
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #eee;
    .header-top-left {
      display: flex;
      align-items: center;
      .collapseBtns {
        margin-right: 10px;
      }
    }
    .header-top-right {
      margin-left: 6px;
      display: flex;
      align-items: center;
      font-size: 16px;
      border-radius: 6px;
      height: 56px;
      line-height: 56px;
      &:hover {
        background-color: rgba(0, 0, 0, 0.1);
        color: rgba(0, 0, 0, 1);
        transition: color 0.3s;
      }
      .el-dropdown {
        :deep(:focus-visible) {
          outline: none;
        }
        .el-dropdown-link {
          cursor: pointer;
          color: rgba(0, 0, 0, 0.7);
          font-size: 16px;
          display: flex;
          align-items: center;
        }
      }
    }
  }
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.7s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(40px);
  opacity: 0;
}
</style>
