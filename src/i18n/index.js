import { createI18n } from "vue-i18n";
import EN from "./en.json";
import CN from "./zh-CN.json";

const i18n = createI18n({
  locale: "cn", // 设置当前语言类型
  globalInjection: true, // 全局注册$t方法
  messages: {
    en: EN,
    cn: CN,
  },
});

export default i18n;
