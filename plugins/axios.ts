import { defineNuxtPlugin } from '@nuxtjs/composition-api'

export default defineNuxtPlugin(({ $axios, redirect }) => {
  $axios.onRequest((config) => {
    config.params = {
      ...config.params,
      api_key: process.env.API_KEY,
    }
    // console.log(config.params)

    $axios.onError((error) => {
      if (error.response && error.response.status === 404) {
        redirect('/404')
      }
    })
  })
})
