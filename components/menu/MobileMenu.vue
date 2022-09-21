<template lang="">
  <div class="w-full h-full">
    <div
      class="lg:hidden bg-primary fixed top-0 right-0 w-[60%] h-full z-[100] translate-x-[100%] transition-all duration-300"
      :class="{ '!translate-x-0': activeMobileMenu }"
    ></div>
    <div
      class="lg:hidden fixed inset-0 bg-[rgba(0,_0,_0,_0.5)] z-[99] transition-all"
      :class="[activeMobileMenu ? 'block' : 'hidden']"
      @click="hideMobileMenu"
    ></div>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  useContext,
  watch,
} from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'MobileMenu',
  setup() {
    const { store } = useContext()

    const activeMobileMenu = computed(
      () => store.getters['globals/activeMobileMenu']
    )
    const hideMobileMenu = () => {
      store.commit('globals/HIDE_MOBILE_MENU')
    }

    watch(
      () => activeMobileMenu.value,
      () => {
        if (activeMobileMenu.value) {
          document.body.classList.add('overflow-hidden')
        } else {
          document.body.classList.remove('overflow-hidden')
        }
      }
    )
    return { activeMobileMenu, hideMobileMenu }
  },
})
</script>

<style lang="" scoped></style>
