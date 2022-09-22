import { defineNuxtPlugin } from '@nuxtjs/composition-api'

export default defineNuxtPlugin(({ $axios }) => {
  $axios.onRequest((config) => {
    config.params = {
      ...config.params,
      api_key: process.env.API_KEY,
    }
    // console.log(config.params)
  })
})
