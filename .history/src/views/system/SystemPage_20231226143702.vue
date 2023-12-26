<script setup>
import variables from '@/assets/style/variables.module.scss'
import { ref } from 'vue'

const isCollapse = ref(false)
</script>

<template>
  <div class="system-layout">
    <el-container style="height: 100%">
      <el-aside
        width="200px"
        :style="{ width: isCollapse ? '64px' : '200px', transition: '0.5s' }"
      >
        <div
          :style="{
            backgroundColor: variables.menuBackground
          }"
          class="system-layout-aside"
        >
          <div class="logo-show">
            <a @click="$router.replace('/system')">
              <img src="@/assets/avg/logo.svg" alt="logo" class="logo" />
              <h1
                class="title"
                :style="{
                  color: isCollapse ? variables.menuBackground : '#fff'
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
            default-active="1"
            text-color="#fff"
            @open="handleOpen"
            @close="handleClose"
            :collapse="isCollapse"
          >
            <el-menu-item index="1">
              <el-icon><House /></el-icon>
              <span>首页</span>
            </el-menu-item>
            <el-sub-menu index="2">
              <template #title>
                <el-icon><Setting /></el-icon>
                <span>系统管理</span>
              </template>
              <el-menu-item index="2-1">
                <el-icon><House /></el-icon>
                <span>首页</span>
              </el-menu-item>
              <el-menu-item index="2-2">
                <el-icon><House /></el-icon>
                <span>首页</span>
              </el-menu-item>
              <el-menu-item index="2-3">
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
              </el-menu-item>
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
            <el-radio-group v-model="isCollapse">
              <el-radio-button :label="false">expand</el-radio-button>
              <el-radio-button :label="true">collapse</el-radio-button>
            </el-radio-group>
            <el-breadcrumb separator="/">
              <el-breadcrumb-item :to="{ path: '/' }"
                >homepage</el-breadcrumb-item
              >
              <el-breadcrumb-item
                ><a href="/">promotion management</a></el-breadcrumb-item
              >
              <el-breadcrumb-item>promotion list</el-breadcrumb-item>
              <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
        </el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="scss" scoped>
.system-layout {
  height: 100vh;
  .system-layout-aside {
    height: 100%;
    .logo-show {
      height: 50px;
      text-align: center;
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
}
</style>
