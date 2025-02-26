<template>
  <div class="Vehicle-container">
    <div class="vehicle-top">
      <el-image class="top-img" :src="image1" :fit="fit"></el-image>
      <div class="top-content">
        {{ $t("message.LegalAdviceTitle") }}
      </div>
      <div>
        <!-- <p class="item-title">{{ $t("message.VehicleServicesIntro") }}</p> -->
        <p class="item-content">{{ $t("message.LegalAdviceConetent") }}</p>
      </div>
    </div>
    <div class="vehicle-content">
      <el-collapse accordion>
        <el-collapse-item name="1">
          <template #title>
            <div>法律建议</div>
          </template>
          <ul class="content-ul">
            <li class="list-style-none">
              法律建议是由合格的法律专业人士(如律师)提供的法律指导或正式意见。它通常涉及对法律、法规和法律原则的解读，帮助个人或组织了解其权利、义务以及其行为可能产生的法律后果。
            </li>
            <li class="list-style-none">
              法律咨询可涵盖多个法律领域，包括但不限于:合同法，争议解决与诉讼，劳动法，物业法，家庭法，刑法，商法，知识产权法等。
            </li>
          </ul>
        </el-collapse-item>
        <el-collapse-item name="2">
          <template #title>
            <div>合同拟定</div>
          </template>
          <ul class="content-ul">
            <li class="list-style-none">
              合同咨询通常涉及理解和处理协议的条款、条件及其法律影响。以下是合同咨询的关键方面:合同起草与审核，理解法律义务，风险管理，争议解决，专项合同(如雇佣合同、租赁协议、服务合同等)以及合同中的常见条款(如付款条款、终止条款、保密条款、不可抗力条款及争议解决条款)
            </li>
          </ul>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script setup>
import image1 from "@/assets/images/business/8 法律咨询.jpg";

import { reactive } from "vue";

const data = reactive({});
onMounted(() => {});
</script>
<style scoped lang='scss'>
.Vehicle-container {
  width: 1240px;
  min-height: 1300px;
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