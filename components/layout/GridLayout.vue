<template lang="">
  <div
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-6 gap-4"
    :class="className"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'GridLayout',
  props: {
    className: {
      type: String,
      default: '',
    },
  },
  setup() {},
})
</script>
