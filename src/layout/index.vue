<template>
    <Header></Header>
    <div class="main-container">
        <router-view></router-view>
    </div>
    <ContactMe />
    <Footer></Footer>
</template>

<script setup>
import ContactMe from "../components/ContactMe.vue";
import Footer from "./Footer.vue"
import Header from "./Header.vue"

const data = reactive({})
onMounted(() => {
})
</script>

<style scoped>
.main-container {
    min-height: 1300px;
    width: 100%;
    overflow: hidden;
    background-color: #F9FAFB;
}
</style>