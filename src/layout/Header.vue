<template>
    <div class="header-container" :class="isMobile ? 'mobile' : ''">
        <div class="header">
            <div class="logo-container" @click="linkTo('/home')">
                <!-- <img class="logo" src="@/assets/logo.png" alt="Element logo" /> -->
                <img class="title" v-if="i18n.global.locale == 'cn'" src="@/assets/images/header/logo_cn.svg" alt="">
                <img class="title" v-else src="@/assets/images/header/logo_en.svg" alt="">
            </div>
            <el-menu :default-active="activeIndex" mode="horizontal" class="menu">
                <el-menu-item index="about" @click="linkTo('/about')">{{ $t('message.AboutUs') }}</el-menu-item>
                <el-sub-menu index="2">
                    <template #title>{{ $t('message.PersonalServices') }}</template>
                    <el-menu-item index="vehicle" @click="linkTo('/vehicle')">{{ $t('message.Vehicles')
                        }}</el-menu-item>
                    <el-menu-item index="LegalAdvice" @click="linkTo('/LegalAdvice')">{{ $t('message.LegalServices')
                        }}</el-menu-item>
                    <el-menu-item index="2-3" @click="linkTo('/ShippingServices')">{{ $t('message.ShippingServices') }}</el-menu-item>
                    <el-menu-item index="2-4" @click="linkTo('/OtherServices')">{{ $t('message.OtherServices') }}</el-menu-item>

                </el-sub-menu>
                <el-sub-menu index="3">
                    <template #title>{{ $t('message.BusinessServices') }}</template>
                    <el-menu-item index="BusinessRegistration" @click="linkTo('/BusinessRegistration')">{{
        $t('message.BusinessRegistration')
    }}</el-menu-item>
                    <el-menu-item index="AccountingAndTaxation" @click="linkTo('/AccountingAndTaxation')">{{
        $t('message.AccountingAndTaxation')
    }}</el-menu-item>
                    <el-menu-item index="LicenseApplication" @click="linkTo('/LicenseApplication')">{{
        $t('message.LicenseApplication')
    }}</el-menu-item>
                    <el-menu-item index="ImportExportClearance" @click="linkTo('/ImportExportClearance')">{{
        $t('message.ImportExportClearance')
    }}</el-menu-item>
                    <el-menu-item index="HumanResourcesService" @click="linkTo('/HumanResourcesService')">{{
        $t('message.HumanResourcesService')
    }}</el-menu-item>
                    <el-menu-item index="3-6">{{ $t('message.StorageService') }}</el-menu-item>
                    <el-menu-item index="3-7">{{ $t('message.CommercialVehicelRental') }}</el-menu-item>
                    <el-menu-item index="3-8">{{ $t('message.BankAccountOpening') }}</el-menu-item>
                    <el-menu-item index="3-9">{{ $t('message.LegalServices') }}</el-menu-item>
                </el-sub-menu>
                <el-menu-item index="4">{{ $t('message.VisaProcessing') }}</el-menu-item>
                <el-menu-item index="5">{{ $t('message.MediaCenter') }}</el-menu-item>
                <el-menu-item index="joinus" @click="linkTo('/joinus')">{{ $t('message.JoinUs') }}</el-menu-item>
            </el-menu>
            <el-dropdown>
                <span class="lang-container">
                    <div v-if="i18n.global.locale == 'cn'" class="icon CN"></div>
                    <div v-else class="icon EN"></div>
                    {{ i18n.global.locale == 'cn' ? '中文' : 'English' }} <el-icon class="el-icon--right">
                        <arrow-down />
                    </el-icon>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item v-if="i18n.global.locale == 'en'" @click="changeLanguage('cn')">
                            <div class="icon CN"></div>
                            中文
                        </el-dropdown-item>
                        <el-dropdown-item v-if="i18n.global.locale == 'cn'" @click="changeLanguage('en')">
                            <div class="icon EN"></div>English
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>
</template>

<script setup>
import i18n from '@/i18n';
const changeLanguage = (lang) => {
    i18n.global.locale = lang;
};
import { useRouter } from 'vue-router'
const router = useRouter()
const isMobile = ref(window.innerWidth < 768);
const updateWindowSize = () => {
    isMobile.value = window.innerWidth < 768;
};
// 使用watch来监听窗口大小变化（也可以使用其他方式）
watch(() => window.innerWidth, (newVal, oldVal) => {
    updateWindowSize();
},
    { immediate: false }
);
onMounted(() => {
    window.addEventListener("resize", updateWindowSize);
});
onBeforeUnmount(() => {
    window.removeEventListener("resize", updateWindowSize);
});


const linkTo = (route) => {
    router.push(route)
}
// console.log(router.currentRoute.name)

const activeIndex = ref('home')
watch(router.currentRoute, (newVal, oldVal) => {
    activeIndex.value = newVal.name
}, { deep: true, immediate: true })
</script>
<style scoped lang='scss'>
.lang-container {
    display: flex;
    align-items: center;

    .flag-icon {
        width: 16px;
        height: 16px;
        margin-right: 8px;
    }
}

.icon.CN {
    width: 18px;
    height: 18px;
    margin-right: 6px;
    background-image: url('@/assets/images/CN.png');
    background-size: cover;
    background-position: center;
}

.icon.EN {
    width: 18px;
    height: 18px;
    margin-right: 6px;
    background-image: url('@/assets/images/EN.png');
    background-size: cover;
    background-position: center;
}

::v-deep {
    .el-menu--horizontal.el-menu {
        border: 0px;
    }

    .el-sub-menu {
        &.is-active {
            font-weight: bolder;

            .el-sub-menu__title {
                color: var(--el-menu-active-color) !important;
                font-weight: bolder;
            }
        }
    }

    .el-sub-menu__title {
        border-bottom: none !important;
        font-family: 思源黑体;
        font-size: 26px;
        font-weight: 500;
        color: #374151 !important;
    }

    .el-menu-item {
        font-family: 思源黑体;
        font-size: 26px;
        font-weight: 500;
        color: #374151 !important;
        border-bottom: none !important;

        &.is-active {
            font-weight: bolder;
        }

        &:hover,
        &:focus {
            background-color: transparent !important;
        }
    }
}

.header-container {
    width: 100%;
    // box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.1);
}

.header {
    // width: 1240px;
    margin-left: auto;
    margin-right: auto;
    height: 123px;
    padding: 0px 40px;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .logo-container {
        display: flex;
        align-items: center;
        margin-right: 40px;
        cursor: pointer;

        .logo {
            height: 91px;
            background-size: 100% 100%;
            background-position: center;
            background-image: url('@/assets/logo.png');
            margin-right: 20px;
        }

        .title {
            height: 91px;
        }

        // .web-title {
        //     color: #008080;
        //     font-family: '黑体';
        //     font-size: 40px;
        //     font-weight: bolder;
        //     margin-left: 12px;
        // }
    }



    .menu {
        flex: 1;
    }
}

@media (max-width: 768px) {
    .navbar {
        background: rgb(255, 255, 255);
    }
}
</style>