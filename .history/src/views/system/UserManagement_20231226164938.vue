<script setup>
import { ref } from 'vue'

import axios from 'axios'

//筛选表单的显示隐藏
const isShow = ref(false)
// const params = ref({})
// 一个响应式对象存储整个筛选表单的数据(默认显示的两个item需要父子双向绑定)

const datePicker = ref('')

const status = ref('')
const statusOptions = [
  {
    value: 'Option1',
    label: '正常'
  },
  {
    value: 'Option2',
    label: '停用'
  }
]

const handleReset = () => {
  console.log('reset')
}
const handleQuery = () => {
  console.log('query')
}
const handleTrigger = () => {
  // console.log('trigger')
  isShow.value = !isShow.value
}

const test = () => {
  console.log(datePicker.value[1])
  axios
    .get('http://10.161.119.50:9604/api/service/list', {
      params: {
        endTime: datePicker.value[1]
      }
    })
    .then((res) => {
      console.log(res)
    })
}
</script>

<template>
  <button @click="test">按钮</button>
  <div class="user-managemant-page">
    <FilterLayout
      label1="用户名称"
      label2="手机号码"
      :isShow="isShow"
      @reset="handleReset"
      @query="handleQuery"
      @trigger="handleTrigger"
    >
      <el-form-item label="状态" v-show="isShow">
        <el-select v-model="status" placeholder="请选择">
          <el-option
            v-for="item in statusOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="创建时间" v-show="isShow">
        <el-date-picker
          v-model="datePicker"
          type="daterange"
          range-separator="To"
          start-placeholder="Start date"
          end-placeholder="End date"
        />
      </el-form-item>
    </FilterLayout>
    <div class="user-managemant-page-btns">
      <el-button plain type="primary">添加</el-button>
      <el-button plain type="success">修改</el-button>
      <el-button plain type="danger">删除</el-button>
    </div>
    <TableLayout title="我的订单">
      <el-table
        :data="tableData"
        style="width: 100%"
        :table-layout="tableDensity"
        :default-sort="{}"
        :header-cell-style="{
          background: '#F5F7FA',
          color: 'rgba(0, 0, 0, 0.7)',
          'text-align': 'center'
        }"
        :cell-style="{ 'text-align': 'center' }"
      >
        <el-table-column type="expand">
          <template #default="{ row }">
            <div class="description">
              <table>
                <tbody>
                  <tr class="description-row">
                    <td class="description-row-item" colspan="1">
                      <div class="description-row-item-container">
                        <span class="description-row-item-label"
                          >订单名称：</span
                        ><span class="description-row-item-content"
                          >3000坤币</span
                        >
                      </div>
                    </td>
                    <td class="description-row-item" colspan="1">
                      <div class="description-row-item-container">
                        <span class="description-row-item-label"
                          >订单金额 (元)：</span
                        ><span class="description-row-item-content">1.99</span>
                      </div>
                    </td>
                    <td class="description-row-item" colspan="1">
                      <div class="description-row-item-container">
                        <span class="description-row-item-label"
                          >增加积分数量 (个)：</span
                        ><span class="description-row-item-content">3000</span>
                      </div>
                    </td>
                  </tr>
                  <tr class="description-row">
                    <td class="description-row-item" colspan="1">
                      <div class="description-row-item-container">
                        <span class="description-row-item-label"
                          >支付类型：</span
                        ><span class="description-row-item-content"
                          ><span class="ant-tag ant-tag-blue css-18iikkb"
                            >WX</span
                          ></span
                        >
                      </div>
                    </td>
                    <td class="description-row-item" colspan="1">
                      <div class="description-row-item-container">
                        <span class="description-row-item-label"
                          >订单状态：</span
                        ><span class="description-row-item-content"
                          ><span
                            class="ant-badge ant-badge-status ant-badge-not-a-wrapper css-18iikkb"
                            ><span
                              class="ant-badge-status-dot ant-badge-status-default"
                            ></span
                            ><span class="ant-badge-status-text"
                              >已取消</span
                            ></span
                          ></span
                        >
                      </div>
                    </td>
                    <td class="description-row-item" colspan="1">
                      <div class="description-row-item-container">
                        <span class="description-row-item-label"
                          >商品类别：</span
                        ><span class="description-row-item-content"
                          >积分充值</span
                        >
                      </div>
                    </td>
                  </tr>
                  <tr class="description-row">
                    <td class="description-row-item" colspan="1">
                      <div class="description-row-item-container">
                        <span class="description-row-item-label"
                          >过期时间：</span
                        ><span class="description-row-item-content"
                          >2023-11-22 20:43:07</span
                        >
                      </div>
                    </td>
                    <td class="description-row-item" colspan="1">
                      <div class="description-row-item-container">
                        <span class="description-row-item-label"
                          >创建时间：</span
                        ><span class="description-row-item-content"
                          >2023-11-22 20:38:06</span
                        >
                      </div>
                    </td>
                    <td class="description-row-item" colspan="1">
                      <div class="description-row-item-container">
                        <span class="description-row-item-label"
                          >商品描述：</span
                        ><span class="description-row-item-content"
                          >增加3000坤币到钱包</span
                        >
                      </div>
                    </td>
                  </tr>
                  <tr class="description-row">
                    <td class="description-row-item" colspan="3">
                      <div class="description-row-item-container">
                        <span class="description-row-item-label">订单号：</span
                        ><span class="description-row-item-content"
                          >order_86665251664341377979</span
                        >
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="订单名称">
          <template #default="scope">
            <el-text type="primary">{{ scope.row.name }}</el-text>
          </template>
        </el-table-column>
        <el-table-column label="订单号" :formatter="formatter" width="156">
          <template #default="{ row: { orderNum } }">
            {{
              orderNum.length > 12
                ? orderNum.substring(0, 12) + '...'
                : orderNum
            }}
            <ToolTip
              :content="orderNum"
              iconfontClassName="iconfont icon-fuzhi"
            ></ToolTip>
          </template>
        </el-table-column>
        <el-table-column prop="status" label="订单状态">
          <template #default="{ row: { status } }">
            <div>
              <span
                class="iconfont icon-yuandianxiao"
                :style="{ color: status === '已取消' ? 'gray' : 'green' }"
              ></span>
              {{ status }}
            </div>
          </template>
        </el-table-column>
        <el-table-column
          prop="orderType"
          label="订单类型"
          :filters="[
            { text: '2016-05-01', value: '2016-05-01' },
            { text: '2016-05-02', value: '2016-05-02' },
            { text: '2016-05-03', value: '2016-05-03' },
            { text: '2016-05-04', value: '2016-05-04' }
          ]"
          :filter-method="filterHandler"
        />
        <el-table-column prop="payType" label="支付类型" />
        <el-table-column prop="orderAmount" label="订单金额" sortable />
        <el-table-column prop="increasePoints" label="增加积分数" sortable />
        <!-- <el-table-column prop="name" label="过期时间" /> -->
        <el-table-column prop="createDate" label="创建时间" />
        <!-- <el-table-column prop="createDate" label="订单描述" /> -->
        <el-table-column label="操作">
          <span :style="{ color: 'red', cursor: 'pointer' }">删除</span>
        </el-table-column>
      </el-table>
    </TableLayout>
  </div>
</template>

<style lang="scss" scoped>
.user-managemant-page {
  .el-form-item {
    width: 30%;
    .el-select {
      width: 100%;
    }
  }
}
</style>
