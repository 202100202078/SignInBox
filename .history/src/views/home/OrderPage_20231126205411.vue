<template>
  <div class="order-page">
    <FilterLayout label1="订单名称" label2="订单号">
      <el-form-item label="订单状态">
        <el-select v-model="value" class="m-2" placeholder="Select">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
    </FilterLayout>
  </div>
</template>
