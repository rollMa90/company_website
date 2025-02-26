<template>
  <div class="Vehicle-container">
    <div class="vehicle-top">
      <el-image class="top-img" :src="imageSrc" :fit="fit"></el-image>
      <div class="top-content">
        {{ $t("message.HumanResourcesServiceTitle") }}
      </div>
      <div>
        <!-- <p class="item-title">{{ $t("message.VehicleServicesIntro") }}</p> -->
        <p class="item-content">
          {{ $t("message.HumanResourcesServiceContent") }}
        </p>
      </div>
    </div>
    <div class="vehicle-content">
      <el-collapse accordion>
        <el-collapse-item name="1">
          <template #title>
            <div>招聘服务</div>
          </template>
          <ul class="content-ul">
            <li class="list-style-none">
              在ICSI，我们专注于提供全面的招聘服务，帮助您寻找并雇佣最优秀的人才。我们的专业招聘团队将为您甄选最合适的候选人，助力您的企业发展。
            </li>
          </ul>
        </el-collapse-item>
        <el-collapse-item name="2">
          <template #title>
            <div>名义雇主服务</div>
          </template>
          <ul class="content-ul">
            <li class="list-style-none">
              我们提供全面的雇主备案服务(EOR)，帮助企业在无需设立海外法人实体的情况下拓展全球员工队伍。我们的
              EOR服务涵盖人力资源管理、薪资发放及合规事务，让您专注于业务增长。
            </li>
          </ul>
        </el-collapse-item>
        <el-collapse-item name="3">
          <template #title>
            <div>员工管理</div>
          </template>
          <ul class="content-ul">
            <li class="list-style-none">
              在ICSI，我们提供全面的员工管理服务，助您高效管理团队。我们致力于激励员工，提高工作效率和参与度，从而推动您的企业取得更大成功。
            </li>
          </ul>
        </el-collapse-item>
        <el-collapse-item name="4">
          <template #title>
            <div>薪资计算</div>
          </template>
          <ul class="content-ul">
            <li class="list-style-none">
              我们可为您提供准确、及时的薪资计算与发放，并严格遵守所有法律和监管要求。
            </li>
          </ul>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script setup>
import imageSrc from "@/assets/images/business/4 人力资源服务.jpg";

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