<template lang="">
  <div class="w-full h-full">
    <div
      class="w-full h-full flex items-center justify-center flex-col lg:mt-10 mt-5"
    >
      <div class="lg:mb-10 mb-5">
        <img
          src="~static/img/404.png"
          alt=""
          class="w-full h-full object-cover"
        />
      </div>
      <div
        class="lg:max-w-[500px] flex items-center justify-center flex-col gap-y-4"
      >
        <h1 class="font-bold text-2xl lg:text-5xl text-gray50">
          Lost your way?
        </h1>
        <p class="text-gray300 text-sm lg:text-base text-center">
          Oops! This is awkward. You are looking for something that doesn't
          actually exist.
        </p>
        <base-button @click="navigate('/')"> Go Home</base-button>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from '@nuxtjs/composition-api'
import BaseButton from '~/components/base/BaseButton.vue'
import { useNavigate } from '~/composables'

export default defineComponent({
  name: 'Error',
  components: {
    BaseButton,
  },
  layout: 'destroy',
  setup() {
    const { navigate } = useNavigate()

    return {
      navigate,
    }
  },
})
</script>
