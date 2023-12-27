<script setup>
import variables from '@/assets/style/variables.module.scss'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const isCollapse = ref(false)

const handleAvatarCommand = (command) => {
  //如果是退出登录需要清除本地用户信息
  console.log('清除本地用户信息')
  router.push(command)
}
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
          <div class="logo-show" :style="{}">
            <a @click="$router.replace('/system')">
              <img src="@/assets/avg/logo.svg" alt="logo" class="logo" />
              <h1 class="title" v-if="!isCollapse">API-BOX管理系统</h1>
            </a>
          </div>
          <el-menu
            active-text-color="#ffd04b"
            background-color="#545c64"
            class="el-menu-vertical-demo"
            default-active="/system/index"
            text-color="#fff"
            @open="handleOpen"
            @close="handleClose"
            :collapse="isCollapse"
            :unique-opened="true"
            router
          >
            <el-menu-item index="/system/index">
              <el-icon><House /></el-icon>
              <span>首页</span>
            </el-menu-item>
            <el-sub-menu>
              <template #title>
                <el-icon><Setting /></el-icon>
                <span>系统管理</span>
              </template>
              <el-menu-item index="/system/usermanagement">
                <el-icon><User /></el-icon>
                <span>用户管理</span>
              </el-menu-item>
              <el-menu-item index="/system/rolemanagement">
                <el-icon><User /></el-icon>
                <span>角色管理</span>
              </el-menu-item>
              <!-- <el-menu-item index="2-3">
                <el-icon><House /></el-icon>
                <span>首页</span>
              </el-menu-item>
              <el-menu-item index="2-4">
                <el-icon><House /></el-icon>
                <span>首页</span>
              </el-menu-item>
              <el-menu-item index="2-5">
                <el-icon><House /></el-icon>
                <span>首页</span>
              </el-menu-item>
              <el-menu-item index="2-6">
                <el-icon><House /></el-icon>
                <span>首页</span>
              </el-menu-item>
              <el-menu-item index="2-7">
                <el-icon><House /></el-icon>
                <span>首页</span>
              </el-menu-item>
              <el-menu-item index="2-8">
                <el-icon><House /></el-icon>
                <span>首页</span>
              </el-menu-item> -->
            </el-sub-menu>
            <el-sub-menu index="3">
              <template #title>
                <el-icon><Odometer /></el-icon>
                <span>系统监控</span>
              </template>
              <el-menu-item index="3-1">
                <el-icon><House /></el-icon>
                <span>首页</span>
              </el-menu-item>
              <el-menu-item index="3-2">
                <el-icon><House /></el-icon>
                <span>首页</span>
              </el-menu-item>
              <el-menu-item index="3-3">
                <el-icon><House /></el-icon>
                <span>首页</span>
              </el-menu-item>
              <el-menu-item index="3-4">
                <el-icon><House /></el-icon>
                <span>首页</span>
              </el-menu-item>
              <el-menu-item index="3-5">
                <el-icon><House /></el-icon>
                <span>首页</span>
              </el-menu-item>
              <el-menu-item index="3-6">
                <el-icon><House /></el-icon>
                <span>首页</span>
              </el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="4">
              <template #title>
                <el-icon><FirstAidKit /></el-icon>
                <span>系统工具</span>
              </template>
              <el-menu-item index="4-1">
                <el-icon><House /></el-icon>
                <span>首页</span>
              </el-menu-item>
              <el-menu-item index="4-2">
                <el-icon><House /></el-icon>
                <span>首页</span>
              </el-menu-item>
              <el-menu-item index="4-3">
                <el-icon><House /></el-icon>
                <span>首页</span>
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
                <el-breadcrumb-item :to="{ path: '/system' }"
                  >homepage</el-breadcrumb-item
                >
                <el-breadcrumb-item
                  ><a href="/">promotion management</a></el-breadcrumb-item
                >
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
</style>
