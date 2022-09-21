<template lang="">
  <div class="relative">
    <input
      class="w-full pr-4 pl-[56px] py-5 rounded-xl border bg-transparent opacity-90 outline-none border-gray700 placeholder-gray600"
      :type="type"
      :class="className"
      :placeholder="placeholder"
      autocomplete="off"
      @input="onChange"
    />
    <div class="absolute top-2/4 left-4 -translate-y-2/4"><SearchIcon /></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import SearchIcon from '~/components/icons/SearchIcon.vue'

export default defineComponent({
  name: 'BaseInput',
  components: {
    SearchIcon,
  },
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
