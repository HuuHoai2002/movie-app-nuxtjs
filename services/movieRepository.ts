// eslint-disable-next-line import/named
import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { SeriesType } from '~/constants'
import { Series, SeriesDetailSeasons } from '~/types'
import TmdbResponse from '~/types/TmdbResponse'

export const movieRepository = ($axios: NuxtAxiosInstance) => {
  return {
    getSeriesList: async (
      type: SeriesType,
      page: number
    ): Promise<TmdbResponse<Series>> => {
      return await $axios.$get(`/tv/${type}`, {
        params: {
          page,
        },
      })
    },
    getSeriesDetail: async (id: string): Promise<SeriesDetailSeasons> => {
      return await $axios.$get(`/tv/${id}`, {
        params: {
          append_to_response: 'season/1',
        },
      })
    },
  }
}

export type MovieRepository = ReturnType<typeof movieRepository>
