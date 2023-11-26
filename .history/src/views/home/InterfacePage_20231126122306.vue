<script setup>
import { Search } from '@element-plus/icons-vue'
import { ref } from 'vue'
//搜索框
const searchInput = ref('')
</script>

<template>
  <div class="my-container">
    <el-card shadow="hover" class="header">
      <el-input
        v-model="searchInput"
        placeholder="没有找到心仪的接口？快搜索一下吧"
        size="large"
        show-word-limit
        maxlength="50"
      >
        <template #append>
          <el-button type="primary" :icon="Search" dark="true"
            >Search</el-button
          >
        </template>
      </el-input>
    </el-card>
    <div class="main">main</div>
  </div>
</template>

<style lang="scss" scoped>
.my-container {
  .header {
    padding: 24px;
    width: 1240px;
    height: 142px;
    text-align: center;
    .el-input {
      width: 50%;
      .el-button–mini {
color: #fff;
background-color: #FC813B;
border-color: #FC813B;
}
.el-button–mini:hover{
background-color: #EF9E6F;
border-color: #EF9E6F;
}
.el-button–mini:focus{
background-color: #EF9E6F;
border-color: #EF9E6F;
}
————————————————
版权声明：本文为CSDN博主「小白菜瓦罐米线」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/weixin_44953664/article/details/102722624
    }
  }
}
</style>
