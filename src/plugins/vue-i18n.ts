import { createI18n } from "vue-i18n";
import messages from "@/locales/index";
import numberFormats from "@/locales/numberFormat";

const i18n = createI18n({
  locale: "th",
  fallbackLocale: "th",
  messages: messages as any,
  numberFormats: numberFormats as any,
  lazy: true,
  silentTranslationWarn: true,
  globalInjection: true,
  legacy: false,
});

export default i18n;
