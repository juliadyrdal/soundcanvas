// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
    '@vueuse/nuxt',
    'nuxt-lodash',
    '@nuxt/image',
    '@nuxt/image'
  ],
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true }
})