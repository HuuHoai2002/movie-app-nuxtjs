<template>
  <div class="">
    <div>
      <Banner />
    </div>
    <div class="lg:max-w-[344px] lg:mb-6 mb-4">
      <Tabs :tab-content="['All', 'Movies', 'Series']"> </Tabs>
    </div>
    <grid-layout> </grid-layout>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import Banner from '~/components/banner/Banner.vue'
import Tabs from '~/components/tab/Tabs.vue'
import GridLayout from '~/components/layout/GridLayout.vue'

export default defineComponent({
  name: 'Home',
  components: {
    Banner,
    Tabs,
    GridLayout,
  },
  setup() {},
})
</script>
