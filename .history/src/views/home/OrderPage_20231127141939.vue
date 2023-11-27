<script setup>
const options = [
  {
    value: 'Option1',
    label: 'Option1'
  },
  {
    value: 'Option2',
    label: 'Option2'
  },
  {
    value: 'Option3',
    label: 'Option3'
  },
  {
    value: 'Option4',
    label: 'Option4'
  },
  {
    value: 'Option5',
    label: 'Option5'
  }
]
</script>

<template>
  <div class="order-page">
    <FilterLayout label1="订单名称" label2="订单号">
      <el-form-item label="订单状态">
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="订单类型">
        <el-select
          v-model="value"
          placeholder="请选择"
          :style="{ width: '298px' }"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="支付方式">
        <el-select
          v-model="value"
          placeholder="请选择"
          :style="{ width: '298px' }"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="订单金额">
        <el-input placeholder="请输入" :style="{ width: '298px' }"></el-input>
      </el-form-item>
      <el-form-item label="增加积分数">
        <el-input placeholder="请输入" :style="{ width: '298px' }"></el-input>
      </el-form-item>
    </FilterLayout>
  </div>
</template>

<style lang="scss" scoped>
.order-page {
  .el-input {
    width: 298px;
  }
}
</style>
