<script setup></script>

<template>
  <div class="system-layout">
    <el-container>
      <el-aside width="200px">
        <div
          :style="{
            backgroundColor: variables.menuBackground
          }"
        >
          <div class="logo">logo</div>
          <el-scrollbar :class="sideTheme" wrap-class="scrollbar-wrapper">
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
