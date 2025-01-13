import { createI18n } from 'vue-i18n'

// 匯入語言檔案
import enUS from './locales/enUS.json'
import zhTW from './locales/zhTW.json'

const messages = {
  enUS,
  'zh-TW': zhTW,
}

const i18n = createI18n({
  legacy: false,
  locale: 'zh-TW',  // 預設語言
  fallbackLocale: 'enUS',  // 後備語言
  messages, // 語言內容
})

export default i18n