import { Plugin } from '@nuxt/types'
import createRepository from '~/services/createRepository'

const repository: Plugin = (context, inject) => {
  const _repository = createRepository(context)

  inject('repository', _repository)
}

export default repository
