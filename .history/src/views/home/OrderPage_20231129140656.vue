<script setup>
import { ref } from 'vue'

//订单状态
const status = ref('')
const statusOptions = [
  {
    value: 'Option1',
    label: '未支付'
  },
  {
    value: 'Option2',
    label: '支付成功'
  },
  {
    value: 'Option3',
    label: '已取消'
  }
]
//订单类型
const type = ref('')
const typeOptions = [
  {
    value: 'Option1',
    label: 'VIP会员'
  },
  {
    value: 'Option2',
    label: '积分充值'
  },
  {
    value: 'Option3',
    label: '充值活动'
  }
]
//支付方式
const pay = ref('')
const payOptions = [
  {
    value: 'Option1',
    label: '微信'
  },
  {
    value: 'Option2',
    label: '支付宝'
  }
]

//筛选表单的显示隐藏
const isShow = ref(false)
// const params = ref({})
// 一个响应式对象存储整个筛选表单的数据(默认显示的两个item需要父子双向绑定)

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

const tableDensity = ref('fixed')

const formatter = (row, col) => {
  //可以对数据超出指定长度的内容进行省略
  // console.log(col)
  const property = col['property']
  const res = row[property]
  return res.length > 12 ? res.substring(0, 12) + '...' : res
}

const filterHandler = (value, row, col) => {
  console.log(value, row, col)
  const property = col['property']
  return row[property] === value
}

const tableData = [
  {
    createDate: '2016-05-02',
    name: 'Tom',
    status: '已取消',
    orderType: '积分充值',
    payType: '支付宝',
    orderAmount: 9.99,
    increasePoints: 3000,
    orderNum: 'order_86665251664341377979'
  },
  {
    createDate: '2016-05-02',
    name: 'Tom',
    status: '已取消',
    orderType: '积分充值',
    payType: '支付宝',
    orderAmount: 9.99,
    increasePoints: 3000,
    orderNum: 'order_86665251664341377979'
  },
  {
    createDate: '2016-05-02',
    name: 'Tom',
    status: '已取消',
    orderType: '积分充值',
    payType: '支付宝',
    orderAmount: 9.99,
    increasePoints: 3000,
    orderNum: 'order_86665251664341377979'
  },
  {
    createDate: '2016-05-02',
    name: 'Tom',
    status: '已取消',
    orderType: '积分充值',
    payType: '支付宝',
    orderAmount: 9.99,
    increasePoints: 3000,
    orderNum: 'order_86665251664341377979'
  },
  {
    createDate: '2016-05-02',
    name: 'Tom',
    status: '已取消',
    orderType: '积分充值',
    payType: '支付宝',
    orderAmount: 9.99,
    increasePoints: 3000,
    orderNum: 'order_86665251664341377979'
  },
  {
    createDate: '2016-05-02',
    name: 'Tom',
    status: '已取消',
    orderType: '积分充值',
    payType: '支付宝',
    orderAmount: 9.99,
    increasePoints: 3000,
    orderNum: 'order_86665251664341377979'
  }
]
</script>

<template>
  <div class="order-page">
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
            <div class="detail">
              <table>
                <tbody>
                  <tr class="description-row">
                    <td class="description-item" colspan="1">
                      <div class="description-item-container">
                        <span class="description-item-label">订单名称：</span
                        ><span class="description-item-content">3000坤币</span>
                      </div>
                    </td>
                    <td class="description-item" colspan="1">
                      <div class="description-item-container">
                        <span class="description-item-label"
                          >订单金额 (元)：</span
                        ><span class="description-item-content">1.99</span>
                      </div>
                    </td>
                    <td class="description-item" colspan="1">
                      <div class="description-item-container">
                        <span class="description-item-label"
                          >增加积分数量 (个)：</span
                        ><span class="description-item-content">3000</span>
                      </div>
                    </td>
                  </tr>
                  <tr class="description-row">
                    <td class="description-item" colspan="1">
                      <div class="description-item-container">
                        <span class="description-item-label">支付类型：</span
                        ><span class="description-item-content"
                          ><span class="ant-tag ant-tag-blue css-18iikkb"
                            >WX</span
                          ></span
                        >
                      </div>
                    </td>
                    <td class="description-item" colspan="1">
                      <div class="description-item-container">
                        <span class="description-item-label">订单状态：</span
                        ><span class="description-item-content"
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
                    <td class="description-item" colspan="1">
                      <div class="description-item-container">
                        <span class="description-item-label">商品类别：</span
                        ><span class="description-item-content">积分充值</span>
                      </div>
                    </td>
                  </tr>
                  <tr class="description-row">
                    <td class="description-item" colspan="1">
                      <div class="description-item-container">
                        <span class="description-item-label">过期时间：</span
                        ><span class="description-item-content"
                          >2023-11-22 20:43:07</span
                        >
                      </div>
                    </td>
                    <td class="description-item" colspan="1">
                      <div class="description-item-container">
                        <span class="description-item-label">创建时间：</span
                        ><span class="description-item-content"
                          >2023-11-22 20:38:06</span
                        >
                      </div>
                    </td>
                    <td class="description-item" colspan="1">
                      <div class="description-item-container">
                        <span class="description-item-label">商品描述：</span
                        ><span class="description-item-content"
                          >增加3000坤币到钱包</span
                        >
                      </div>
                    </td>
                  </tr>
                  <tr class="description-row">
                    <td class="description-item" colspan="3">
                      <div class="description-item-container">
                        <span class="description-item-label">订单号：</span
                        ><span class="description-item-content"
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
.order-page {
  .el-form-item {
    width: 30%;
    .el-select {
      width: 100%;
    }
  }
  .el-table {
  }
}
</style>
