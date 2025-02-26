<template>
  <div class="Vehicle-container">
    <div class="vehicle-top">
      <el-image class="top-img" :src="imageSrc" :fit="fit"></el-image>
      <div class="top-content">
        {{ $t("message.ImportExportClearanceTitle") }}
      </div>
      <div>
        <!-- <p class="item-title">{{ $t("message.VehicleServicesIntro") }}</p> -->
        <p class="item-content">
          {{ $t("message.ImportExportClearanceContent") }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import imageSrc from "@/assets/images/business/3 清关服务.jpg";

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