<script setup>
defineProps({
  label1: String,
  label2: String
})
</script>

<template>
  <div class="filter-card">
    <el-card shadow="never">
      <div class="filter-card-elcard">
        <div class="filterForm">
          <el-form :inline="true">
            <el-form-item :label="label1">
              <el-input placeholder="请输入"></el-input>
            </el-form-item>
            <el-form-item :label="label2">
              <el-input placeholder="请输入"></el-input>
            </el-form-item>
            <slot></slot>
          </el-form>
        </div>
        <div class="btns">
          <el-button>重置</el-button>
          <el-button type="primary">查询</el-button>
          <span class="trigger"
            >展开 <span class="iconfont icon-xiala"></span
          ></span>
        </div>
      </div>
    </el-card>
  </div>
</template>

<style lang="scss" scoped>
.filter-card {
  width: 1240px;
  .filter-card-elcard {
    display: flex;
    justify-content: space-between;
    .filterForm {
      .el-form {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        .el-form-item {
          width: 300px;
        }
      }
    }
    .btns {
      .trigger {
        margin-left: 12px;
        color: #409eff;
        cursor: pointer;
        transition: all 0.3s;
        &:hover {
          color: #79bbff;
        }
      }
    }
  }
}
</style>
