<script setup>
import variables from '@/assets/style/variables.module.scss'
defineProps({
  isCollapse: {
    type: Boolean,
    required: true
  },
  activeIndex: {
    type: String,
    required: true
  }
})
// console.log(prop)
</script>

<template>
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
      <Logo :></Logo>
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
</template>

<style scoped lang="scss">
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
.icon {
  vertical-align: middle;
  margin-right: 5px;
  width: 24px;
  text-align: center;
  font-size: 18px;
  color: #fff;
}
</style>
