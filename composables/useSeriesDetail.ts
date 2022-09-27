import { Ref, ref, useAsync, useContext, watch } from '@nuxtjs/composition-api'
import { SeriesDetail } from '~/types'

export default function useSeriesDetail(movieId: Ref<string>) {
  const { $repository } = useContext()

  const movies = ref<SeriesDetail | null>(null)

  const fetchSeries = async () => {
    const response = await $repository.movies.getSeriesDetail(movieId.value)
    movies.value = response
  }

  watch(
    () => movieId.value,
    () => {
      useAsync(fetchSeries)
    },
    { immediate: true }
  )

  return {
    movies,
  }
}
