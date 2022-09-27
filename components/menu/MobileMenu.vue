<template lang="">
  <div class="w-full h-full">
    <div
      class="lg:hidden bg-[#111829] px-2 fixed top-0 right-0 w-[268px] h-full z-[100] translate-x-[100%] transition-all duration-300"
      :class="{ '!translate-x-0': activeMobileMenu }"
    >
      <div>
        <div class="w-full flex flex-col gap-2 mt-10">
          <nuxt-link
            to="/"
            class="w-full flex items-center gap-x-5 text-gray300 font-medium py-3 px-5 rounded-md"
            @click.native="hideMobileMenu"
          >
            <span>
              <home-icon />
            </span>
            <h3>Home</h3>
          </nuxt-link>
          <nuxt-link
            to="/movies"
            class="w-full flex items-center gap-x-5 text-gray300 font-medium py-3 px-5 rounded-md"
            @click.native="hideMobileMenu"
          >
            <span>
              <movie-icon />
            </span>
            <h3>Movies</h3>
          </nuxt-link>
          <nuxt-link
            to="/series"
            class="w-full flex items-center gap-x-5 text-gray300 font-medium py-3 px-5 rounded-md"
            @click.native="hideMobileMenu"
          >
            <span>
              <series-icon />
            </span>
            <h3>Series</h3>
          </nuxt-link>
          <nuxt-link
            to="/search"
            class="w-full flex items-center gap-x-5 text-gray300 font-medium py-3 px-5 rounded-md"
            @click.native="hideMobileMenu"
          >
            <span>
              <search-icon />
            </span>
            <h3>Search</h3>
          </nuxt-link>
        </div>
      </div>
    </div>
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
import HomeIcon from '~/components/icons/HomeIcon.vue'
import SearchIcon from '~/components/icons/SearchIcon.vue'
import SeriesIcon from '~/components/icons/SeriesIcon.vue'
import MovieIcon from '~/components/icons/MovieIcon.vue'

export default defineComponent({
  name: 'MobileMenu',
  components: {
    HomeIcon,
    SearchIcon,
    MovieIcon,
    SeriesIcon,
  },
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

<style scoped>
.nuxt-link-exact-active {
  background-color: #1d253a;
  color: #5a4af4;
}
</style>
