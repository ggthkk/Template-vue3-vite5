import { createI18n } from 'vue-i18n'
import messages from '@/locales/index'
import numberFormats from '@/locales/numberFormat'

export interface MessageSchema {
  common: {
    ok: string
    cancel: string
  }
  error: {
    unknown: string
    required: string
  }
  content: {
    info: string
  }
  sidebar: {
    dashboard: string
  }
}

const i18n = createI18n<[MessageSchema], 'th'>({
  legacy: false,
  locale: 'th',
  fallbackLocale: 'th',
  globalInjection: true,
  messages: messages as any,
  numberFormats: numberFormats as any,
})

export default i18n
