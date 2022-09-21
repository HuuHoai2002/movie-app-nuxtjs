// eslint-disable-next-line import/named
import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { SeriesType } from '~/constants'
import { Series, SeriesDetailSeasons } from '~/types'

export default function MovieService($axios: NuxtAxiosInstance) {
  return {
    getSeriesList: async (type: SeriesType): Promise<Series[]> => {
      return await $axios.$get(`/tv/${type}`)
    },
    getSeriesDetail: async (id: string): Promise<SeriesDetailSeasons> => {
      return await $axios.$get(`/tv/${id}&append_to_response=season/1`)
    },
  }
}
