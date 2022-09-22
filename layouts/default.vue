<template lang="">
  <div class="">
    <Header />
    <div class="mx-auto max-w-[1240px] px-4 lg:px-0">
      <Nuxt />
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import Header from '~/components/header/Header.vue'

export default defineComponent({
  name: 'DefaultLayout',
  components: {
    Header,
  },
  setup() {
    return {}
  },
})
</script>
