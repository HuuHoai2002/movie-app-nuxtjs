<template>
  <div class="">
    <div>
      <Banner />
    </div>
    <div class="w-full lg:mb-6 mb-4">
      <Tabs :tabs="tabs" @change="updatePath"> </Tabs>
    </div>
    <template v-if="movies.results.length <= 0"> <base-loading /> </template>
    <grid-layout v-else>
      <movie-card
        v-for="movie in movies.results"
        :id="movie.id"
        :key="movie.id"
        :backdrop-path="movie.poster_path ?? ''"
        :title="movie.name || movie.title"
        :vote-average="movie.vote_average"
      />
    </grid-layout>
    <div class="my-5 lg:my-10 w-full flex items-center justify-center">
      <base-button @click="changePage">Load more</base-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, useMeta } from '@nuxtjs/composition-api'
import Banner from '~/components/banner/Banner.vue'
import Tabs from '~/components/tab/Tabs.vue'
import GridLayout from '~/components/layout/GridLayout.vue'
import { useSeries, useTabs } from '~/composables'
import MovieCard from '~/components/movie/MovieCard.vue'
import BaseButton from '~/components/base/BaseButton.vue'
import BaseLoading from '~/components/base/BaseLoading.vue'

export default defineComponent({
  name: 'Home',
  components: {
    Banner,
    Tabs,
    GridLayout,
    MovieCard,
    BaseButton,
    BaseLoading,
  },
  setup() {
    useMeta({
      title: 'Home',
      meta: [
        {
          name: 'description',
          content:
            'NextJS Movie App - Xem phim mọi lúc, mọi nơi, miễn phí truy cập vô thời hạn, kho phim khổng siêu khổng lồ, đủ mọi thể loại: Phim Kinh Dị, Phim Hoạt Hình, Phim Hành Động, Phim Phiêu Lưu, Phim 4K.',
        },
        {
          name: 'keywords',
          content:
            'Phim hành động, phim HD, VTV1, VTV2, VTV3, VTV6, K+, HTV, Thể Thao, Truyền Hình Trực Tuyến, Bóng Đá, Phim Hàn Quốc, Phim Trung Quốc, Ngoại hạng Anh, xem tivi miễn phí Data 4G',
        },
        {
          property: 'og:site_name',
          content: 'movie-app-nextjs-green.vercel.app',
        },
        {
          property: 'og:description',
          content:
            'NextJS Movie App - Xem phim mọi lúc, mọi nơi, miễn phí truy cập vô thời hạn, kho phim khổng siêu khổng lồ, đủ mọi thể loại: Phim Kinh Dị, Phim Hoạt Hình, Phim Hành Động, Phim Phiêu Lưu, Phim 4K.',
        },
        {
          property: 'og:title',
          content:
            'NextJS Movie App - Xem phim miễn phí, không lo quảng cáo, kho phim HD đặc sắc',
        },
        {
          property: 'og:image',
          content:
            'http://cdn-vttvas.public.storebox.vn/image1/TV360_static_image/tivi360.jpg',
        },
        {
          property: 'og:image:alt',
          content:
            'NextJS Movie App - Xem phim miễn phí, không lo quảng cáo, kho phim HD đặc sắc',
        },
      ],
    })

    const { tabs, updatePath, pathActive } = useTabs([
      {
        title: 'Today',
        path: 'airing_today',
      },
      {
        title: 'Top Rated',
        path: 'top_rated',
      },
      {
        title: 'On The Air',
        path: 'on_the_air',
      },
      {
        title: 'Popular',
        path: 'popular',
      },
    ])
    const { movies, changePage } = useSeries(pathActive)

    return {
      movies,
      changePage,
      tabs,
      updatePath,
    }
  },
  head: {},
})
</script>
