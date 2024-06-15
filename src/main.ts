import App from '@/App.vue'
import { createApp } from 'vue'
import { createI18n, useI18n } from 'vue-i18n'

import messages, { type Languages, type LanguageSchema } from './locales'

const userLocale = localStorage.getItem('locale') as string

const i18n = createI18n<[LanguageSchema], Languages>({
  messages,
  locale:  userLocale || 'uz',
  fallbackLocale: ['ru', 'en', 'uz'],
  legacy: false,
})




const app = createApp(App)


app.use(i18n)

console.log(app)


app.mount('#app')
