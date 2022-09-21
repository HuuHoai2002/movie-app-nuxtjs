<template>
  <div class="min-h-screen"><Banner /></div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import Banner from '~/components/banner/Banner.vue'

export default defineComponent({
  name: 'Home',
  components: {
    Banner,
  },
  setup() {},
})
</script>
