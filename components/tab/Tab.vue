<template>
  <div
    class="flex-1 px-5 py-2 lg:px-8 rounded-lg flex items-center justify-center font-medium text-sm lg:text-base bg-transparent cursor-pointer text-gray300 transition-all"
    :class="{ '!bg-[#7B6EF6] !text-white': active }"
    @click="$emit('click')"
  >
    {{ title }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Tab',
  props: {
    active: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '',
    },
  },
  setup() {},
})
</script>

<style scoped></style>
