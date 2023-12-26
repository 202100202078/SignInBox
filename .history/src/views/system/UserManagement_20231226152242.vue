<script setup></script>

<template>
  <div class="content">
    <FilterLayout
      label1="订单名称"
      label2="订单号"
      :isShow="isShow"
      @reset="handleReset"
      @query="handleQuery"
      @trigger="handleTrigger"
    >
      <el-form-item label="订单状态" v-show="isShow">
        <el-select v-model="status" placeholder="请选择">
          <el-option
            v-for="item in statusOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="订单类型" v-show="isShow">
        <el-select v-model="type" placeholder="请选择">
          <el-option
            v-for="item in typeOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="支付方式" v-show="isShow">
        <el-select v-model="pay" placeholder="请选择">
          <el-option
            v-for="item in payOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="订单金额" v-show="isShow">
        <el-input placeholder="请输入"></el-input>
      </el-form-item>
      <el-form-item label="增加积分数" v-show="isShow">
        <el-input placeholder="请输入"></el-input>
      </el-form-item>
    </FilterLayout>
  </div>
</template>
