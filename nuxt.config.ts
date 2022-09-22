import { NuxtConfig } from '@nuxt/types'

const config: NuxtConfig = {
  // Global page headers: https://go.nuxtjs.dev/config-head
  // head: {
  //   title: 'Nuxt Movie App',
  //   htmlAttrs: {
  //     lang: 'en',
  //   },
  //   meta: [
  //     { charset: 'utf-8' },
  //     { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  //     { hid: 'description', name: 'description', content: '' },
  //     { name: 'format-detection', content: 'telephone=no' },
  //   ],
  //   link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  // },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/main.css'],
  generate: { fallback: '404.html' },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~plugins/axios.ts', '~plugins/repository.ts'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/composition-api/module',
    '@nuxt/postcss8',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
  target: 'static',
  ssr: false,

  axios: {
    baseURL: process.env.API_URL,
  },

  env: {
    API_URL: process.env.API_URL as string,
    API_KEY: process.env.API_KEY as string,
    IMAGE_URL: process.env.IMAGE_URL as string,
  },
}

export default config
