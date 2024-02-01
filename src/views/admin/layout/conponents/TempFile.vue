<script setup></script>

<template>
  <div>
    <div
      class="logo-show"
      :style="{
        'padding-top': isCollapse ? '16px' : '0',
        transition: '1.5s'
      }"
    >
      <a @click="$router.replace('/admin/index')">
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
  </div>
</template>

<style scoped lang="scss"></style>
