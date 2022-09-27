import {
  computed,
  Ref,
  ref,
  useAsync,
  // toRefs,
  useContext,
  watch,
} from '@nuxtjs/composition-api'
import { SeriesType } from '~/constants'
import { Series } from '~/types'
import TmdbResponse from '~/types/TmdbResponse'

export default function useSeries(type: Ref<SeriesType>) {
  const { $repository } = useContext()

  const movies = ref<TmdbResponse<Series>>({
    page: 1,
    results: [],
    total_pages: 1,
    total_results: 0,
  })

  const page = ref<number>(1)

  const fetchSeries = async () => {
    const response = await $repository.movies.getSeriesList(
      type.value,
      page.value
    )

    if (page.value > 1 && response && movies.value?.results) {
      movies.value = {
        ...movies.value,
        results: [...movies.value.results, ...response.results],
      }
    } else {
      movies.value = response
    }
  }

  watch(
    () => page.value,
    () => {
      useAsync(fetchSeries)
    },
    { immediate: true }
  )
  watch(
    () => type.value,
    () => {
      page.value = 1
      useAsync(fetchSeries)
    }
  )

  const changePage = () => {
    if (movies.value?.total_pages && page.value < movies.value.total_pages) {
      page.value = page.value + 1
    }
  }

  return {
    changePage,
    // ...toRefs(movies),
    movies: computed(() => movies.value),
  }
}
