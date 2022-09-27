<template lang="">
  <div class="relative">
    <input
      class="w-full pr-3 pl-[52px] py-3 lg:pr-4 lg:pl-[56px] lg:py-5 rounded-xl border bg-transparent opacity-90 outline-none border-gray700 placeholder-gray600"
      :type="type"
      :class="className"
      :placeholder="placeholder"
      autocomplete="off"
      @input="onChange"
    />
    <div class="absolute top-2/4 left-4 -translate-y-2/4">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'BaseInput',
  props: {
    type: {
      type: String,
      default: 'text',
    },
    className: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: '',
    },
  },
  setup(props, { emit }) {
    const onChange = (e: Event) => {
      emit('input', (e.target as HTMLInputElement).value)
    }
    return {
      props,
      onChange,
    }
  },
})
</script>
<style lang=""></style>
