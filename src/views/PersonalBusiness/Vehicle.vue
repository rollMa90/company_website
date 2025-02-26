<template>
  <div class="Vehicle-container">
    <div class="vehicle-top">
      <div class="top-bg">
        <el-image class="top-img" :src="image1" :fit="fit"></el-image>
        <div class="top-content">
          {{ $t("message.VehicleServicesIntro") }}
        </div>
      </div>
      <div>
        <!-- <p class="item-title">{{ $t("message.VehicleServicesIntro") }}</p> -->
        <p class="item-content">{{ $t("message.VehicleServicesContent") }}</p>
      </div>
    </div>
    <div class="vehicle-content">
      <el-collapse accordion>
        <el-collapse-item name="1">
          <template #title>
            <div> {{ $t("message.Vehicle_1") }}</div>
          </template>
          <ul class="content-ul">
            <li class="list-style-none">
               {{ $t("message.Vehicle_2") }}
            </li>
            <li>{{ $t("message.Vehicle_3") }}</li>
            <li>{{ $t("message.Vehicle_4") }}</li>
            <li>{{ $t("message.Vehicle_5") }}</li>
            <li>{{ $t("message.Vehicle_6") }}</li>
            <li>{{ $t("message.Vehicle_7") }}</li>
            <li>{{ $t("message.Vehicle_8") }}</li>
            <li class="list-style-none">
              {{ $t("message.Vehicle_9") }}
            </li>
          </ul>
        </el-collapse-item>
        <el-collapse-item name="2">
          <template #title>
            <div>{{ $t("message.Vehicle_10") }}</div>
          </template>
          <ul class="content-ul">
            <li class="list-style-none">
              {{ $t("message.Vehicle_11") }}
            </li>
            <li class="list-style-none">{{ $t("message.Vehicle_12") }}</li>
            <li class="list-style-none">
              {{ $t("message.Vehicle_13") }}
            </li>
            <li class="list-style-none">{{ $t("message.Vehicle_14") }}</li>
            <li>{{ $t("message.Vehicle_15") }}</li>
            <li>{{ $t("message.Vehicle_16") }}</li>
            <li>{{ $t("message.Vehicle_17") }}</li>
            <li>
              {{ $t("message.Vehicle_18") }}
            </li>
            <li>{{ $t("message.Vehicle_19") }}</li>
            <li class="list-style-none">{{ $t("message.Vehicle_20") }}</li>
            <li class="list-style-none">
              {{ $t("message.Vehicle_21") }}
            </li>
            <li class="list-style-none">{{ $t("message.Vehicle_22") }}</li>
            <li>{{ $t("message.Vehicle_23") }}</li>
            <li>{{ $t("message.Vehicle_24") }}</li>
            <li>
              {{ $t("message.Vehicle_25") }}
            </li>
            <li>{{ $t("message.Vehicle_26") }}</li>
            <li>{{ $t("message.Vehicle_27") }}</li>
            <li class="list-style-none">{{ $t("message.Vehicle_28") }}</li>
            <li class="list-style-none">
              {{ $t("message.Vehicle_29") }}
            </li>
            <li class="list-style-none">{{ $t("message.Vehicle_30") }}</li>
            <li>{{ $t("message.Vehicle_31") }}</li>
            <li>{{ $t("message.Vehicle_32") }}</li>
            <li>{{ $t("message.Vehicle_33") }}</li>
            <li>{{ $t("message.Vehicle_34") }}</li>
            <li>{{ $t("message.Vehicle_35") }}</li>
            <li class="list-style-none">
              {{ $t("message.Vehicle_36") }}
            </li>
            <li class="list-style-none">
              {{ $t("message.Vehicle_37") }}
            </li>
          </ul>
        </el-collapse-item>
        <el-collapse-item name="3">
          <template #title>
            <div>{{ $t("message.Vehicle_38") }}</div>
          </template>
          <ul class="content-ul">
            <li class="list-style-none">
              {{ $t("message.Vehicle_39") }}
            </li>
            <li class="list-style-none">
              {{ $t("message.Vehicle_40") }}
            </li>
            <li class="list-style-none">
              {{ $t("message.Vehicle_41") }}
            </li>
            <li class="list-style-none">{{ $t("message.Vehicle_42") }}</li>
            <li>{{ $t("message.Vehicle_43") }}</li>
            <li>{{ $t("message.Vehicle_44") }}</li>
            <li>{{ $t("message.Vehicle_45") }}</li>
            <li>{{ $t("message.Vehicle_46") }}</li>
            <li>{{ $t("message.Vehicle_47") }}</li>
            <li>{{ $t("message.Vehicle_48") }}</li>
            <li class="list-style-none">{{ $t("message.Vehicle_49") }}</li>
            <li class="list-style-none">
              {{ $t("message.Vehicle_50") }}
            </li>
            <li>
              {{ $t("message.Vehicle_51") }}
            </li>
            <li>
              {{ $t("message.Vehicle_52") }}
            </li>
            <li>
              {{ $t("message.Vehicle_53") }}
            </li>
          </ul>
        </el-collapse-item>
        <el-collapse-item name="5">
          <template #title>
            <div>{{ $t("message.Vehicle_54") }}</div>
          </template>
          <ul class="content-ul">
            <li class="list-style-none">
              {{ $t("message.Vehicle_55") }}
            </li>
            <li class="list-style-none">{{ $t("message.Vehicle_56") }}</li>
            <li>{{ $t("message.Vehicle_57") }}</li>
            <li>{{ $t("message.Vehicle_58") }}</li>
            <li>{{ $t("message.Vehicle_59") }}</li>
            <li>{{ $t("message.Vehicle_60") }}</li>
            <li>
              {{ $t("message.Vehicle_61") }}
            </li>
            <li>{{ $t("message.Vehicle_62") }}</li>
          </ul>
        </el-collapse-item>
        <el-collapse-item name="6">
          <template #title>
            <div>{{ $t("message.Vehicle_63") }}</div>
          </template>
          <ul class="content-ul">
            <li class="list-style-none">
              {{ $t("message.Vehicle_64") }}
            </li>
          </ul>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script setup>
import image1 from "@/assets/images/business/vehicle.jpg";

import { reactive } from "vue";

const data = reactive({});
onMounted(() => {});
</script>
<style scoped lang='scss'>
.Vehicle-container {
  width: 1240px;
  margin: 0 auto;
  min-height: 1300px;
  padding-top: 40px;
  .vehicle-top {
    position: relative;
    font-family: 思源黑体;
    .top-bg {
      width: 100%;
      height: 620px;
    }
    .top-img {
      width: 100%;
      height: 100%;
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