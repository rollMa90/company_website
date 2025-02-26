<!-- 代码已包含 CSS：使用 TailwindCSS , 安装 TailwindCSS 后方可看到布局样式效果 -->

<template>
  <!-- 主要内容区 -->
  <div>
    <!-- Hero轮播图 -->
    <div class="item-container gray banner">
      <swiper :pagination="{
        clickable: true,
      }" :modules="swiperModules" class="mySwiper" :loop="true" :navigation="true" :autoplay="{
        delay: 3000,
        disableOnInteraction: false,
      }">
        <swiper-slide v-for="item in slides" :key="item.title">
          <div :class="item.class" class="bg">
            <div class="card-item">
              <div class="banner-title">
                {{ item.title }}
              </div>
              <div class="banner-content">
                {{ item.content }}
              </div>
              <!-- <div class="banner-btn">
                查看详情
              </div> -->
            </div>
            <div class="bgimg"></div>
          </div>
        </swiper-slide>
      </swiper>

    </div>
    <div class="order-container" v-show="false">
      <el-form size="large" label-position="top">
        <el-form-item :label="$t('message.ShippingStatusTrack')">
          <el-input :placeholder="$t('message.PleaseInputOrderNo')">
            <template #prefix>
              <el-icon class="el-input__icon">
                <search />
              </el-icon>
            </template>
          </el-input>
        </el-form-item>
      </el-form>
    </div>
    <div class="item-container  section">
      <div class="card-bg" @click="goTo('/about')">
        <!-- <div class="item-title">
          {{ $t('message.AboutUs') }} </div> -->
        <div class="item-content" style="text-align: left;">
          {{ $t('message.AboutUsContent') }} </div>
      </div>
    </div>
    <div class="item-container section gray" style="height: auto;">
      <div class="item-title">
        {{ $t('message.OurService') }} </div>
      <div class="item-content">
        {{ $t('message.OurServiceContent') }} </div>
      <ul class="service-card">
        <li class="card-item " @click="goTo('/BusinessRegistration')">
          <img src="../assets/images/card/card-item1.jpg" alt="" srcset="">
          <div class="card-title">
            企业成立 </div>
          <div class="card-content">
            菲律宾本土公司注册
          </div>
        </li>
        <li class="card-item" @click="goTo('/AccountingAndTaxation')">
          <img src="../assets/images/card/card-item2.jpg" alt="" srcset="">
          <div class="card-title">
            财税审计
          </div>
          <div class="card-content">
            代理记账，税务申报，医保社保代缴
          </div>
        </li>
        <li class="card-item" @click="goTo('/ImportExportClearance')">
          <img src="../assets/images/card/card-item3.jpg" alt="" srcset="">
          <div class="card-title">
            清关服务
          </div>
          <div class="card-content">
            各类进出口清关处理
          </div>
        </li>
        <li class="card-item " @click="goTo('/HumanResourcesService')">
          <img src="../assets/images/card/card-item4.jpg" alt="" srcset="">
          <div class="card-title">
            人力资源
          </div>
          <div class="card-content">
            人员招聘，名义雇主服务，员工的管理与薪酬规划
          </div>
        </li>
        <li class="card-item" @click="goTo('/LicenseApplication')">
          <img src="../assets/images/card/card-item5.jpg" alt="" srcset="">
          <div class="card-title">
            产品认证
          </div>
          <div class="card-content">
            各类产品认证如FDA/PS/ICC/BAI等
          </div>
        </li>
        <li class="card-item" @click="goTo('/LicenseApplication')">
          <img src="../assets/images/card/card-item6.jpg" alt="" srcset="">
          <div class="card-title">
            行业牌照
          </div>
          <div class="card-content">
            特殊行业如进出口许可证/建筑资质证/旅游社执照等
          </div>
        </li>
        <li class="card-item" @click="goTo('/BusinessRegistration')">
          <img src="../assets/images/card/card-item7.jpg" alt="" srcset="">
          <div class="card-title">
            签证服务
          </div>
          <div class="card-content">
            菲律宾各类签证和第三国签证代办
          </div>
        </li>
        <li class="card-item" @click="goTo('/OtherServices')">
          <img src="../assets/images/card/card-item8.jpg" alt="" srcset="">
          <div class="card-title">
            个人业务
          </div>
          <div class="card-content">
            车辆/保险/法律支持，我们是您的坚实的保障
          </div>
        </li>
      </ul>
    </div>
    <div class="item-container  section">
      <div class="item-title">
        我们的优势 </div>
      <div class="item-content">
        {{ $t('message.WhyChooseUsContent') }} </div>
      <div class="aboutUs">
        <div class="card">
          <div class="title">
            <div class="icon1 icon"></div>
            {{ $t('message.whyChooseUsCard1') }}
          </div>
          <div class="main-content">专业团队与多年行业经验积累</div>
        </div>
        <div class="card">
          <div class="title">
            <div class="icon2 icon"></div>
            {{ $t('message.WhyChooseUseCard2') }}
          </div>
          <div class="main-content">提供客户需求为导向的定制化方案</div>
        </div>
        <div class="card">
          <div class="title">
            <div class="icon3 icon"></div>
            价格合理
          </div>
          <div class="main-content">优化成流程，控制成本，提高效率</div>
        </div>
        <div class="card">
          <div class="title">
            <div class="icon4 icon"></div>
            {{ $t('message.WhyChooseUsCard4') }}
          </div>
          <div class="main-content">随时准备为您提供专业协助</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
