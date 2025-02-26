<template>
  <div class='footer-container'>
    <div class="top">
      <div class="left">
        <div class="title">{{ $t('message.ContactUs') }}</div>
        <div class="label">电话: +632 8538 5155</div>
        <div class="label">邮箱: inquiries@theicsi.com</div>
        <div class="label">地址: L24 Philippine Stock Exchange Tower, One Bonifacio High Street, 5th Ave. cor. 28th St. BGC, Taguig City, Philippines 1630</div>
      </div>
      <div class="right">
        <div class="title">{{ $t('message.FollowUs') }}</div>
        <div class="label">
          <div class="icon-container">
            <div class="icon">
              <img src="@/assets/images/bilibili.png" />
            </div>
            <div class="icon">
              <img src="@/assets/images/wechat.png" />
            </div>
            <div class="icon">
              <img src="@/assets/images/facebook.png" />
            </div>
            <div class="icon">
              <img src="@/assets/images/instagram.png" />
            </div>
            <div class="icon">
              <img src="@/assets/images/linkedin.png" />
            </div>
            <div class="icon">
              <img src="@/assets/images/twitter.png" />
            </div>
            <div class="icon">
              <img src="@/assets/images/youtube.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="text">
        © 2025 Insight connect solutions Inc.
      </div>
    </div>
  </div>
</template>

<script setup>
</script>
<style scoped lang='scss'>
.footer-container {
  background-color: #008080;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;


  .top {
    width: 1240px;
    margin-left: auto;
    margin-right: auto;
    padding: 80px 100px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 120px;


    .form-container {
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.001), rgba(0, 0, 0, 0.001)), #FFFFFF;
      box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05);
      padding: 42px;
      border-radius: 12px;
    }

    .right,
    .left {
      .title {
        font-size: 20px;
        font-weight: 600;
        line-height: 28px;
        letter-spacing: 0px;
        margin-bottom: 16px;
        color: #ffffff;
        font-family: "Montserrat", Sans-serif;
      }

      .label {
        color: #ffffff;
        font-size: 16px;
        font-weight: normal;
        line-height: 24px;
        letter-spacing: 0px;
        margin-bottom: 8px;
        font-family: "Montserrat", Sans-serif;

      }

      .icon-container {
        display: flex;
        align-items: center;
        justify-content: flex-start;

        .icon {
          margin-right: 3px;

          img {
            width: 32px;
            height: 32px;
          }
        }
      }
    }
  }

  .bottom {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    color: #9CA3AF;
    background-color: #ffffff;

    .text {
      font-size: 14px;
      font-weight: 24px;
      font-family: "Montserrat", Sans-serif;

    }
  }
}
</style>