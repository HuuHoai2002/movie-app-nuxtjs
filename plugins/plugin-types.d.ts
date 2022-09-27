import { Repository } from '~/services'

declare module '@nuxt/types' {
  interface Context {
    $repository: Repository
  }
}