const router = useRouter();
const swiperModules = [Pagination, Autoplay, Navigation];

const slides = ref([
  { title: '本土CPA注册会计和律师团队', class: 'bg1', content: '多年行业深耕经验' },
  { title: '马尼拉 - 厦门', class: 'bg2', content: '两地团队高效协同' },
  { title: '企业业务 个人需求', class: 'bg3', content: '解决您的后顾之忧' }
]);
const goTo = (path) => {
  router.push(path)
};
</script>

<style scoped lang="scss">
::v-deep {
  .el-form-item__label {
    font-size: 20px;
    font-weight: bold;
  }

  .swiper-button-prev {
    left: 60px;
    color: #008080;
  }

  .swiper-button-next {
    right: 60px;
    color: #008080;

  }

  .swiper-pagination {
    bottom: 40px;

  }

  .swiper-pagination-bullet-active {
    background-color: #008080;
  }
}

.item-container {
  height: 600px;
  background-color: #ffffff;

  .card-bg {
    cursor: pointer;
    width: 1240px;
    height: 100%;
    background-image: url('@/assets/images/card/pic1.jpg');
    background-size: 100%;
    box-shadow: 0px 4px 6px -4px rgba(0, 0, 0, 0.1), 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;

    .item-title {
      font-size: 40px !important;
      color: #ffffff !important;
      text-shadow: #000000a6 1px 0 10px;
    }

    .item-content {
      font-size: 34px !important;
      color: #ffffff !important;
      text-shadow: #000000 1px 1px 10px;
      width: 1100px !important;
    }
  }

  &.banner {
    height: 700px;
    width: 1240px;
    margin: 0 auto;
  }

  &.gray {
    background-color: #F9FAFB;
  }

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    font-size: 18px;
    /* Center slide text vertically */

    .bg {
      width: 100%;
      height: 100%;
      position: relative;

      .card-item {
        // width: 500px;
        position: absolute;
        left: 200px;
        bottom: 140px;
        z-index: 999;

        .banner-title {
          font-size: 50px;
          color: #FFFFFF;
          line-height: 58px;
          text-shadow: 0px 0px 13px black;
        }

        .banner-content {
          margin-top: 6px;
          font-size: 50px;
          color: #ffffff;
          line-height: 58px;
          text-shadow: 0px 0px 13px black;
        }

        .banner-btn {
          margin-top: 20px;
          width: 120px;
          height: 40px;
          background-color: #008080;
          color: #ffffff;
          border-radius: 20px;
          line-height: 40px;
          text-align: center;
        }

      }


      &.bg1 {
        .bgimg {
          width: 100%;
          height: 100%;
          background-image: url('@/assets/images/banner/bg1.jpg');
          background-position: center;
          background-size: cover;
          position: absolute;
          left: 0px;
          top: 0px;
        }
      }

      &.bg2 {
        .bgimg {
          width: 100%;
          height: 100%;
          background-image: url('@/assets/images/banner/bg2.jpg');
          background-position: center;
          background-size: cover;
          position: absolute;
          left: 0px;
          top: 0px;
        }
      }

      &.bg3 {
        .bgimg {
          width: 100%;
          height: 100%;
          background-image: url('@/assets/images/banner/bg3.jpg');
          background-position: center;
          background-size: cover;
          position: absolute;
          left: 0px;
          top: 0px;
        }
      }

      // display: block;
      // width: 100%;
      // height: 100%;
      // object-fit: cover;
    }
  }

  &.section {
    box-sizing: border-box;
    padding: 60px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .item-title {
      font-size: 36px;
      color: #242424;
      text-align: center;
      line-height: 48px;
    }

    .item-content {
      margin-top: 24px;
      font-size: 18px;
      color: #615f5fbb;
      text-align: center;
      width: 840px;
      margin-bottom: 40px;
    }

    .service-card {
      flex: 1;
      display: grid;
      width: 1240px;
      grid-template-columns: repeat(4, 1fr);
      grid-column-gap: 40px;
      grid-row-gap: 40px;
      align-items: center;
      padding: 0px;

      .card-item {
        padding: 16px;
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.001), rgba(0, 0, 0, 0.001)), #FFFFFF;
        box-shadow: 0px 4px 6px -4px rgba(0, 0, 0, 0.1), 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
        cursor: pointer;
        display: flex;
        border-radius: 8px;
        flex-direction: column;
        overflow: hidden;

        img {
          height: 140px;
          border-radius: 8px;
        }

        .card-title {
          font-size: 20px;
          text-align: left;
          padding: 0 10px;
          font-weight: bold;
          margin-top: 18px;
          text-align: center;
          // color: #615f5fbb;
        }

        .card-content {
          height: 42px;
          margin-top: 12px;
          font-size: 17px;
          padding: 0 10px;

        }
      }
    }

    .aboutUs {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);
      grid-row-gap: 30px;
      grid-column-gap: 30px;
      width: 1000px;
      height: 300px;

      .card {
        border-radius: 30px;
        display: flex;
        flex-direction: column;
        padding: 20px 40px 20px;
        align-content: flex-start;
        background: linear-gradient(#ffffff 80%, #008080a6 100%);
        // background: linear-gradient(0deg, rgba(0, 0, 0, 0.001), rgba(0, 0, 0, 0.001)), #FFFFFF;
        box-shadow: 0px 4px 6px -4px rgba(0, 0, 0, 0.1), 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
        // cursor: pointer;
        align-items: center;

        .title {
          font-size: 24px;
          font-weight: 600;
          line-height: 32px;
          color: #111827;
          display: flex;
          align-items: center;
          margin-bottom: 12px;

          .icon {
            width: 48px;
            height: 48px;
            display: inline-block;
            background-size: 100% 100%;
            background-position: center;
            margin-right: 8px;

            &.icon1 {
              background-image: url('@/assets/images/icons/icon1.png');
            }

            &.icon2 {
              background-image: url('@/assets/images/icons/icon2.png');
            }

            &.icon3 {
              background-image: url('@/assets/images/icons/icon3.png');
            }

            &.icon4 {
              background-image: url('@/assets/images/icons/icon4.png');
            }
          }


        }

        .main-content {
          font-size: 17px;
          font-weight: normal;
          line-height: 29.25px;
          color: #615f5fbb;
        }
      }
    }
  }
}

.order-container {
  width: 920px;
  margin: 50px auto 0px;

  .order-title {
    font-size: 22px;
    font-weight: bold;
    line-height: 36px;
    color: #111827;
    margin-bottom: 10px;
  }

}
</style>
