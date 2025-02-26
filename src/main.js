import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "amfe-flexible";
import ElementPlus from "element-plus";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import i18n from "@/i18n";
import "@/assets/normalize.css";
import "element-plus/dist/index.css"; // 默认样式
import "@/styles/element/index.scss"; // 自定义主题
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const app = createApp(App);
app.use(i18n);
app.use(ElementPlus).use(router).mount("#app");

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
