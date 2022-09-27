<template>
  <div>
    <div v-if="movies" class="w-full mt-4 lg:mt-8">
      <div class="w-full">
        <div class="relative rounded-xl lg:rounded-[40px]">
          <div
            class="absolute inset-0 bg-gradient-to-b from-[rgba(54,_44,_146,_0.4)] to-[rgba(18,_98,_151,_0.4)] overflow-hidden rounded-xl lg:rounded-[40px]"
          ></div>
          <img
            :src="getImages('original', movies.backdrop_path)"
            alt=""
            class="background w-full h-full lg:max-h-[480px] object-cover rounded-xl lg:rounded-[40px]"
          />
          <div
            class="w-[80%] lg:w-full lg:max-w-[580px] absolute bottom-0 left-2/4 lg:left-20 p-6 lg:p-10 -translate-x-2/4 lg:-translate-x-0 translate-y-2/4 bg-[#20283E] bg-opacity-80 rounded-xl lg:rounded-3xl z-40 backdrop-blur-[12px]"
          >
            <div class="text-[#BEB7FB] text-sm flex items-center gap-x-2 mb-2">
              <span>MaileHereko</span>
              <span>/</span>
              <span>Movies</span>
            </div>
            <div>
              <h1
                class="text-gray50 font-semibold text-xl lg:text-3xl text-truncate"
              >
                {{ movies.name || movies.title }}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-20 lg:mt-28">
        <div
          class="w-full flex lg:flex-row flex-col gap-[10px] lg:gap-[42px] lg:px-20"
        >
          <div>
            <img
              :src="getImages('w500', movies.poster_path)"
              alt=""
              class="w-full lg:max-w-[370px] h-full object-cover rounded-xl lg:rounded-3xl"
            />
          </div>
          <div class="w-full flex-1">
            <div class="w-full flex flex-col gap-3 lg:gap-5">
              <p class="text-gray300 lg:text-lg text-sm">
                {{ movies.overview }}
              </p>
              <div class="flex items-center gap-x-10 lg:gap-x-20">
                <movie-meta title="Type" :content="movies.type" />
                <movie-meta title="Status" :content="movies.status" />
              </div>
              <div class="flex items-center gap-x-10 lg:gap-x-20">
                <movie-meta title="First air date" content="2018-04-13" />
                <movie-meta title="Last air date" content="2019-04-24" />
              </div>
              <div class="flex items-center gap-x-10 lg:gap-x-20">
                <movie-meta
                  title="No. of Seasons"
                  :content="movies.number_of_seasons"
                />
                <movie-meta
                  title="No. of episodes"
                  :content="movies.number_of_episodes"
                />
              </div>
              <div class="flex items-center gap-x-10 lg:gap-x-20">
                <movie-meta
                  title="Episode run time"
                  :content="movies.episode_run_time[0] + ' min'"
                />
              </div>
              <div class="flex items-center gap-x-10 lg:gap-x-20">
                <movie-meta
                  title="Genres"
                  content="Action & Adventure, Sci-Fi & Fantasy, Drama"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else></div>
  </div>
</template>

<script lang="ts">
import { useContext, defineComponent, ref } from '@nuxtjs/composition-api'
import MovieMeta from '~/components/movie/MovieMeta.vue'
import { useSeriesDetail } from '~/composables'
import { getIdPrams } from '~/utils'

export default defineComponent({
  components: {
    MovieMeta,
  },
  setup() {
    const { $repository, params } = useContext()
    const id = ref<string>(getIdPrams(params.value.slug))
    const { movies } = useSeriesDetail(id)

    return { movies, getImages: $repository.images.getImages }
  },
})
</script>

<style scoped></style>
