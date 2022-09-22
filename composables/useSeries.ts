import { ref, useContext, watch } from '@nuxtjs/composition-api'
import { SeriesType } from '~/constants'
import { Series } from '~/types'
import TmdbResponse from '~/types/TmdbResponse'

export default function useSeries(type: SeriesType) {
  const { $repository } = useContext()

  const movies = ref<TmdbResponse<Series>>({
    page: 1,
    results: [],
    total_pages: 1,
    total_results: 0,
  })

  const page = ref<number>(1)

  const fetchSeries = async () => {
    const response = await $repository.movies.getSeriesList(type, page.value)

    if (page.value > 1 && response && movies.value?.results) {
      movies.value = {
        ...movies.value,
        results: [...movies.value.results, ...response.results],
      }
    } else {
      movies.value = response
    }
  }

  watch(() => page.value, fetchSeries, { immediate: true })

  const changePage = () => {
    if (movies.value?.total_pages && page.value < movies.value.total_pages) {
      page.value = page.value + 1
    }
  }

  return { changePage, movies }
}
