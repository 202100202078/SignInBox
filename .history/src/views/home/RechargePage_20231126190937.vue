<script setup>
import { ref } from 'vue'

//选择充值种类
const rechargeChoice = ref(1)
</script>

<template>
  <div class="recharge-page">
    <el-card class="box-cards" shadow="never">
      <el-card class="box-card-coins" shadow="never">
        <template #header>
          <div class="box-card-coins-header">
            <span><strong>我的钱包</strong></span>
            <el-tooltip
              class="box-item"
              effect="dark"
              content="用于平台接口调用"
              placement="top"
            >
              <span>字体图标感叹号</span>
            </el-tooltip>
          </div>
        </template>
        <div class="text">
          <span class="content">
            <strong>金币：</strong>
          </span>
          <span class="money">888</span>
        </div>
      </el-card>
      <el-card class="box-card-mall" shadow="never">
        <template #header>
          <div class="box-card-mall-header">
            <span><strong>积分商城 💰️</strong></span>
          </div>
        </template>
        <div class="items">
          <el-card
            shadow="never"
            v-for="(i, index) in 6"
            :key="i"
            :class="{ active: rechargeChoice === index + 1 }"
            @click="rechargeChoice = index + 1"
          >
            <div class="content">
              <div class="coins"><strong>💰 100 金币</strong></div>
              <div class="desc">增加100坤币到钱包</div>
            </div>
            <div class="bottom"></div
          ></el-card>
        </div>

        <div class="tips">
          本商品为虚拟内容,用于平台接口调用,购买后不支持<span class="emphasize"
            >退换</span
          >。确认支付表示您已阅读并接受
          <span class="link"
            ><el-link
              href="https://gitee.com/ZZZWWWFFF/interface-platform-agreement"
              :underline="false"
              >相关协议</el-link
            >
          </span>
        </div>
      </el-card>
    </el-card>
  </div>
</template>

<style lang="scss" scoped>
.recharge-page {
  width: 1240px;
  .box-cards {
    .box-card-coins {
      margin-bottom: 20px;
      .text {
        font-size: 16px;
        color: rgba(0, 0, 0, 0.88);
        .money {
          color: red;
        }
      }
    }
    .box-card-mall {
      :deep .el-card__header {
        background-color: #f5f5f5;
      }
      .items {
        display: flex;
        flex-wrap: wrap;
        .el-card {
          &.active {
            background-color: rgba(20, 118, 255, 0.08);
          }
          margin-right: 12px;
          margin-bottom: 12px;
          width: 180px;
          height: 192px;
          cursor: pointer;
          background-color: #fff;
          transition: border 0.3s;
          &:hover {
            border: 1px solid #1677ff;
          }
          &:last-child {
            margin-right: 0px;
          }
          :deep .el-card__body {
            height: 100%;
            display: flex;
            flex-direction: column;
            .content {
              font-size: 14px;
              color: rgba(0, 0, 0, 0.88);
              .desc {
                margin-top: 8px;
                color: rgba(0, 0, 0, 0.65);
              }
            }
            .bottom {
              flex: 1;
              background: url('https://api.qimuu.icu/static/KunCoin.9db3ccf6.png')
                no-repeat center/cover;
            }
          }
        }
      }
      .tips {
        display: flex;
        align-items: center;
        justify-content: center;
        color: rgba(0, 0, 0, 0.88);
        .emphasize {
          color: red;
        }
        .link {
          font-size: 16px;
          line-height: 20px;
        }
      }
    }
  }
}
</style>
