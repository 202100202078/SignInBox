<script setup>
import variables from '@/assets/style/variables.module.scss'
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { onMounted } from 'vue'
import { useUserStore } from '@/stores/modules/user.js'
const userStore = useUserStore()
const route = useRoute()
const router = useRouter()
const isCollapse = ref(false)

const activeIndex = ref('')
// const activeMenu = ref([])

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

onMounted(() => {
  // 页面刷新使得侧边栏为当前激活路由
  activeIndex.value = route.path
})
</script>

<template>
  <div class="system-layout">
    <el-container style="height: 100%">
      <el-aside
        width="200px"
        :style="{ width: isCollapse ? '64px' : '200px' }"
        class="el-aside"
      >
        <div
          :style="{
            backgroundColor: variables.menuBackground
          }"
          class="system-layout-aside"
        >
          <div
            class="logo-show"
            :style="{
              'padding-top': isCollapse ? '16px' : '0',
              transition: '1.5s'
            }"
          >
            <a @click="$router.replace('/system')">
              <img src="@/assets/avg/logo.svg" alt="logo" class="logo" />
              <h1
                class="title"
                :style="{
                  opacity: isCollapse ? 0 : 1,
                  transition: '0.5s',
                  color: isCollapse ? '#545c64' : '#fff'
                }"
              >
                API-BOX管理系统
              </h1>
            </a>
          </div>
          <el-menu
            active-text-color="#ffd04b"
            background-color="#545c64"
            class="el-menu-vertical-demo"
            :default-active="activeIndex"
            text-color="#fff"
            @open="handleOpen"
            @close="handleClose"
            :collapse="isCollapse"
            :unique-opened="true"
            router
          >
            <el-menu-item index="/admin/index">
              <el-icon><House /></el-icon>
              <span>首页</span>
            </el-menu-item>
            <el-sub-menu index="2">
              <template #title>
                <el-icon><Setting /></el-icon>
                <span>系统管理</span>
              </template>
              <el-menu-item index="/admin/system/user">
                <el-icon><User /></el-icon>
                <span>用户管理</span>
              </el-menu-item>
              <el-menu-item index="/admin/system/role">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-jiaoseguanli"></use>
                </svg>
                <span>角色管理</span>
              </el-menu-item>
              <el-menu-item index="/admin/system/menu">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-yunyingbaobiao"></use>
                </svg>
                <span>菜单管理</span>
              </el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="3">
              <template #title>
                <el-icon><Odometer /></el-icon>
                <span>系统监控</span>
              </template>
              <el-menu-item index="3-1">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-a-zaixianyonghu2"></use>
                </svg>
                <span>在线用户</span>
              </el-menu-item>
              <el-menu-item index="3-2">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-dingshirenwu"></use>
                </svg>
                <span>定时任务</span>
              </el-menu-item>
              <el-menu-item index="3-3">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-a-shujujiankong2"></use>
                </svg>
                <span>数据监控</span>
              </el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="4">
              <template #title>
                <el-icon><FirstAidKit /></el-icon>
                <span>系统工具</span>
              </template>
              <el-menu-item index="4-1">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-yunyingbaobiao"></use>
                </svg>
                <span>表单构建</span>
              </el-menu-item>
              <!-- <el-menu-item index="4-2">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-daimashengcheng"></use>
                </svg>
                <span>代码生成</span>
              </el-menu-item> -->
              <el-menu-item index="4-3">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-jiekou1"></use>
                </svg>
                <span>系统接口</span>
              </el-menu-item>
            </el-sub-menu>
          </el-menu>
        </div>
      </el-aside>
      <el-container>
        <el-header>
          <div class="header-top">
            <div class="header-top-left">
              <el-radio-group v-model="isCollapse" class="collapseBtns">
                <el-radio-button :label="false">expand</el-radio-button>
                <el-radio-button :label="true">collapse</el-radio-button>
              </el-radio-group>
              <el-breadcrumb separator="/">
                <el-breadcrumb-item>promotion list</el-breadcrumb-item>
                <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
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
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="scss" scoped>
.system-layout {
  height: 100vh;
  .el-aside {
    transition: all 0.5s;
  }
  .system-layout-aside {
    height: 100%;
    .logo-show {
      height: 50px;
      text-align: center;
      cursor: pointer;
      .logo {
        margin-right: 4px;
        width: 28px;
        vertical-align: middle;
      }
      .title {
        display: inline-block;
        font-size: 14px;
        line-height: 50px;
        font-weight: 600;
        vertical-align: middle;
        color: #fff;
      }
    }
  }

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
.icon {
  vertical-align: middle;
  margin-right: 5px;
  width: 24px;
  text-align: center;
  font-size: 18px;
  color: #fff;
}
</style>
