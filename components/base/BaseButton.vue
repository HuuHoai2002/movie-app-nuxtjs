<template lang="">
  <button
    class="text-sm lg:text-base text-white bg-blue700 py-3 lg:py-4 px-5 lg:px-8 rounded-xl"
    :class="className"
    :disabled="disabled"
    :type="type"
    @click="click"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'BaseButton',
  props: {
    type: {
      type: String,
      default: 'button',
    },
    className: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const click = () => {
      if (!props.disabled) {
        emit('click')
      }
    }

    return {
      props,
      click,
    }
  },
})
</script>
