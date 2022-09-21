<template lang="">
  <div class="flex" :class="className"></div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'FlexLayout',
  props: {
    className: {
      type: String,
      default: '',
    },
  },
  setup() {},
})
</script>
