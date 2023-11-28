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

const formatter = (row) => {
  //可以对数据超出指定长度的内容进行省略
  // console.log(col)
  return row.name
}

const filterHandler = (value, row, col) => {
  console.log(value, row, col)
  const property = col['property']
  return row[property] === value
}

const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
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
        stripe
        style="width: 100%"
        :table-layout="tableDensity"
        :default-sort="{}"
        :row-style="{ height: 0 + 'px' }"
        :header-cell-style="{
          background: '#F5F7FA',
          color: '#606266',
          height: '10px',
          padding: '0px'
        }"
      >
        <!-- <el-table-column type="expand">
          <template #default="props">
            <div m="4">
              <p m="t-0 b-2">State: {{ props.row.state }}</p>
              <p m="t-0 b-2">City: {{ props.row.city }}</p>
              <p m="t-0 b-2">Address: {{ props.row.address }}</p>
              <p m="t-0 b-2">Zip: {{ props.row.zip }}</p>
              <h3>Family</h3>
              <el-table :data="props.row.family" :border="childBorder">
                <el-table-column label="Name" prop="name" />
                <el-table-column label="State" prop="state" />
                <el-table-column label="City" prop="city" />
                <el-table-column label="Address" prop="address" />
                <el-table-column label="Zip" prop="zip" />
              </el-table>
            </div>
          </template>
        </el-table-column> -->
        <el-table-column prop="date" label="订单名称" />
        <el-table-column prop="name" label="订单号" :formatter="formatter" />
        <el-table-column prop="address" label="订单状态" />
        <el-table-column
          prop="date"
          label="订单类型"
          :filters="[
            { text: '2016-05-01', value: '2016-05-01' },
            { text: '2016-05-02', value: '2016-05-02' },
            { text: '2016-05-03', value: '2016-05-03' },
            { text: '2016-05-04', value: '2016-05-04' }
          ]"
          :filter-method="filterHandler"
        />
        <el-table-column prop="name" label="支付类型" />
        <el-table-column prop="address" label="订单金额" sortable />
        <el-table-column prop="date" label="增加积分数" sortable />
        <!-- <el-table-column prop="name" label="过期时间" /> -->
        <el-table-column prop="address" label="创建时间" />
        <el-table-column prop="date" label="订单描述" />
        <el-table-column prop="name" label="操作" />
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
