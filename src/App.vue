<template>
  <div :class="isMobile ? 'mobile' : ''">
    <router-view></router-view>
  </div>
</template>
<script setup>
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
</script>
