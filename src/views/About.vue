<template>
  <div class="about-container">
    <div class="about-top">
      <div class="top-imgbox">
        <el-image class="top-img" :src="image1" :fit="fit"></el-image>
      </div>
      <div class="top-content">
        <div class="item-title">{{$t('message.WhoWeAre')}}</div>
        <p class="item-content">
          {{$t('message.AboutUsContentDetail')}}
        </p>
      </div>
    </div>
    <div class="about-top">
      <div class="top-imgbox">
        <el-image class="top-img" :src="image2" :fit="fit"></el-image>
      </div>
      <div class="top-content">
        <div class="item-title">{{$t('message.OurBussiness')}}</div>
        <p class="item-content">
          {{$t('message.OurBussinessIntro')}}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import image1 from "../assets/images/business/who.png";
import image2 from "../assets/images/business/about.jpg";

const data = reactive({});
onMounted(() => {});
</script>
<style scoped lang='scss'>
.about-container {
  .about-top {
    display: flex;
    padding: 20px 300px;
    .top-content {
      flex: 1;
      padding: 0px 36px;
    }
    .top-img {
      width: 600px;
    }
  }
  .item-title {
    font-size: 36px;
    color: #242424;
    text-align: left;
    line-height: 48px;
  }
  .item-content {
    margin-top: 24px;
    font-size: 24px;
    color: #615f5fbb;
    text-align: left;
    line-height: 36px;
  }
  .text-left {
    text-align: left;
  }
  :deep {
    .el-image__inner {
      border-radius: 10px;
    }
  }
}
</style>