<template>
  <div class="Vehicle-container">
    <div class="vehicle-top">
      <el-image class="top-img" :src="imageSrc" :fit="fit"></el-image>
      <div class="top-content">
        {{ $t("message.AccountingAndTaxationTitle") }}
      </div>
      <div>
        <!-- <p class="item-title">{{ $t("message.VehicleServicesIntro") }}</p> -->
        <p class="item-content">
          {{ $t("message.AccountingAndTaxationContent") }}
        </p>
      </div>
    </div>
    <div class="vehicle-content">
      <el-collapse accordion>
        <el-collapse-item name="1">
          <template #title>
            <div>代理记账</div>
          </template>
          <ul class="content-ul">
            <li class="list-style-none">ICSI提供会计服务外包，包括:</li>
            <li>1.记录每月交易</li>
            <li>
              2.编制月度试算表、资产负债表、损益表、现金流量表及账户明细/对账
            </li>
            <li>3.编制月度银行对账单</li>
            <li>4.根据年度审计调整更新试算表</li>
            <li>5.为外部审计师审核准备法定财务报表草案</li>
          </ul>
        </el-collapse-item>
        <el-collapse-item name="2">
          <template #title>
            <div>税务申报</div>
          </template>
          <ul class="content-ul">
            <li class="list-style-none">
              根据企业的具体情况，我们可以为您评估计算企业的税费情况并帮您完成政府税务的申报，让您不再为税务情况担忧。
            </li>
          </ul>
        </el-collapse-item>
        <el-collapse-item name="3">
          <template #title>
            <div>两险一金缴纳</div>
          </template>
          <ul class="content-ul">
            <li class="list-style-none">
              ICSI可以协助您的公司完成在各政府机构的注册(SSS、PhilHealth和HDMF)，并处理每月应付的两险一金款项。
            </li>
          </ul>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script setup>
import imageSrc from "@/assets/images/business/2 财税审计.jpg";

import { reactive } from "vue";

const data = reactive({});
onMounted(() => {});
</script>
<style scoped lang='scss'>
.Vehicle-container {
  width: 1240px;
  margin: 0 auto;
  padding-top: 40px;
  .vehicle-top {
    position: relative;
    font-family: 思源黑体;
    .top-img {
      width: 100%;
      height: 1220px;
    }
    .top-content {
      position: absolute;
      top: 1100px;
      left: 20px;
      font-size: 60px;
      color: #ffffff;
      line-height: 1.5;
      text-shadow: 0px 0px 13px black;
      text-align: left;
      font-family: 思源黑体;
    }
    .item-title {
      font-size: 50px;
      color: #374151;
      line-height: 48px;
      height: 48px;
      margin: 20px 0px;
    }
    .item-content {
      font-size: 26px !important;
      color: #374151 !important;
      line-height: 36px;
      // width: 1000px;
      // margin: 20px 20px;
    }
  }
  .vehicle-content {
    width: 1140px;
    margin: 0 auto;
  }
  .list-style-none {
    list-style-type: none;
    position: relative;
    left: -48px;
  }
  .content-ul {
    padding-left: 68px;
  }
  :deep {
    .el-collapse-item__arrow {
      font-size: 24px;
    }
    .el-collapse-item__header {
      padding-left: 12px;
      font-size: 24px;
      color: #374151 !important;
      padding: 10px 10px;
      height: 60px;
      font-family: 思源黑体;
    }
    .el-collapse-item__content {
      font-size: 20px;
      color: #615f5fbb;
    }
    .el-collapse-item__wrap {
      max-height: min-content;
    }
  }
}
</style>