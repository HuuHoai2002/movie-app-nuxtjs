<template>
  <div class="flex-1 items-start flex shrink-0 flex-col gap-y-2">
    <span class="text-gray400 lg:text-base text-xs"> {{ title }} </span>
    <span class="text-gray100 lg:text-lg text-sm">
      {{ content }}
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  setup() {
    return {}
  },
})
</script>

<style scoped></style>
