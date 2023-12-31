<script setup>
defineProps({
  filterForm: Object,
  label1: String,
  label2: String,
  defaultShow1: {
    type: Boolean,
    default: true
  },
  defaultShow2: {
    type: Boolean,
    default: true
  },
  isShow: Boolean,
  showCollapse: Boolean
})
const emit = defineEmits(['reset', 'query', 'trigger'])
//暴露重置方法和查询方法以及展开
const reset = () => {
  //获取form对象重置数据即可
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
    <el-card shadow="never" :body-style="{ 'padding-bottom': '4px' }">
      <el-form :inline="true">
        <el-form-item :label="label1" v-if="defaultShow1">
          <el-input placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item :label="label2" v-if="defaultShow2">
          <el-input placeholder="请输入"></el-input>
        </el-form-item>
        <slot></slot>
        <el-form-item class="btns">
          <el-button @click="reset">重置</el-button>
          <el-button type="primary" @click="query">查询</el-button>
          <span class="trigger" @click="trigger" v-if="showCollapse"
            >展开
            <span
              :class="{
                iconfont: true,
                'icon-xiala': !isShow,
                'icon-shouqi': isShow
              }"
            ></span
          ></span>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<style lang="scss" scoped>
.filter-card {
  margin-bottom: 16px;
  width: 1240px;
  .el-form {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    .el-form-item {
      width: 30%;
      .el-select {
        width: 100%;
      }
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
}
</style>
