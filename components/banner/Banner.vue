<template lang="">
  <div class="w-full lg:my-[70px] my-10">
    <div class="w-full max-w-[548px] flex flex-col gap-y-4 mb-4 lg:mb-6">
      <h1 class="font-bold text-3xl lg:text-6xl">MaileHereko</h1>
      <p class="text-gray300 text-base">
        List of movies and TV Shows, I, Pramod Poudel have watched till date.
        Explore what I have watched and also feel free to make a suggestion. 😉
      </p>
    </div>
    <div class="lg:max-w-[344px]">
      <base-input placeholder="Search Movies or TV Shows" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import BaseInput from '~/components/base/BaseInput.vue'

export default defineComponent({
  name: 'Banner',
  components: {
    BaseInput,
  },
  setup() {
    return {}
  },
})
</script>
