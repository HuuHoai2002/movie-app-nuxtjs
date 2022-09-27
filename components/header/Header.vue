<template lang="">
  <div class="w-full bg-primary bg-opacity-80 sticky top-0 z-50">
    <div
      class="w-full max-w-[1240px] px-4 lg:px-0 mx-auto h-[60px] lg:h-[70px] text-gray300 flex items-center justify-between"
    >
      <nuxt-link to="/"
        ><img src="~/static/img/icon.png" alt="" class="w-10 h-10"
      /></nuxt-link>
      <div
        class="hidden lg:flex items-center gap-x-5 lg:gap-x-8 transition-all"
      >
        <nuxt-link to="/" class="block text-lg font-medium p-2">Home</nuxt-link>
        <nuxt-link to="/movies" class="block text-lg font-medium p-2"
          >Movies</nuxt-link
        >
        <nuxt-link to="/series" class="block text-lg font-medium p-2"
          >Tv Series</nuxt-link
        >
        <nuxt-link to="/search" class="block text-lg font-medium p-2"
          >Search</nuxt-link
        >
      </div>
      <div class="lg:hidden block cursor-pointer" @click="toggleMobileMenu">
        <menu-icon />
      </div>
    </div>
    <mobile-menu />
  </div>
</template>

<script lang="ts">
import { defineComponent, useContext } from '@nuxtjs/composition-api'
import MenuIcon from '~/components/icons/MenuIcon.vue'
import MobileMenu from '~/components/menu/MobileMenu.vue'

export default defineComponent({
  name: 'Header',
  components: {
    MenuIcon,
    MobileMenu,
  },
  setup() {
    const { store } = useContext()

    const toggleMobileMenu = () => {
      store.commit('globals/TOGGLE_MOBILE_MENU')
    }

    return {
      toggleMobileMenu,
    }
  },
})
</script>

<style scoped>
.nuxt-link-exact-active {
  color: white;
}
</style>
