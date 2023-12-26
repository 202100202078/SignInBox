<script setup>
import variables from '@/assets/style/variables.module.scss'
</script>

<template>
  <div class="system-layout">
    <el-container>
      <el-aside width="200px">
        <div
          :style="{
            backgroundColor: variables.menuBackground
          }"
          class="system-layout-aside"
        >
          <div class="logo">
            <a @click="$router.replace('/')">
              <img src="@/assets/avg/logo.svg" alt="logo" class="logo" />
              <h1>API-BOX 接口开放平台</h1>
              <h1>API-BOX 接口开放平台</h1>
              <h1>API-BOX 接口开放平台</h1>
              <h1>API-BOX 接口开放平台</h1>
              <h1>API-BOX 接口开放平台</h1>
              <h1>API-BOX 接口开放平台</h1>
              <h1>API-BOX 接口开放平台</h1>
              <h1>API-BOX 接口开放平台</h1>
              <h1>API-BOX 接口开放平台</h1>
              <h1>API-BOX 接口开放平台</h1>
            </a>
          </div>
          <el-scrollbar class="scrollbar">
            <el-menu
              :default-active="activeMenu"
              :collapse="isCollapse"
              :background-color="variables.menuBackground"
              :text-color="variables.menuColor"
              :unique-opened="true"
              :active-text-color="theme"
              :collapse-transition="false"
              mode="vertical"
            >
              <sidebar-item
                v-for="(route, index) in sidebarRouters"
                :key="route.path + index"
                :item="route"
                :base-path="route.path"
              />
            </el-menu>
          </el-scrollbar>
        </div>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="scss" scoped>
.system-layout {
  height: 100vh;
  .system-layout-aside {
    .logo {
      margin-right: 6px;
      height: 22px;
      width: auto;
    }
  }
}
</style>
