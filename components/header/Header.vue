<template lang="">
  <div class="w-full bg-primary bg-opacity-80 sticky top-0 z-50">
    <div
      class="w-full max-w-[1280px] px-5 lg:px-0 mx-auto h-[60px] lg:h-[70px] text-white flex items-center justify-between"
    >
      <nuxt-link to="/"
        ><img src="~/static/img/icon.png" alt="" class="w-8 h-8"
      /></nuxt-link>
      <div class="flex items-center gap-x-5 lg:gap-x-8 transition-all">
        <nuxt-link to="/" class="block text-lg font-medium p-2">Home</nuxt-link>
        <nuxt-link to="/series" class="block text-lg font-medium p-2"
          >Tv Series</nuxt-link
        >
        <nuxt-link to="/search" class="block text-lg font-medium p-2"
          >Search</nuxt-link
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'Header',
  setup() {},
})
</script>

<style scoped>
.nuxt-link-exact-active {
  color: #05ce91;
}
</style>
