<template>
  <div class="Vehicle-container">
    <div class="vehicle-top">
      <el-image class="top-img" :src="imageSrc" :fit="fit"></el-image>
      <div class="top-content">
        {{ $t("message.BusinessRegistrationTitle") }}
      </div>
      <div>
        <!-- <p class="item-title">{{ $t("message.VehicleServicesIntro") }}</p> -->
        <p class="item-content">
          {{ $t("message.BusinessRegistrationContent") }}
        </p>
      </div>
    </div>
    <div class="vehicle-content">
      <el-collapse accordion>
        <el-collapse-item name="1">
          <template #title>
            <div>公司注册</div>
          </template>
          <ul class="content-ul">
            <li class="list-style-none">SEC:</li>
            <li>本土企业</li>
            <li>外资企业</li>
            <li>一人公司</li>
            <li>少于五人公司</li>
            <li>外资企业分公司</li>
            <li>外资企业代表处</li>
            <li class="list-style-none">特殊执照申请:</li>
            <li>菲律宾经济区管理局(PEZA)</li>
            <li>菲律宾承包商认证委员会(PCAB)</li>
            <li>海关进口/出口许可(BOC)</li>
            <li>食品药品管理局(FDA)</li>
            <li>环境与自然资源部(DENR)</li>
            <li>陆路运输办公室(LTO)</li>
          </ul>
        </el-collapse-item>
        <el-collapse-item name="2">
          <template #title>
            <div>商标注册</div>
          </template>
          <ul class="content-ul">
            <li class="list-style-none">
              菲律宾商标制度遵循“先申请制”，这意味着商标权将授予最先提交申请的一方。
            </li>
            <li class="list-style-none">商标申请要求包括:</li>
            <li>填写完整的商标申请表</li>
            <li>商标图样副本</li>
            <li>申请涵盖的商品和服务类别(尼斯分类)</li>
          </ul>
        </el-collapse-item>
        <el-collapse-item name="3">
          <template #title>
            <div>虚拟办公室</div>
          </template>
          <ul class="content-ul">
            <li class="list-style-none">
              先从虚拟办公开始您的出海业务，并在所有业务准备就绪时再扩展到实体办公空间。虚拟办公室可用于满足政府要求，例如公司注册、税务登记或增值税(VAT)登记等。
            </li>
          </ul>
        </el-collapse-item>
        <el-collapse-item name="5">
          <template #title>
            <div>银行开户</div>
          </template>
          <ul class="content-ul">
            <li class="list-style-none">
              鉴于菲律宾银行与中国银行在业务和处理方式上的不同，我们可以协助您的企业在提供完整资料的前提下为您进行银行开户及其他相关服务。
            </li>
          </ul>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script setup>
import imageSrc from "@/assets/images/business/1 企业成立.jpg";

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