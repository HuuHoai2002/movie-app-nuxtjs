import { Plugin } from '@nuxt/types'
import createRepository from '~/services/createRepository'

// tạo plugin repository

const repository: Plugin = (context, inject) => {
  const _repository = createRepository(context)

  // inject repository vào context của nuxt
  inject('repository', _repository)
}

export default repository
