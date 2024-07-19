// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/strapi',
    '@nuxt/ui',
    '@vueuse/nuxt',
    '@nuxt/eslint',
    "@nuxt/image"
  ],
  colorMode: {
    preference: 'light',
    fallback: 'light',
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '-mode',
    storageKey: 'nuxt-color-mode',
  },
  css: [
    '@/assets/global.css',
  ],
  strapi: {
    url: process.env.API_BASE_URL,
    prefix: '/api',
    admin: '/admin',
    version: 'v4',
    cookie: {},
    cookieName: 'strapi_jwt',
    devtools: true,
  },
  image: {
    strapi: {
      baseURL: process.env.API_BASE_URL
    }
  },
  extends: [
    './apps/blog',
    './apps/landing',
    './apps/cms',
    './apps/core',
  ],
  compatibilityDate: '2024-07-05',
})