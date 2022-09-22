// eslint-disable-next-line import/named
import { ImageType } from '~/constants'

export const imageRepository = () => {
  return {
    getImages: (type: ImageType, path: string) => {
      return `${process.env.IMAGE_URL}/${type}${path}`
    },
  }
}

export type ImageRepository = ReturnType<typeof imageRepository>
