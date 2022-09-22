import { Context } from '@nuxt/types'
import {
  ImageRepository,
  imageRepository,
  MovieRepository,
  movieRepository,
} from '~/services'

export type Repository = {
  movies: MovieRepository
  images: ImageRepository
}

// kết hợp các repository lại với nhau

const createRepository = ({ $axios }: Context): Repository => {
  return {
    movies: movieRepository($axios),
    images: imageRepository(),
  }
}

export default createRepository
