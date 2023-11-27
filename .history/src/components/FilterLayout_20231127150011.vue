<script setup>
defineProps({
  label1: String,
  label2: String
})
const emit = defineEmits(['reset', 'query', 'trigger'])
//暴露重置方法和查询方法以及展开
const reset = () => {
  //通知父级reset数据
  emit('reset')
}
const query = () => {
  //通知父级进行筛选数据
  emit('query')
}
const trigger = () => {
  //通知父级进行表单的展示/隐藏
  emit('trigger')
}
// defineExpose({
//   reset,
//   query,
//   trigger
// })
</script>

<template>
  <div class="filter-card">
    <el-card shadow="never">
      <div class="filter-card-elcard">
        <!-- <div class="filterForm"> -->
        <el-form :inline="true">
          <el-form-item :label="label1">
            <el-input placeholder="请输入"></el-input>
          </el-form-item>
          <el-form-item :label="label2">
            <el-input placeholder="请输入"></el-input>
          </el-form-item>
          <slot></slot>
          <el-form-item class="btns">
            <el-button @click="reset">重置</el-button>
            <el-button type="primary" @click="query">查询</el-button>
            <span class="trigger" @click="trigger"
              >展开 <span class="iconfont icon-xiala"></span
            ></span>
          </el-form-item>
        </el-form>
      </div>
      <!-- <div class="btns"></div> -->
      <!-- </div> -->
    </el-card>
  </div>
</template>

<style lang="scss" scoped>
.filter-card {
  width: 1240px;
  .filter-card-elcard {
    // display: flex;
    // justify-content: space-between;
    // .filterForm
    .el-form {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .el-form-item {
        width: 30%;
      }
      .btns {
        :deep .el-form-item__content {
          display: flex;
          justify-content: flex-end;
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
    // }
  }
}
</style>
