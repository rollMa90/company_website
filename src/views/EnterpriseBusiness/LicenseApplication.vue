<template>
  <div class="Vehicle-container">
    <div class="vehicle-top">
      <el-image class="top-img" :src="imageSrc" :fit="fit"></el-image>
      <div class="top-content">
        {{ $t("message.LicenseApplicationTitle") }}
      </div>
      <div>
        <!-- <p class="item-title">{{ $t("message.VehicleServicesIntro") }}</p> -->
        <p class="item-content">
          {{ $t("message.LicenseApplicationContent") }}
        </p>
      </div>
    </div>
    <div class="vehicle-content">
      <el-collapse accordion>
        <el-collapse-item name="1">
          <template #title>
            <div>FDA</div>
          </template>
          <ul class="content-ul">
            <li class="list-style-none">
              FDA颁发多种类型的经营许可证(LTO)申请。包括但不限于以下类型的企业都需要申请
              LTO:
            </li>
            <li>加工食品、药品、化妆品和医疗器械的制造商、贸易商和分销商</li>
            <li>药店、药房及非处方药零售店</li>
            <li>医疗器械零售商，包括配有处方镜片的眼镜店</li>
            <li>家庭/城市有害物质经营机构</li>
            <li>病虫害防治运营商(PCOs)</li>
          </ul>
        </el-collapse-item>
        <el-collapse-item name="2">
          <template #title>
            <div>PS/ICC</div>
          </template>
          <ul class="content-ul">
            <li class="list-style-none">
              菲律宾标准质量安全标签(PS)及进口商品清关标签(ICC)是消费者的指南和保障，可确保消费者所购买的产品符合相关的菲律宾国家标准(PNS)，并经过质量和安全认证。
            </li>
            <li class="list-style-none">
              所有受BPS
              强制产品认证监管的产品，无论是本地生产还是进口产品在进入菲律宾市场前，都必须贴有
              PS标志或ICC 标签。
            </li>
          </ul>
        </el-collapse-item>
        <el-collapse-item name="3">
          <template #title>
            <div>NTC</div>
          </template>
          <ul class="content-ul">
            <li class="list-style-none">
              国家电信委员会(NTC)颁发的许可证或执照是在菲律宾合法运营电信设备或服务(如广播电台、手机经销商、互联网服务提供商等)所必需的文件。
            </li>
            <li class="list-style-none">
              申请人需根据所提供的服务类型，向
              NTC提交申请并附上相关文件。完成所有要求后，NTC将进行审核并颁发相应许可证或执照。
            </li>
          </ul>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script setup>
import imageSrc from "@/assets/images/business/5 证照申请.jpg";

import { reactive } from "vue";

const data = reactive({});
onMounted(() => {});
</script>
<style scoped lang='scss'>
.Vehicle-container {
  width: 1240px;
  margin: 0 auto;
  .vehicle-top {
    position: relative;
    font-family: 思源黑体;
    .top-img {
      width: 100%;
      height: 620px;
    }
    .top-content {
      position: absolute;
      top: 520px;
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